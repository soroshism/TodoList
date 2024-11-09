import React, { useState } from 'react';

const TodoItem = ({ todo, index, deleteTodo, toggleComplete, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && newText.trim()) {
            editTodo(index, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className="todo-item flex items-center justify-between p-2 mb-2 bg-gray-100 rounded">
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onBlur={handleEdit}
                    onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
                    className="edit-input w-full p-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
            ) : (
                <span
                    onClick={() => toggleComplete(index)}
                    className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                    {todo.text}
                </span>
            )}
            <div className="buttons space-x-2">
                <button
                    onClick={() => deleteTodo(index)}
                    className="delete-button p-1 text-red-500 hover:text-red-700"
                >
                    حذف
                </button>
                <button
                    onClick={handleEdit}
                    className="edit-button p-1 text-blue-500 hover:text-blue-700"
                >
                    {isEditing ? 'ذخیره' : 'ویرایش'}
                </button>
                <button
                    onClick={() => toggleComplete(index)}
                    className={`complete-button p-1 text-white rounded ${todo.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'
                        }`}
                >
                    {todo.completed ? 'انجام شد' : 'تکمیل نشده'}
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
