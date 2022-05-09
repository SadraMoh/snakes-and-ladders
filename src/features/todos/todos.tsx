import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTodos, Todo, addTodo, toggleTodo, removeTodo } from "./todosSlice";

const Todos = () => {
  
  const todos: Todo[] = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const [todoTitle, setTodoTitle] = useState<string>("");

  function formSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTodo: Todo = {
      id: Math.random(),
      title: todoTitle,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <input type="checkbox" checked={todo.isDone} onChange={() => {dispatch(toggleTodo(todo))}}/>
            <button onClick={() => {dispatch(removeTodo(todo))}}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
