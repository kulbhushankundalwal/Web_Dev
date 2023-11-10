import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTast = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <div className="d-flex">
        <input
          className="form-control"
          type="text"
          placeholder="Write Task..."
          value={newTodo}
          onChange={updateTodoValue}
        />
        &nbsp;
        <button onClick={addNewTast} style={{ backgroundColor: "green" }}>
          Add Task
        </button>
      </div>
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.isDone ? (
              <span style={{ textDecoration: "line-through" }}>
                {todo.task}
              </span>
            ) : (
              <span>{todo.task}</span>
            )}
            &nbsp;&nbsp;
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => deleteTodo(todo.id)}
              className="mb-3"
            >
              Delete
            </button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)} className="mb-3">
              Uppercase
            </button>
            &nbsp;&nbsp;
            <button onClick={() => toggleDone(todo.id)} className="mb-3">
              Done ?
            </button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
  );
}
