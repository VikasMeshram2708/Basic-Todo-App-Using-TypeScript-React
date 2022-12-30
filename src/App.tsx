import React, { useCallback, useState } from "react";
import Todos from "./interface/Todos";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const formSubmitted = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      setTodos([
        ...todos,
        {
          id: todo.length + Math.random(),
          content: todo,
          done: false,
        },
      ]);
      setTodo("");
    },
    [todo]
  );

  const hideAllTodos = useCallback(() => {
    setTodos([]);
  }, [todo]);

  return (
    <>
      <form onSubmit={formSubmitted} className="container mt-5">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <h3>Entr a Todo</h3>
          </label>
          <input
            value={todo}
            onChange={(event: React.FormEvent<HTMLInputElement>) => {
              setTodo(event.currentTarget.value);
            }}
            type="text"
            className="fs-5 form-control"
            placeholder="e.g go to market..."
          />
        </div>
        <button className="btn btn-outline-info w-100 fs-5">Add Todo</button>
        <button
          onClick={hideAllTodos}
          className="btn btn-outline-danger w-100 fs-5 mt-3"
          type="button"
        >
          Hide All
        </button>
      </form>
      <div className="container mt-3 fs-5">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" />
                <span className="mx-3">{todo.content}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
