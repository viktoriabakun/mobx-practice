import { computed, observable } from 'mobx';
import { createContext } from 'react';
import type { ITask } from '../interfaces/todolist';

export class Tasks {
  @observable tasks: ITask[] = [
    { id: '1', text: 'Buy eggs', completed: true },
    { id: '2', text: 'Write a post', completed: false },
    { id: '3', text: 'Learn mobx', completed: false },
  ];

  @computed get remainingTodos() {
    return this.tasks.filter((t) => !t.completed).length;
  }

  toggleTask = (index: number) => {
    this.tasks[index].completed = !this.tasks[index].completed;
  };

  addTask = (task: ITask) => {
    this.tasks = [...this.tasks, task];
  };

  deleteTask = (taskId: string) => {
    this.tasks = this.tasks.filter((task) => taskId !== task.id);
  };
}

export default createContext(new Tasks());
