import { Todo } from "../models/Todo"

type TodoPresentationProps = {
  todo: Todo;
  onToggle: (id: number) => void;
}

export const TodoPresentation = ({ todo, onToggle }: TodoPresentationProps) => {
  const handleStatus = () => {
    onToggle(todo.id);
  } 

  return (
    <ul>
      <li>
        {todo.name} | Done: <input type="checkbox" checked={todo.done} id="done" onChange={handleStatus}/>
      </li>
    </ul>
  )
}