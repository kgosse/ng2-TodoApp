import {Component, OnInit} from "angular2/core";
import {Todo} from "../store/index";
import {TodoService} from "../services/todo.service";

@Component({
    selector:'todo-list',
    template:`
            <ul id="todo-list">
              <li *ngFor="#todo of todos" [class.completed]="todo.done" [class.editing]="todo.editing">
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


    constructor(private _todoService: TodoService){
        this._todoService.todoEvent.subscribe(() => this.getTodos());
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