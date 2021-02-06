/*  */
/*  */
import React, { useEffect, useReducer } from "react";
/* import { useForm } from "../../hooks/useForm"; */
import "./style.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  /*  */
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  console.log(todos);

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

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr></hr>
      <div className="row">
        <div className="col-md-7">
          {/* TodoList --- todos, handleDelete, handleToggle */}
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-md-5">
          {/* TodoAdd --- handleAddTodo */}
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
