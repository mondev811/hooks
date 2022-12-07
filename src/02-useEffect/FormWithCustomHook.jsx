import React from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: "Marvel",
    email: "hero@avengers.com",
    password: "123",
  });
  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@domain.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};
