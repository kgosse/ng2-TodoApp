import {Injectable, EventEmitter} from "angular2/core";
import {Todo, TodoStore} from '../store';

interface Action {
    type: string,
    payload?: any
}

@Injectable()
export class TodoService {
    public todoEvent: EventEmitter<Action>;
    private _todoStore: TodoStore;
    
    constructor() {
        this._todoStore = new TodoStore();
        this.todoEvent = new EventEmitter();
    }
    
    getTodos() {
        return Promise.resolve(this._todoStore.todos);
    }
    
    addTodo(todo: Todo) {
        this._todoStore.add(todo);
    }
    
    getTodosLength() {
        return this._todoStore.todos.length;
    }
    
    getRemainingTasksLength() {
        return this._todoStore.getRemaining().length;
    }

    archive() {
        this._todoStore.removeDoneTasks();
        this.todoEvent.emit({
            type: 'archive'
        });
    }

    toggleTodos() {
        this._todoStore.toggleAll();
    }
    
    removeTodo(todo: Todo) {
        this._todoStore.remove(todo);
    }
    
    saveTodos() {
        this._todoStore.updateStore();
    }
}