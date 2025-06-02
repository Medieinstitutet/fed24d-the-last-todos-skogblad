import { Todo } from "../models/Todo"

type TodoPresentationProps = {
  todo: Todo;
}

export const TodoPresentation = ({ todo }: TodoPresentationProps) => {
  return (
    <ul>
      <li>
        {todo.name} | Done: <input type="checkbox" checked={todo.done} />
      </li>
    </ul>
  )
}