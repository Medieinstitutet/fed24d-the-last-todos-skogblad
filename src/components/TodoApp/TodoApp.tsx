import { useState } from "react";
import type { Todo } from "../../models/Todo";
import { Todos } from "../Todos/Todos";
import { AddTodo } from "../AddTodo/AddTodo";
import style from "./TodoApp.module.scss";

const createId = () => Date.now() + Math.floor(Math.random() * 1000);

const firstTodos: Todo[] = [
  { id: createId(), name: "Prepare dinner", done: false },
  { id: createId(), name: "Clean the bathroom", done: false },
  { id: createId(), name: "Take a bath", done: false },
  { id: createId(), name: "Play with the dog", done: false },
  { id: createId(), name: "Watch Netflix", done: false },
]

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(
    () => JSON.parse(localStorage.getItem("todos") || JSON.stringify(firstTodos))
  );

  // Function to click the checkbox = todo done
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

  const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  }

  // Sort function
  const sortByAlpha = () => {
    const sortedTodos = [...todos].sort((todo1, todo2) => todo1.name.localeCompare(todo2.name));
    setTodos(sortedTodos);
  }

  return (
    <>
      <h1>My Todo List</h1>
      <button onClick={sortByAlpha} className={style.sortButton}>Sort by name</button>

      <section className={style.activeTodos}>
        <h2>Active todos:</h2>
        <Todos todos={activeTodos} onToggle={handleToggleTodo} />
      </section>
      
      <section className={style.doneTodos}>
        <h2>Completed todos</h2>
        <Todos todos={doneTodos} onToggle={handleToggleTodo} />
      </section>
      
      <AddTodo addTodo={addTodo}/>
    </>
  );
}