import React from "react";

const TodoItem = ({ children, ...props }) => {
  return <li className="todolist__item">{children}</li>;
};

export default TodoItem;
