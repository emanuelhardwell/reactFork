import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {
  /*  */

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  /* const heroes = getHeroesByPublisher(publisher); */

  return (
    <div className="row">
      {heroes.map((hero) => (
        <HeroeCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
