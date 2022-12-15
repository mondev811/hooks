import React from "react";
import { useForm } from "../hooks";

export const TodoAdd = ({ onAdd }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };

    onAdd && onAdd(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="What do we have to do?"
        name="description"
        className="form-control"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Add
      </button>
    </form>
  );
};
