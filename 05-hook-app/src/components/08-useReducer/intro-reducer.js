/*  */
/*  */
const initialState = [
  {
    id: 1,
    todo: "Ir al gym ",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }
  return state;
};

let todoFinal = todoReducer();

const newTodo = {
  id: 2,
  todo: "Ir al comprar la despensa ",
  done: false,
};

const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

todoFinal = todoReducer(todoFinal, agregarTodoAction);

console.log(todoFinal);
