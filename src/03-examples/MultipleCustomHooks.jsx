import React from "react";
import { useFetch, useCounter } from "../hooks";

export const MultipleCustomHooks = () => {
  const baseUrl = "https://bible-api.com";
  const verses = [
    "John 3:16",
    "John 15:5,8",
    "1 Corinthians 3:16",
    "1 Corinthians 6:12",
    "Ephesians 4:25",
    "Ephesians 4:29",
    "Ephesians 4:31",
    "Ephesians 5:11",
    "Ephesians 5:15",
    "Ephesians 6:12",
    "Galatians 3:4",
    "Galatians 5:22",
    "Hebrews 2:1",
    "Hebrews 10:24",
    "Hebrews 11:1",
    "Hebrews 12:13",
    "Hebrews 13:1",
    "Hebrews 13:2",
    "James 1:2",
  ];
  const { counter, increment, reset } = useCounter(0);
  const { data, isLoading, hasError } = useFetch(
    `${baseUrl}/${verses[counter]}`
  );

  const getNextQuote = () => {
    if (counter > verses.length - 2) {
      reset();
    } else {
      increment();
    }
  };

  return (
    <>
      <h1>Bible Quotes</h1>
      {isLoading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}
      {!isLoading && !hasError && !!data && (
        <>
          <h4>
            {counter + 1} of {verses.length}
          </h4>
          <blockquote className="blockquote text-end">
            <p className="mb-1">{data.text}</p>
            <footer className="blockquote-footer mt-2">
              {verses[counter]}
            </footer>
          </blockquote>
        </>
      )}
      {!isLoading && hasError && <p>Error found: {hasError}</p>}
      <button className="btn btn-primary" onClick={getNextQuote}>
        Next quote
      </button>
    </>
  );
};
