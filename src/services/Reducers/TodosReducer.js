import { FAILED_TODO, GET_TODO, SUCCESS_TODO } from "../Constants/TodosConstant";

const initialState = {
  isLoading: false,
  todos: [],
  error: null,
};
export const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_TODO:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };
    case FAILED_TODO:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
