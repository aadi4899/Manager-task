import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description, priority, category });
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full border rounded-md px-4 py-2"
        />
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border rounded-md px-4 py-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="w-full border rounded-md px-4 py-2"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Category"
          className="w-full border rounded-md px-4 py-2"
        />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;