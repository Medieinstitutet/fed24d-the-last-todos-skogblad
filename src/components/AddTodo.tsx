import { useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo";

type AddTodoProps = {
  addTodo: (t: Todo) => void;
}

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState<Todo>(new Todo("", false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.type === "text") {
      setTodo({...todo, [e.target.id]: e.target.value});
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo(todo);
    
    console.log("Inside todo:", todo);
    // Reset input field
    setTodo(new Todo("", false));
  }

  return (
    <section>
      <h3>Create new todo</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Add todo: </label>
        <input type="text" id="name" value={todo.name} onChange={handleChange} />
        <button>Save</button>
      </form>
    </section>
  );
}

