export class Todo {
    done: Boolean;

    private _text: String;
    get text() {
        return this._text;
    }
    set text(value: String) {
        this._text = value.trim();
    }

    constructor(text: String) {
        this.done = false;
        this.text = text.trim();
    }
}

export class TodoStore {
    todos: Array<Todo>;

    constructor() {
        let persistedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        // Normalize back into classes
        this.todos = persistedTodos.map( (todo: {_text: String, done: Boolean}) => {
            let ret = new Todo(todo._text);
            ret.done = todo.done;
            return ret;
        });
        this.todos.push(new Todo('todo app'));
    }

    private updateStore() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    private getTasks(done: Boolean) {
        return this.todos.filter((todo: Todo) => todo.done === done);
    }

    removeDoneTasks() {
        this.todos = this.getTasks(false);
        this.updateStore();
    }

    getRemaining() {
        return this.getTasks(false);
    }

    getDoneTasks() {
        return this.getTasks(true);
    }

    toggleTask(todo: Todo) {
        todo.done = !todo.done;
        this.updateStore();
    }

    add(todo: Todo) {
        this.todos.push(todo);
        this.updateStore();
    }
}