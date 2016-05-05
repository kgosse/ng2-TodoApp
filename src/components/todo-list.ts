import {Component, OnInit} from "angular2/core";
import {Todo} from "../store/index";
import {TodoService} from "../services/todo.service";

@Component({
    selector:'todo-list',
    template:`
            <ul id="todo-list">
              <li *ngFor="#todo of todos" [ngClass]="{completed: todo.done}">
                <div class="view">
                  <input type="checkbox" class="toggle" [checked]="todo.done" (click)="toggleCheck(todo)">
                  <label>{{todo.text}}</label>
                  <button class="destroy" (click)="removeTodo(todo)"></button>
                </div>
                <input type="text" [(ngModel)]="todo.text" class="edit"/>
              </li>
            </ul>
            `
})
export class TodoList implements OnInit{
    todos: Todo[];


    constructor(private _todoService: TodoService){
        this._todoService.todoEvent.subscribe(() => this.getTodos());
    }

    getTodos() {
        this._todoService.getTodos().then(todos => this.todos = todos);
    }
    
    toggleCheck(todo) {
        todo.done = !todo.done;
    }
    
    removeTodo(todo:Todo) {
        this._todoService.removeTodo(todo);
        console.log(this.todos);
    }

    ngOnInit() {
        this.getTodos();
    }
}