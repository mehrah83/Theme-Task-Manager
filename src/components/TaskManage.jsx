// src/components/TaskManager.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, deleteTask } from "../redux/Tasks";

const TaskManager = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = () => {
    if (newTask.title) {
      dispatch(addTask(newTask));
      setNewTask({ title: "", description: "" });
    }
  };

  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    setNewTask({ title: task.title, description: task.description });
  };

  const handleSaveEdit = () => {
    if (newTask.title && editingTaskId !== null) {
      dispatch(updateTask({ ...newTask, id: editingTaskId }));
      setEditingTaskId(null);
      setNewTask({ title: "", description: "" });
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        {editingTaskId === null ? (
          <button onClick={handleAddTask}>Add Task</button>
        ) : (
          <button onClick={handleSaveEdit}>Save Edit</button>
        )}
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                />
              </div>
            ) : (
              <div className="taskInfo">
                <h3>Title:- {task.title}</h3>
                <p>Description:- {task.description}</p>
                <button className="editBtn" onClick={() => handleEditTask(task)}>Edit</button>
                <button className="deleteBtn" onClick={() => dispatch(deleteTask(task.id))}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
