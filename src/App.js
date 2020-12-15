import React, {useState} from "react";
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos,setTodos] = useState([
    {id:0, isCompleted:false, editable:false, text:"Houssem Bacha"},
    {id:1, isCompleted:false, editable:false, text:"Rami Gharbi"}]);
  const handleAdd = (x) => {
    setTodos([...todos, x])
  }
  const handleDelete = (idTodo) => {
    setTodos(todos.filter(el => el.id !== idTodo))
  }
  const handleComplete = (i) => {
    setTodos(todos.map(el => el.id === i ? {...el,isCompleted : !el.isCompleted} : el))
  }
  const handleEdit = (i) => {
    setTodos(todos.map(el => el.id === i ? {...el,editable : !el.editable} : el))
  }
  const handleSave = (id,edited) => {
    setTodos(todos.map(el => el.id === id ? 
      {...el, text:edited, editable:false} : 
      el))
  }
  
    return (
    <div className="App">
      <div className="todo-list">
      <AddTodo  handleAdd={handleAdd} />
      </div>
      <div className="edit-list">
      <TodoList todos={todos} 
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      handleEdit={handleEdit}
      handleSave={handleSave} />
      </div>
    </div>
  )
}
