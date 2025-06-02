import type { Todo } from "../models/Todo"
import { TodoPresentation } from "./TodoPresentation";

type TodosProps = {
  todos: Todo[];
}

export const Todos = ({ todos }: TodosProps) => {
  return (
    <section>
      {todos.map((todo) => ( <TodoPresentation todo={todo} key={todo.id}/> ))}
    </section>
  );
}