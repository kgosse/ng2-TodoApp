import {Component, OnInit} from "angular2/core";
import {Todo} from "../store/index";
import {TodoService} from "../services/todo.service";

@Component({
    selector:'todo-list',
    template:`
            <ul id="todo-list">
              <li *ngFor="#todo of todos">
                <div class="view">
                  <input type="checkbox" class="toggle">
                  <label>{{todo.text}}</label>
                  <button class="destroy"></button>
                </div>
                <input type="text" (click)="toggleCheck(todo)" [(ngModel)]="todo.text" class="edit"/>
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

    ngOnInit() {
        this.getTodos();
    }
}