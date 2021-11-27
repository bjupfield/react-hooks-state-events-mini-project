import React from "react";

function TaskList({tasks, func, categories}) {
  return (
    <div className="tasks">
      {tasks.map(e=>{
        let id = "b"
        for(let key in tasks){
          if(tasks[key] === e){
            id = key;
          }
        }
        const b = categories.find(z =>{
          return z === e.category
        })
          return func(e, id, b)

      })}
    </div>
  );
}

export default TaskList;
