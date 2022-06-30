import React, {FC, useContext} from 'react'

import "./styles.css"
import TodoStore from "../../stores/todo";

const TasksList: FC = () => {
    const {tasks, toggleTask, deleteTask} = useContext(TodoStore);

    return (
        <ul className="list">
            {tasks?.map(({id, text, completed}, index) => (

                <li
                    key={id}
                    onClick={() => toggleTask(index)}
                    className={`task ${completed && 'completed'}`}
                >
                    <input checked={completed} type="checkbox"/>
                    <div>{text}</div>
                    <div onClick={() => deleteTask(id)}>x</div>
                </li>
            ))}
        </ul>
    );
}

export default TasksList
