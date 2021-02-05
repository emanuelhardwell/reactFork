/*  */
/*  */
import React from "react";

export const ShowIncrement = React.memo(({ incrementar }) => {
  /*  */
  console.log("Entro en el ShowIncrement");
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          incrementar(5);
        }}
      >
        Incrementar
      </button>
    </div>
  );
});
