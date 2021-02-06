/*  */
import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  /*  */
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

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

    handleAddTodo(todoNew);
    reset();
  };

  return (
    <>
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
    </>
  );
};
