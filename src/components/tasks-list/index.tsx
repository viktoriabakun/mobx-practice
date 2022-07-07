import type { FC } from 'react';
import React, { useContext } from 'react';
import './styles.css';
import TodoStore from '../../stores/todo';

const TasksList: FC = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TodoStore);

  return (
    <ul className="list">
      {tasks?.map(({ id, title, isDone }, index) => (
        <li key={id} role="presentation" className={`task`}>
          <input checked={isDone} onChange={() => toggleTask(index)} type="checkbox" />
          <div className={`taskText ${isDone ? 'completed' : ''}`}>{title}</div>
          <button className="deleteBtn" type="button" onClick={() => deleteTask(id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
