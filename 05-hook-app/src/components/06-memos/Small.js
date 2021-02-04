/*  */
/*  */
import React from "react";

/* el MEMO se utiliza para que cuando no se cambie el VALOR del parametro (properties)
    este no se ejecute */
export const Small = React.memo(({ value }) => {
  /*  */
  console.log("Me llamaron otra vez");
  return <small className="badge bg-danger">{value}</small>;
});
