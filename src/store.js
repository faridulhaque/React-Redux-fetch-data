import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { TodosReducer } from "./services/Reducers/TodosReducer";

const store = createStore(TodosReducer, applyMiddleware(thunk));
export default store;
