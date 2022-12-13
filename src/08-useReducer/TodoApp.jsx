import React, { useReducer } from "react";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Take dogs for a walk",
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: "Write blog post",
    done: false,
  },
];

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log(props);
    // dispatch("add", todo);
  };

  const deleteTodo = (id) => {
    dispatch("delete", id);
  };

  return (
    <>
      <h1>
        TodoApp ({state.length}), <small>pending: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={state} />
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
