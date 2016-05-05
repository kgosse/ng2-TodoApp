
import {Component} from "angular2/core";
import {TodoService} from "../services/todo.service";

@Component({
    selector: 'menubar',
    template: `
      <style>
        .archive {
          text-decoration: none;
          color: #fff;
        }
        .archive:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      </style>
      <div id="menubar">
        <span id="todo-count">
          <strong>{{getRemainingTasksLength()}}</strong> of <strong>{{getTodosLength()}} </strong>remaining
        </span>
        <div>
          <input type="text" placeholder="Filter by text"> &nbsp;&nbsp;
          <select name="" id="">
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <a href="#" (click)="archive()" class="archive">Archive (<strong>{{getTodosLength() - getRemainingTasksLength()}}</strong>)</a>
      </div>
    `
})
export class Menubar {
    getTodosLength = () => this._todoService.getTodosLength();
    getRemainingTasksLength = () => this._todoService.getRemainingTasksLength();

    constructor(private _todoService: TodoService) {}

    archive() {
        this._todoService.archive();
    }
}