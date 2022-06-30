import React, {ChangeEvent, useCallback, useContext, useState} from 'react';
import {nanoid} from "nanoid";
import TodoStore from "../../stores/todo";
import {ITask} from "../../interfaces/todolist";

const initTask: ITask = {id: "", text: "", completed: false};

const Controllers = () => {
    const [newTask, setNewTask] = useState(initTask);

    const {addTask} = useContext(TodoStore);

    const onAddTask = useCallback(() => {
        addTask({...newTask, id: nanoid()});
        setNewTask(initTask);
    }, [newTask.text]);

    const onChange =  (e: ChangeEvent<HTMLInputElement>) => setNewTask({...newTask, text: e.target.value});

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;

        onAddTask();
    };

    return (
    <div>
        <input value={newTask.text} onChange={onChange} onKeyPress={onKeyPress} type="text"/>
        <button onClick={onAddTask}>Add task</button>
    </div>
    );
};

export default Controllers;