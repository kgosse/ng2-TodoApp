import {Component} from 'angular2/core';
import {TodoService} from "../services/todo.service";
import {TodoList} from "./todo-list";

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
export class AppComponent { }
