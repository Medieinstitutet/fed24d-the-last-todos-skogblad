import { useState } from "react";
import type { Todo } from "../models/Todo";
import { Todos } from "./Todos";

export const TodoApp = () => {

  const firstTodos: Todo[] = [
    { id: Date.now() + 1, name: "Prepare dinner", done: false },
    { id: Date.now() + 2, name: "Clean the bathroom", done: false },
    { id: Date.now() + 3, name: "Take a bath", done: false },
    { id: Date.now() + 4, name: "Play with the dog", done: false },
    { id: Date.now() + 5, name: "Watch Netflix", done: false },
  ]

  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || JSON.stringify(firstTodos))
  );

  // Function to click the checkbox = todo done = todo removed from UI
  const handleToggleTodo = (id: number) => {
    setTodos(currentTodos => {
     return currentTodos.map(todo => todo.id === id ? {...todo, done: !todo.done } : todo );
    });
  }
  
  localStorage.setItem("todos", JSON.stringify(todos));

  const activeTodos = todos.filter(todo => !todo.done);
  const doneTodos = todos.filter(todo => todo.done);

  console.log("Active Todos:", activeTodos)
  console.log("Done Todos:", doneTodos )

  return (
    <>
      <h1>My Todo List</h1>
      < Todos todos={activeTodos} onToggle={handleToggleTodo} />
      <h2>Done Todos</h2>
      < Todos todos={doneTodos} onToggle={handleToggleTodo} />
    </>
  );
}