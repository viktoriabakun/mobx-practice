import { nanoid } from 'nanoid';
import type { ChangeEvent, FC } from 'react';
import React, { useCallback, useContext, useState } from 'react';
import type { ITask } from '../../interfaces/todolist';
import TodoStore from '../../stores/todo';
import './styles.css';

const initTask: ITask = { id: '', title: '', isDone: false };

const Controllers: FC = () => {
  const { addTask } = useContext(TodoStore);

  const [newTask, setNewTask] = useState(initTask);

  const onAddTask = useCallback(() => {
    addTask({ ...newTask, id: nanoid() });
    setNewTask(initTask);
  }, [addTask, newTask]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTask({ ...newTask, title: e.target.value });

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }

    onAddTask();
  };

  return (
    <div className="controllers">
      <input value={newTask.title} onChange={onChange} onKeyPress={onKeyPress} type="text" />
      <button className="addBtn" type="button" disabled={!newTask.title} onClick={onAddTask}>
        Add task
      </button>
    </div>
  );
};

export default Controllers;
