import { computed, observable } from 'mobx';
import { createContext } from 'react';
import type { ITask } from '../interfaces/todolist';

export class Tasks {
  @observable tasks: ITask[] = [
    { id: '1', title: 'Buy eggs', isDone: true },
    { id: '2', title: 'Write a post', isDone: false },
    { id: '3', title: 'Learn mobx', isDone: false },
  ];

  @computed get remainingTodos(): number {
    return this.tasks.filter((t) => !t.isDone).length;
  }

  toggleTask = (index: number): void => {
    this.tasks[index].isDone = !this.tasks[index].isDone;
  };

  addTask = (task: ITask): void => {
    this.tasks = [...this.tasks, task];
  };

  deleteTask = (taskId: string): void => {
    this.tasks = this.tasks.filter((task) => taskId !== task.id);
  };
}

export default createContext(new Tasks());
