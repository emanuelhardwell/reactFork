/*  */
/*  */

const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

const owners = ["albo", "cuenca", "klar"];

/* FORMA 2 DE EXPORTAR */
/* export { heroes, owners }; */

/* FORMA 3 DE EXPORTAR */
export { heroes as default, owners };
