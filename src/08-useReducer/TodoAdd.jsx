import React from "react";

export const TodoAdd = ({ onAdd }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="What do we have to do?"
        className="form-control"
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
        onClick={() => onAdd()}
      >
        Add
      </button>
    </form>
  );
};
