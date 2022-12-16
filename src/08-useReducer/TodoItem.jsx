import React from "react";

export const TodoItem = ({
  todo,
  onDelete: onDelete = () => {},
  onToggleState = () => {},
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done && "text-decoration-line-through"
        }`}
        onDoubleClick={() => onToggleState(todo.id)}
      >
        {todo.description}
      </span>
      {/* 
      // alternative way of rendering the conditional line through
      <span
        className="align-self-center"
        onDoubleClick={() => onToggleState(todo.id)}
      >
        {todo.done && <del>{todo.description}</del>}
        {!todo.done && todo.description}
      </span> */}
      <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};
