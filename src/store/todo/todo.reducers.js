import { TODO_ACTION_TYPES } from "./todo.types";

const TodoReducers = (state = [], action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case TODO_ACTION_TYPES.CREATE_TODO:
      // console.log(state);
      return state.concat(payload);
    case TODO_ACTION_TYPES.REMOVE_TODO:
      return state.filter(todo => todo.name != payload.name);
    case TODO_ACTION_TYPES.COMPLETED_TODO:
      return state.map(todo => {
        if (todo.name === payload.name) {
          todo = payload
        }
        return todo;
      });
    default:
      return state;
  }
};

export default TodoReducers;