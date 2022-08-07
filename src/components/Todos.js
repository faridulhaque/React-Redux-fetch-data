import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getAllTodo from "../services/Actions/TodosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodo());
  }, []);
  if (isLoading) {
    return <p>...</p>;
  }
  if (error) {
    alert(error.message);
  }

  return <div><h1>Total todo: {todos.length}</h1></div>;
};

export default Todos;
