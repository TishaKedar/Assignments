// components/TaskList.jsx
import React, { useState } from "react";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>📝 Task List</h3>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => deleteTask(i)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
