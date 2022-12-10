import React from "react";
import { LoadingQuote } from "../components/LoadingQuote";
import { Quote } from "../components/Quote";
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
      {isLoading && <LoadingQuote />}
      {!isLoading && !hasError && !!data && (
        <Quote text={data.text} footer={verses[counter]} />
      )}
      {!isLoading && hasError && <p>Error found: {hasError}</p>}
      <button className="btn btn-primary" onClick={getNextQuote}>
        Next quote
      </button>
    </>
  );
};
