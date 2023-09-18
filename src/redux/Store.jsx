import { createStore, combineReducers } from "redux";
import themeReducer from "./Theme";
import tasksReducer from "./Tasks";

const rootReducer = combineReducers({
  theme: themeReducer,
  tasks: tasksReducer,
});

const store = createStore(rootReducer);

export default store;
