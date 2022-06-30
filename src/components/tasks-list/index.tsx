import React, {FC} from 'react'
import {ITask} from "../../interfaces/todolist";

import "./styles.css"

 interface ITasksList {
    tasks: ITask[];
    toggleTask: (index: number) => void;
}

const TasksList: FC<ITasksList> = ({ tasks, toggleTask }) =>
    (
        <ul className="list">
            {tasks?.map(({id, text, completed}, index) => (

                <li
                    key={id}
                    onClick={() => toggleTask(index)}
                    className={`task ${completed && 'completed'}`}
                >
                    <input checked={completed} type="checkbox"/>
                    <div>{text}</div>
                </li>
            ))}
        </ul>
    )

export default TasksList
