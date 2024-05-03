import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      addTask();
    }
  };

  return (
    <>
      <div className="todo-list">
        <h1>TODO LIST</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add New Task"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button className="btn" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index} className="task">
              <span>{task}</span>
              <div className="btn-container">
                <button className="delete" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="moveup" onClick={() => moveTaskUp(index)}>
                  Up
                </button>
                <button
                  className="movedown"
                  onClick={() => moveTaskDown(index)}
                >
                  Down
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
