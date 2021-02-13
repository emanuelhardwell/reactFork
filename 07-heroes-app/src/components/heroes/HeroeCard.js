import React from "react";
import { Link } from "react-router-dom";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card tarjetita m-2 bg-dark">
      <img
        src={`./assets/heroes/${id}.jpg`}
        className="card-img-top img mx-auto"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        {alter_ego !== characters && <p className="card-text">{characters}</p>}
        <p className="card-text">{first_appearance}</p>
        <Link to={`./hero/${id}`} className="btn btn-primary">
          Ver más
        </Link>
      </div>
    </div>
  );
};
