import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const[category, handleCatChange] = useState("All");
  const[actualTask, handleCatTask] = useState([...TASKS])
  const[taskName, handleTaskName] = useState("");
  const[cat, handCat] = useState("");
  function onCatChange(e){
    handleCatChange(e.target.textContent)
  }
  function onTaskName(e){
    handleTaskName(e.target.value)
  }
  function onCat(e){
    handCat(e.target.value)
  }
  function onTaskFormSubmit(e){
    e.preventDefault()
    handleCatTask([...actualTask, {
      text: taskName,
      category : cat
    }])
  }
  const taskToDisplay = actualTask.filter((task)=>{
    if(category === "All") return true;
    return task.category === category;
  })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} onCatChange = {onCatChange} catagory = {category}/>
      <NewTaskForm categories = {CATEGORIES} addTask = {onTaskFormSubmit} taskName = {taskName} onTaskName = {onTaskName} onSelectCat = {onCat}/>
      <TaskList tasks = {taskToDisplay} func = {Task} categories = {CATEGORIES}/>
    </div>
  );
}

export default App;
