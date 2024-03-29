import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    const filterTasks = () => {
      if (!filter) {
        setFilteredTasks(tasks);
      } else {
        const filtered = tasks.filter(task => task.category === filter);
        setFilteredTasks(filtered);
      }
    };
    filterTasks();
  }, [tasks, filter]);

  const addTask = async task => {
    try {
      const response = await axios.post('/tasks', task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async id => {
    try {
      await axios.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
