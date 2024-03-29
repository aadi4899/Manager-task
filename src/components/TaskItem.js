import React from 'react';

function TaskItem({ task, deleteTask }) {
  return (
    <div className="border rounded-md p-4 my-4 flex justify-between items-center">
      <div>
        <h2 className="font-semibold">{task.title}</h2>
        <p>{task.description}</p>
        <p className={`text-${task.priority.toLowerCase()} font-semibold`}>{task.priority}</p>
        {task.category && <p className="text-gray-500">{task.category}</p>}
      </div>
      <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;