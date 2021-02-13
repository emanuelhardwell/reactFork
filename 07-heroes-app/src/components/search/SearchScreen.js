import React, { useMemo } from "react";
import queryString from "query-string";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroeCard } from "../heroes/HeroeCard";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  /*  */

  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(searchText), [location]);
  /* const heroesFiltered = getHeroesByName(searchText); */

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
          {q === "" && (
            <div className="alert alert-warning" role="alert">
              Busca un heroe
            </div>
          )}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger" role="alert">
              No hay un heroe llamado {q}
            </div>
          )}
          {heroesFiltered.map((hero) => (
            <HeroeCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
