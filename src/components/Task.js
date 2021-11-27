import React from "react";

function Task(item, id, category) {
  return (
    <div className="task" key={id}>
      <div className="label">{category}</div>
      <div className="text">{item.text}</div>
      <button className="delete" onClick = {e=>{
        e.target.parentNode.remove()
        }}>X</button>
    </div>
  );
}

export default Task;
