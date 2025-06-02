import { Todo } from "../models/Todo"

type TodoPresentationProps = {
  todo: Todo;
}

export const TodoPresentation = ({ todo }: TodoPresentationProps) => {
  return (
    <ul>
      <li>
        {todo.name} | Done: {todo.done ? "👍" : "👎"}
      </li>
    </ul>
  )
}