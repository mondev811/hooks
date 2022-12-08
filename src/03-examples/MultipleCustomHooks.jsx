import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://bible-api.com/john 3:16"
  );
  return (
    <>
      <h1>Bible Quotes</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !hasError && data && <p>{data.text}</p>}
      {!isLoading && hasError && <p>Error found: {hasError}</p>}
    </>
  );
};
