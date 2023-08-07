import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="title">To do list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="input-task"
          placeholder="Add a task"
        />
        <button className="add-button">Add</button>
      </form>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="empty-task">no tasks, add one</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className={`task-item ${task.completed ? 'completed' : ''}`}
              onClick={() => toggleTaskCompletion(index)}
            >
              <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                {task.text}
              </span>
              <span
                className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTaskCompletion(index);
                }}
              >
                {task.completed && <i className="fas fa-check"></i>}
              </span>
              <span
                className="remove-button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTask(index);
                }}
              >
                X
              </span>
            </li>
          ))
        )}
      </ul>

      {tasks.length > 0 && (
        <p className="task-counter">
          {tasks.filter((task) => !task.completed).length} item left
        </p>
      )}
    </div>
  );
};

export default TodoList;
