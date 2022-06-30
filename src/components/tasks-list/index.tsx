import type { FC } from 'react';
import React, { useContext } from 'react';
import './styles.css';
import TodoStore from '../../stores/todo';

const TasksList: FC = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TodoStore);

  return (
    <ul className="list">
      {tasks?.map(({ id, text, completed }, index) => (
        <li
          key={id}
          role="presentation"
          onClick={() => toggleTask(index)}
          className={`task ${completed ? 'completed' : ''}`}>
          <input checked={completed} type="checkbox" />
          <div>{text}</div>
          <button type="button" onClick={() => deleteTask(id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
