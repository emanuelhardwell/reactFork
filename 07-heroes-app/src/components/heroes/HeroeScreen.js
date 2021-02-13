import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

export const HeroeScreen = ({ history }) => {
  /*  */
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroeById(heroId), [heroId]);
  /* const hero = getHeroeById(heroId); */

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

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
        <div className="col-md-4 m-1">
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
              <button className="btn btn-primary mt-3" onClick={handleReturn}>
                Return ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
