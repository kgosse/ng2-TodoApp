import {Component, OnInit} from "@angular/core";
import {Todo} from "../store/index";
import {TodoService} from "../services/todo.service";
import {Action} from "../interfaces/Action";
import {ARCHIVE, STATUS_CHANGE, TEXT_CHANGE} from "../constants/ActionTypes";
import {ALL} from "../constants/Statuses";
import {StatusPipe} from "../pipes/status.pipe";
import {TextPipe} from "../pipes/text.pipe";

@Component({
    selector:'todo-list',
    pipes: <any>[StatusPipe, TextPipe],
    template:`
            <ul id="todo-list">
              <li *ngFor="let todo of (todos | status: _status) | text: _text" [class.completed]="todo.done" [class.editing]="todo.editing">
                <div class="view">
                  <input type="checkbox" class="toggle" [checked]="todo.done" (click)="toggleCheck(todo)">
                  <label (dblclick)="editTodo(todo)">{{todo.text}}</label>
                  <button class="destroy" (click)="removeTodo(todo)"></button>
                </div>
                <input class="edit" *ngIf="todo.editing" [value]="todo.text" #editedtodo (blur)="stopEditing(todo, editedtodo.value)" (keyup.enter)="updateEditingTodo(todo, editedtodo.value)" (keyup.escape)="cancelEditingTodo(todo)">
              </li>
            </ul>
            `
})
export class TodoList implements OnInit{
    todos: Todo[];
    _status: "";
    _text: "";


    constructor(private _todoService: TodoService){
        this._todoService.todoEvent.subscribe((action:Action) => {
            switch (action.type) {
                case ARCHIVE:
                    this.getTodos();
                    break;
                case STATUS_CHANGE:
                    if (action.payload === ALL)
                        this.getTodos();
                    this._status = action.payload;
                    break;
                case TEXT_CHANGE:
                    this._text = action.payload;
                    break;
            }
        });
    }


    stopEditing(todo: Todo, editedTitle: string) {
        todo.text = editedTitle;
        todo.editing = false;
    }

    cancelEditingTodo(todo: Todo) {
        todo.editing = false;
    }

    updateEditingTodo(todo: Todo, editedTitle: string) {
        editedTitle = editedTitle.trim();
        todo.editing = false;

        if (editedTitle.length === 0) {
            return this.removeTodo(todo);
        }

        todo.text = editedTitle;
        this._todoService.saveTodos();
    }

    editTodo(todo:Todo) {
        todo.editing = true;
    }

    getTodos() {
        this._todoService.getTodos().then(todos => this.todos = todos);
    }
    
    toggleCheck(todo) {
        todo.done = !todo.done;
        this._todoService.saveTodos();
    }
    
    removeTodo(todo:Todo) {
        this._todoService.removeTodo(todo);
    }

    ngOnInit() {
        this.getTodos();
    }
}