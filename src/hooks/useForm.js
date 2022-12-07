import React, { useState } from "react";

export const useForm = (initialFormState = {}) => {
  const [formState, setFormState] = useState(initialFormState);

  const onInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const onResetForm = () => {
    setFormState(initialFormState);
  };
  return { ...formState, onInputChange, onResetForm };
};
