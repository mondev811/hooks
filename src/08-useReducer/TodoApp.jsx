import React, { useEffect, useReducer } from "react";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const TodoApp = () => {
  const [toDoList, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(toDoList)),
    [toDoList]
  );

  const handleNewTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatch(action);
  };

  const deleteTodo = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  return (
    <>
      <h1>
        TodoApp ({toDoList.length}), <small>pending: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={toDoList} onDeleteItem={deleteTodo} />
        </div>

        <div className="col-5">
          <h4>Add ToDo</h4>
          <hr />
          <TodoAdd onAdd={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
