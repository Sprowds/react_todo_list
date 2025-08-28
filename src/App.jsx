import React from "react";
import TodoList from "./components/TodoList/TodoList";
import "./reset.css";

function App() {
  const tasks = [
    { id: 1, text: "Выучить React" },
    { id: 2, text: "Сделать ToDo-приложение" },
    { id: 3, text: "Стать фронтенд-разработчиком" },
  ];

  return <TodoList taskList={tasks} />;
}

export default App;
