/*  */
import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        /* TodoListItem --- todo, index, handleDelete, handleToggle */
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};