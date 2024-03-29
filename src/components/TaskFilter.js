import React from 'react';

function TaskFilter({ filter, setFilter }) {
  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="categoryFilter" className="block font-semibold">Filter by Category:</label>
      <select id="categoryFilter" value={filter} onChange={handleChange} className="border rounded-md px-4 py-2 w-full">
        <option value="">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
}

export default TaskFilter;