// src/redux/tasks.js
const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

const initialState = {
  tasks: [],
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case UPDATE_TASK:
        // eslint-disable-next-line no-case-declarations
        const updatedTasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
        return {
          ...state,
          tasks: updatedTasks,
        };
      case DELETE_TASK:
        // eslint-disable-next-line no-case-declarations
        const updatedTasksAfterDelete = state.tasks.filter(
            (task) => task.id !== action.payload
          );
          return {
            ...state,
            tasks: updatedTasksAfterDelete,
          };
      default:
        return state;
    }
  }
