import {Injectable} from "angular2/core";
import {Todo, TodoStore} from '../store';

@Injectable()
export class TodoService {
    private _todoStore: TodoStore;
    
    constructor() {
        this._todoStore = new TodoStore();
    }
    
    getTodos() {
        return Promise.resolve(this._todoStore.todos);
    }
}