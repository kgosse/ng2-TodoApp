import {Component} from 'angular2/core';
import {TodoService} from "../services/todo.service";
import {TodoList} from "./todo-list";
import {Todo} from "../store/index";
import {Information} from "./information";

@Component({
    selector: 'app',
    styleUrls: ['assets/styles/app.css'],
    templateUrl: 'templates/app.template.html',
    providers: [
        TodoService
    ],
    directives: [
        TodoList,
        Information
    ]
})
export class AppComponent {
    todo:Todo = new Todo('');

    constructor(private _todoService: TodoService) {}

    onSubmit() {
        if (this.todo.text.trim() === '')
            return;
        this._todoService.addTodo(this.todo);
        this.todo = new Todo('');
    }
}
