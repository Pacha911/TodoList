import React, {useState} from "react";

const AddTodo=({handleAdd}) => {
    const [text, setText] = useState("");
    const add = () => {
        if (!text) return;
        handleAdd({id:Math.random(), isCompleted:false, editable:false, text:text})
        setText("")
    }
    return (
        <div className="add">
            <div className="add-text">
            <h1>TO-DO APP!</h1>
            <h4>Add New To-Do</h4>
            </div>
            <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            />
            <button className="add-btn" onClick={add}>Add</button>
        </div>
    )
}

export default AddTodo
