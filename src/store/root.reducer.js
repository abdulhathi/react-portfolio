import { combineReducers } from "redux";
import TodoReducers from "./todo/todo.reducers"
import { TodoLoadingReducer } from "../store/todo-loading/todo-loading.reducers";

export const rootReducer = combineReducers({
  todos: TodoReducers,
  todoLoading: TodoLoadingReducer,
})