import {Component, OnInit} from "angular2/core";
import {Todo} from "../store/index";
import {TodoService} from "../services/todo.service";

@Component({
    selector:'todo-list',
    template:`
            <style>
              .done {
                text-decoration: line-through;
              }
            </style>
            <div *ngFor="#todo of todos">
              <div>
                <input type="checkbox" [checked]="todo.done"  (click)="toggleCheck(todo)"> <span [ngClass]="{done: todo.done}">{{todo.text}}</span>
              </div>
            </div>
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

    ngOnInit() {
        this.getTodos();
    }
}