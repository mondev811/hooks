import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos") || []);
  };

  const [todoList, dispatch] = useReducer(todoReducer, undefined, init);
  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todoList)),
    [todoList]
  );

  const addNewTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatch(action);
  };

  const deleteTodo = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const toggleTodoState = (id) => {
    dispatch({ type: "toggle-state", payload: id });
  };

  return {
    todoList,
    todosCount: todoList.length,
    pendingTodosCount: todoList.filter((item) => !item.done).length,
    addNewTodo,
    deleteTodo,
    toggleTodoState,
  };
};
