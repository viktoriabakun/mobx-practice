import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import TodoStore from "../../stores/todo";
import TasksList from "../../components/tasks-list";
import Controllers from "../../components/controllers";

import "./styles.css"


const TodoList = observer(() => {
    const {tasks, remainingTodos} = useContext(TodoStore);

    return (
        <div className="todoContainer">
            <Controllers/>
            <TasksList/>
            <p className="remaining">{remainingTodos} / {tasks.length} left</p>
        </div>
    );
});

export default TodoList;