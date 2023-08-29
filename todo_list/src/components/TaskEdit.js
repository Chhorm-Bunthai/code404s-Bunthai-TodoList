import React, { useState } from "react";

function TaskEdit({ editTodo, task }) {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  const handleChange = function(e){
    setValue(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit} className="TaskForm">
        <input type="text" value={value} onChange={handleChange} className="input" placeholder='Add your task' />
        <button type="submit" className='btn'>Add</button>
    </form>
  );
}

export default TaskEdit;
