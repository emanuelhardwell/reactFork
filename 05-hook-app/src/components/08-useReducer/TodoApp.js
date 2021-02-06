/*  */
/*  */
import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "./style.css";
import { todoReducer } from "./todoReducer";

/* const initialState = [
  {
    id: new Date().getTime(),
    desc: "Ir al gym, hoy toca pierna",
    done: false,
  },
];
 */
/* const init = () => {
  return [
    {
      id: new Date().getTime(),
      desc: "Ir al gym, hoy toca pierna",
      done: false,
    },
  ];
}; */

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  /*  */
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  console.log(todos);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    /* crear la accion */
    const actionDelete = {
      type: "delete",
      payload: todoId,
    };
    /* dispath */
    dispatch(actionDelete);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) {
      return;
    }

    const todoNew = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const actionAdd = {
      type: "add",
      payload: todoNew,
    };

    dispatch(actionAdd);
    reset();
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr></hr>
      <div className="row">
        <div className="col-md-7">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li
                key={todo.id}
                className="list-group-item list-group-item-primary"
              >
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {index + 1} --- {todo.desc}
                </p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-5">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="form-control mb-3"
              value={description}
              onChange={handleInputChange}
            ></input>
            <button className="btn btn-outline-primary w-100">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
