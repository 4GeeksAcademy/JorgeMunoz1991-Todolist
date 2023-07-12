import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleSubmit = (e) => {
    setTasks([...tasks, e.target[0].value])
    e.preventDefault()
    console.log(e)
  }

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Ingrese una tarea"
        />
    </form>
      <button onClick={addTask}>Agregar</button>

      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas, añadir tareas.</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
