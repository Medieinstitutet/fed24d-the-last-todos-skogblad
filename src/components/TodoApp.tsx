import { useState } from "react";
import type { Todo } from "../models/Todo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: Date.now(), name: "Prepare dinner", done: false },
    { id: Date.now(), name: "Clean the bathroom", done: false },
    { id: Date.now(), name: "Take a bath", done: false },
    { id: Date.now(), name: "Play with the dog", done: true },
    { id: Date.now(), name: "Watch Netflix", done: false },
  ]);
  
  return (
    <>
      <h1>My Todo List</h1>
      < Todos todos={todos} />
    </>
  );
}