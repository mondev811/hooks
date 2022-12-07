import React, { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Marvel",
    email: "hero@avengers.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  //   useEffect(() => {
  //     first;

  //     return () => {
  //       second;
  //     };
  //   }, [third]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      {console.log(formState)}
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
      {username === "Carol" && (
        <div className="mt-2">
          <Message />
        </div>
      )}
    </>
  );
};
