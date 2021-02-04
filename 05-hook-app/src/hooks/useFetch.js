/*  */
import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  /*  */
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const isMounted = useRef(true);

  /* useEfect para verificar los componentes desmontados */
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      loading: true,
      error: null,
      data: null,
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        /*  */

        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("setState No se llamo");
        }
      });
  }, [url]);

  return state;
};
