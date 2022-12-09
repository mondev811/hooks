import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = ({ queryrequest = "john 3:16" }) => {
  const url = `https://bible-api.com/${queryrequest}`;
  const { data, isLoading, hasError } = useFetch(url);
  return (
    <>
      <h1>Bible Quotes</h1>
      {isLoading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}
      {!isLoading && !hasError && !!data && (
        <>
          <blockquote className="blockquote text-end">
            <p className="mb-1">{data.text}</p>
            <footer className="blockquote-footer">{queryrequest}</footer>
          </blockquote>
        </>
      )}
      {!isLoading && hasError && <p>Error found: {hasError}</p>}
      <button className="btn btn-primary">Next quote</button>
    </>
  );
};
