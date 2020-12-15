import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, handleDelete, handleComplete, handleEdit, handleSave}) => {
    return (
        <div>
            {todos.map((el) => (
            <Todo key={el.id} element={el} 
            todos={todos} 
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            handleEdit={handleEdit}
            handleSave={handleSave} /> 
            ))}
        </div>
    )
}

export default TodoList
