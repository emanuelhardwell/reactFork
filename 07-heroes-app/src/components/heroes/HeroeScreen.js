import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

export const HeroeScreen = () => {
  /*  */
  const { heroId } = useParams();
  const hero = getHeroeById(heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div>
      <h1>Hero Screen</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img
                src={`../assets/heroes/${id}.jpg`}
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h4 className="text-dark text-center"> {superhero} </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-dark fw-bold">
                  Publisher: {publisher}
                </li>
                <li className="list-group-item text-dark fw-bold">
                  Alter_ego: {alter_ego}
                </li>
                <li className="list-group-item text-dark fw-bold">
                  First_appearance: {first_appearance}
                </li>
                <li className="list-group-item text-dark fw-bold">
                  Characters: {characters}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
