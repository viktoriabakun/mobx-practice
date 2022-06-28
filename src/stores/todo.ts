import { createContext } from 'react'
import { observable, computed } from 'mobx'

export class Todos {
    @observable todos = [
        { id: 1, text: 'Buy eggs', completed: true },
        { id: 2, text: 'Write a post', completed: false },
        { id: 3, text: 'Learn mobx', completed: false }
    ]

    @computed  get remainingTodos() {
        return this.todos.filter(t => !t.completed).length
    }

    toggleTodo = (index: number) => {
        this.todos[index].completed = !this.todos[index]
            .completed
    }
}

export default createContext(new Todos())
