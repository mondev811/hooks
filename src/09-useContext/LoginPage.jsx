import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const newUser = {
    id: 10,
    name: "Monica",
    email: "monica@bestdev.com",
  };

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Raul", email: "raul@bestmusic.com" })
        }
      >
        Set User
      </button>
    </>
  );
};
