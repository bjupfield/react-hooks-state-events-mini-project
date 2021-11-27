import React from "react";

function NewTaskForm({categories, addTask, taskName, onTaskName, onSelectCat}) {
  return (
    <form className="new-task-form" onSubmit = {addTask}>
      <label>
        Details
        <input type="text" name="text" value = {taskName} onChange = {onTaskName}/>
      </label>
      <label>
        Category
        <select name="category" onChange = {onSelectCat}>
          {categories.map(e=>{
            if(e !== "All") return <option key = {categories.indexOf(e)}>{e}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
