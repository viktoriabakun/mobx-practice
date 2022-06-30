import { nanoid } from 'nanoid';
import type { ChangeEvent } from 'react';
import React, { useCallback, useContext, useState } from 'react';
import type { ITask } from '../../interfaces/todolist';
import TodoStore from '../../stores/todo';

const initTask: ITask = { id: '', text: '', completed: false };

const Controllers = () => {
  const [newTask, setNewTask] = useState(initTask);

  const { addTask } = useContext(TodoStore);

  const onAddTask = useCallback(() => {
    addTask({ ...newTask, id: nanoid() });
    setNewTask(initTask);
  }, [addTask, newTask]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTask({ ...newTask, text: e.target.value });

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }

    onAddTask();
  };

  return (
    <div>
      <input value={newTask.text} onChange={onChange} onKeyPress={onKeyPress} type="text" />
      <button type="button" onClick={onAddTask}>
        Add task
      </button>
    </div>
  );
};

export default Controllers;
