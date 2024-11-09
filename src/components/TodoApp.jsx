import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (e) => {
        if (e.key === 'Enter' && newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (index, newText) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-app p-4 max-w-md mx-auto bg-white rounded shadow-lg">
            <input
                type="text"
                placeholder="کار جدید را وارد کنید"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={addTodo}
                className="input w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleComplete={toggleComplete}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
