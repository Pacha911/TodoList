import React, {useState} from 'react'

const Todo=({element, handleDelete, handleComplete, handleEdit, handleSave}) => {
    const [text,setText] = useState(element.text)
    const delet=() => {
        handleDelete(element.id)
    }
    const complete=() => {
        handleComplete(element.id)
    }
    const edit=() => {
        handleEdit(element.id)
    }
    const save=() => {
        handleSave(element.id, text)
    }
    
    return (
        <>
        {element.editable ? (
            <div className="todo">
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button className="eddit-btn" onClick={save}>Save</button>
                <button className="eddit-btn" onClick={(text)}>Cancel</button>
            </div>

        ) : (<div className="todo" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {" "}
            <p style={{ textDecoration:element.isCompleted&& "line-through"}} > {element.text} </p>
            <button className="eddit-btn" onClick={delet}>Delete</button>
            <button className="eddit-btn" onClick={edit} >Edit</button>
            <button className="eddit-btn" onClick={complete}>{element.isCompleted ? "Not complete" : "Complete"}</button>
        </div>)}
        
        </>
    )
}

export default Todo

