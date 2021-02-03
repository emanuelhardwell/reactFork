/*  */
import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./style.css";

export const MultipleCustomHooks = () => {
  /*  */
  const { counter, incrementar } = useCounter();

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1 className="text-center">Breaking Bad API</h1>
      <hr></hr>
      {loading ? (
        <div className="alert alert-warning">Loading......</div>
      ) : (
        <div className="card bg-primary">
          <img src="#" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{author}</h5>
            <p className="card-text">{quote}</p>
            <button className="btn btn-warning" onClick={incrementar}>
              +1
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
