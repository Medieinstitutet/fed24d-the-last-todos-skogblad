import type { Todo } from "../../models/Todo"
import { TodoPresentation } from "../TodoPresentation/TodoPresentation";

type TodosProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
}

export const Todos = ({ todos, onToggle }: TodosProps) => {
  return (
    <ul>
      {todos.map((todo) => ( <TodoPresentation todo={todo} key={todo.id} onToggle={onToggle} /> ))}
    </ul>
  );
}