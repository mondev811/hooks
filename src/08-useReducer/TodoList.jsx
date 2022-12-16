import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos = [],
  onDelete: onDelete = () => {},
  onToggleState = () => {},
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleState={onToggleState}
        />
      ))}
    </ul>
  );
};
