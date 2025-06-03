import { useState } from "react";
import type { Todo } from "../models/Todo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: Date.now() + 1, name: "Prepare dinner", done: false },
    { id: Date.now() + 2, name: "Clean the bathroom", done: false },
    { id: Date.now() + 3, name: "Take a bath", done: false },
    { id: Date.now() + 4, name: "Play with the dog", done: false },
    { id: Date.now() + 5, name: "Watch Netflix", done: false },
  ]);

  // Function to click the checkbox = todo done = todo removed from UI
  const handleToggleTodo = (id: number) => {
    setTodos(currentTodos => {
      const updatedTodoList = currentTodos.map(todo => todo.id === id ? {...todo, done: true } : todo);
    
      console.log("All todos:", updatedTodoList);

      return updatedTodoList.filter(todo => !todo.done)
    
    });
  }

  console.log("Current Todos:", todos)

  return (
    <>
      <h1>My Todo List</h1>
      < Todos todos={todos} onToggle={handleToggleTodo} />
    </>
  );
}