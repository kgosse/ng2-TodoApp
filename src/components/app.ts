import {Component} from 'angular2/core';
import {TodoService} from "../services/todo.service";
import {TodoList} from "./todo-list";
import {Todo} from "../store/index";
import {Menubar} from "./menubar";

@Component({
    selector: 'app',
    styleUrls: ['assets/styles/app.css'],
    templateUrl: 'templates/app.html',
    providers: [
        TodoService
    ],
    directives: [
        TodoList,
        Menubar
    ]
})
export class App {
    todo:Todo = new Todo('');

    constructor(private _todoService: TodoService) {}

    addTodo() {
        if (this.todo.text.trim() === '')
            return;
        this._todoService.addTodo(this.todo);
        this.todo = new Todo('');
    }
    
    toggleTodos() {
        this._todoService.toggleTodos();
    }
}
