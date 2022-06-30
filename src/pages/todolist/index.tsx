import React, {ChangeEvent, useContext, useState} from 'react';
import TodoStore from "../../stores/todo";
import TasksList from "../../components/tasks-list";
import {observer} from "mobx-react-lite";
import { nanoid } from 'nanoid'

import "./styles.css"
import {ITask} from "../../interfaces/todolist";

const initTask: ITask = {id: "", text: "", completed: false};

const TodoList = observer(() => {
    const [newTask, setNewTask] = useState(initTask);

    const {tasks, toggleTodo, remainingTodos, addTask} = useContext(TodoStore);

    return (
    <div className="todoContainer">
        <TasksList
        tasks={tasks}
        toggleTask={toggleTodo}
        />

        <p className="remaining">{remainingTodos} / {tasks.length} left</p>
        <input value={newTask.text} onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTask({...newTask, text: e.target.value})} type="text"/>
        <button onClick={() => {
            addTask({...newTask, id: nanoid()});
            setNewTask(initTask);
        }
        }>add</button>
    </div>
    );
});

export default TodoList;