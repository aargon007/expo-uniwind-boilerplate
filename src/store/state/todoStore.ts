import { create } from 'zustand';

// Zustand store for managing todos
const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todo) =>
        set((state) => ({
            todos: [...state.todos, { id: Date.now(), text: todo, completed: false }]
        })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        }))
}));

export default useTodoStore;