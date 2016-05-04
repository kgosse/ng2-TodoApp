import {Component} from 'angular2/core';
import {TodoService} from "../services/todo.service";
import {TodoList} from "./todo-list";
import {Todo} from "../store/index";

@Component({
    selector: 'app',
    styleUrls: ['styles/app.css'],
    templateUrl: 'templates/app.template.html',
    providers: [
        TodoService
    ],
    directives: [
        TodoList
    ]
})
export class AppComponent {
    todo:Todo = new Todo('');

    constructor(private _todoService: TodoService) {}

    onSubmit() {
        this._todoService.addTodo(this.todo);
        this.todo = new Todo('');
    }
}
