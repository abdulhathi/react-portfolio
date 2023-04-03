import { TODO_LOADING_ACTION_TYPES } from "./todo-loading.types";

export const TodoLoadingReducer = (state = false, action = {}) => {
  const {type} = action;
  switch(type) {
    case TODO_LOADING_ACTION_TYPES.LOAD_TODO_INPROGRESS:
      return true;
    case TODO_LOADING_ACTION_TYPES.LOAD_TODO_SUCCESS:
    case TODO_LOADING_ACTION_TYPES.LOAD_TODO_FAILURE:
      return false;
    default:
      return state;
  }
};