import React from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todoList,
    todosCount,
    pendingTodosCount,
    addNewTodo,
    deleteTodo,
    toggleTodoState,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp{" "}
        <small>
          ({todoList.length}), pending: {pendingTodosCount}
        </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todoList}
            onDelete={deleteTodo}
            onToggleState={toggleTodoState}
          />
        </div>

        <div className="col-5">
          <h4>Add ToDo</h4>
          <hr />
          <TodoAdd onAdd={addNewTodo} />
        </div>
      </div>
    </>
  );
};
