import React from "react";

function CategoryFilter({categories, onCatChange, catagory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(e=>{
        return <button key = {categories.indexOf(e)} onClick = {onCatChange} className = {catagory === e ? "selected" : ""}>{e}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
