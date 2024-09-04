import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoApp() {
    const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const onAddTask = (event) => {
    event.preventDefault();
    if (task.trim()) {
      setItems([...items, task]);
      setTask(""); // Clear the input field
      toast.success("Task added successfully!");
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDeleteAll = () => {
    setItems([]);
    toast.info("All tasks have been deleted.");
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    toast.error("Task deleted.");
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditTask(items[index]);
  };

  const handleEditChange = (e) => {
    setEditTask(e.target.value);
  };

  const handleSaveEdit = () => {
    if (editTask.trim()) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? editTask : item
      );
      setItems(updatedItems);
      setEditIndex(null);
      setEditTask("");
      toast.success("Task updated successfully!");
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <>
      <ToastContainer />
      <div id="main-todo-container" className="h-full w-full px-10 py-2">
        <div id="head" className="py-5  uppercase"><span className="font-semibold text-xl">Task Manager</span></div>
        <div id="add-task" className="flex justify-between flex-wrap md:flex-nowrap ">
          <input
            type="text"
            value={task}
            onChange={handleChange}
            className="mt-1 block w-full max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button onClick={onAddTask} className="uppercase bg-blue-400 text-white px-2 py-1 md:px-4 md:py-2 rounded">Add TASK</button>
          <button onClick={handleDeleteAll} className="uppercase bg-red-400 text-white px-2 py-1 md:px-4 md:py-2 rounded">Delete All Tasks</button>
        </div>
        <div id="list-container" className="mt-10">
        <ol className="h-64 md:h-80 overflow-y-auto">
            {items.map((item, index) => (
              <li key={index} className="text-gray-600-500 font-semibold py-3 flex justify-between items-center capitalize border rounded-lg mt-3 px-4 md:px-5">
                <div id="data">{index + 1}. {editIndex === index ? (
                  <input
                    type="text"
                    value={editTask}
                    onChange={handleEditChange}
                    className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                ) : (
                  item
                )}</div>
                <div id="btn" className="flex space-x-2">
                  {editIndex === index ? (
                    <>
                      <button onClick={handleSaveEdit} className="capitalize bg-green-500 text-sm text-white px-3 py-1 rounded">Save</button>
                      <button onClick={handleCancelEdit} className="capitalize bg-gray-500 text-sm text-white px-3 py-1 rounded">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(index)} className="capitalize bg-yellow-500 text-sm text-white px-3 py-1 rounded">Edit</button>
                      <button onClick={() => handleDeleteItem(index)} className="capitalize bg-red-500 text-sm text-white px-3 py-1 rounded">Delete</button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
