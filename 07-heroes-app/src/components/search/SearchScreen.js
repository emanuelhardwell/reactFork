import React from "react";
import queryString from "query-string";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroeCard } from "../heroes/HeroeCard";
import { useLocation } from "react-router-dom";

export const SearchScreen = ({ history }) => {
  /*  */

  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = heroes;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr></hr>
      <div className="row">
        <div className="col-md-5">
          <h4>Search Form</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search Hero"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            ></input>
            <button className="btn btn-primary">Search</button>
          </form>
        </div>
        <div className="col-md-7">
          <h4>Hero Found</h4>
          {heroesFiltered.map((hero) => (
            <HeroeCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
