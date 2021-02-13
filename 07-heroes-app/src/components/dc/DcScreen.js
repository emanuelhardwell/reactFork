import React from "react";
import { HeroeList } from "../heroes/HeroeList";

export const DcScreen = () => {
  return (
    <div>
      <h1>Dc Screen</h1>
      <hr></hr>
      <HeroeList publisher={"Marvel Comics"} />
    </div>
  );
};
