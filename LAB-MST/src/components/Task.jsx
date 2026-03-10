import { useState } from "react";
import useForm from "../hooks/useForm";

function Task() {
  const [tasks, setTasks] = useState([]);
  const { formData, handleChange, resetForm } = useForm({
    title: "",
    priority: "Low",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = formData.title.trim();
    if (!title) return;

    setTasks((prev) => [...prev, { id: Date.now(), title, priority: formData.priority }]);
    resetForm();
  };

  return (
    <div className="task-wrapper">
      <h2>Task Manager</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} | {task.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
