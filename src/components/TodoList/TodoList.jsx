import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <div className="todolist__inner">
      <h1 className="todolist__title">Мой список задач</h1>
      <ul className="todolist__list">
        {props.taskList.map((task) => (
          <TodoItem key={task.id}>{task.text}</TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
