import axios from "axios";
import {
  FAILED_TODO,
  GET_TODO,
  SUCCESS_TODO,
} from "../Constants/TodosConstant";

const getAllTodo = () => async (dispatch) => {
  dispatch({ type: GET_TODO });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: SUCCESS_TODO, payload: res.data });
  } catch (error) {
    dispatch({ type: FAILED_TODO, payload: error.message });
  }
};
export default getAllTodo;
