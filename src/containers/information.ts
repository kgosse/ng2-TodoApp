
import {Component} from "angular2/core";
import {TodoService} from "../services/todo.service";

@Component({
    selector: 'information',
    template: `
      <style>
        .archive {
          color: blue;
        }
        .archive:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      </style>
      {{getRemainingTasksLength()}} of {{getTodosLength()}} remaining [<span class="archive" (click)="archive()">archive</span>]
    `
})
export class Information {
    getTodosLength = () => this._todoService.getTodosLength();
    getRemainingTasksLength = () => this._todoService.getRemainingTasksLength();
    
    constructor(private _todoService: TodoService) {}

    archive() {
        this._todoService.archive();
    }
}