import type { Todo } from "../models/Todo"
import { TodoPresentation } from "./TodoPresentation";

type TodosProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
}

export const Todos = ({ todos, onToggle }: TodosProps) => {
  return (
    <section>
      {todos.map((todo) => ( <TodoPresentation todo={todo} key={todo.id} onToggle={onToggle} /> ))}
    </section>
  );
}