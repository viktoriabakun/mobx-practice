import React, {useContext} from 'react';
import TodoStore from "../../stores/todo";
import TodoList from "../../components/todolist";
import {observer} from "mobx-react-lite";

const Todo = observer(() => {
    const store = useContext(TodoStore)

    return (
    <div>
        <TodoList
        todos={store.todos}
        toggleTodo={store.toggleTodo}
        />
        <p>{store.remainingTodos} / {store.todos.length} left</p>
    </div>
    );
});

export default Todo;