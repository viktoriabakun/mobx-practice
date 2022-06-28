import React, {FC} from 'react'

interface ITask {
    id: number;
    text: string;
    completed: boolean;
}

interface ITodoList {
    todos: ITask[];
    toggleTodo: (index: number) => void;
}

const TodoList: FC<ITodoList> = ({ todos, toggleTodo }) =>
    (
        <ul
            data-testid="todoList"
            style={{listStyle: 'none'}}
        >
            {todos &&
            todos.map((t, i) => (
                <li
                    onClick={() => toggleTodo(i)}
                    style={{
                        margin: 10,
                        opacity: t.completed ? 0.5 : 1,
                        cursor: 'pointer',
                        textDecoration: t.completed
                            ? 'line-through'
                            : 'none'
                    }}
                    key={t.id}
                >
                    {t.text}
                </li>
            ))}
        </ul>
    )

export default TodoList
