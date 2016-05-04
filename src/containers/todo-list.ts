import {Component, OnInit} from "angular2/core";
import {Todo} from "../store/index";
import {TodoService} from "../services/todo.service";

@Component({
    selector:'todo-list',
    template:`
            <div *ngFor="#todo of todos">
              <div>
                <input type="checkbox" [checked]="todo.done"> {{todo.text}}
              </div>
            </div>
            `
})
export class TodoList implements OnInit{
    todos: Todo[];

    constructor(private _todoService: TodoService){
    }

    getHeroes() {
        this._todoService.getTodos().then(todos => this.todos = todos);
    }

    ngOnInit() {
        this.getHeroes();
    }
}