import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
import { MdDeleteForever } from "react-icons/md";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  let AddTodo = (e) => {
    e.preventDefault();

    let newTodo = {
      id: uuidv4(),
      todo: inputValue,
    };

    setTodos([...todos, newTodo]);
  };

  let DeleteTodo = (id) => {
    let todoIndex = todos.findIndex((todo) => todo.id == id);

    todos.splice(todoIndex, 1);

    setTodos([...todos]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setInputValue("");
  }, [todos]);

  return (
    <div className="container">
      <div className="addTask">
        <form onSubmit={(e) => AddTodo(e)}>
          <input
            id="input"
            type="text"
            placeholder="Add your todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button id="add" className="btn" type="submit">
            Add Todo
          </button>
        </form>
      </div>
      <div className="taskList">
        <ul className="list">
          {todos &&
            todos.map((item) => (
              <li key={item.id}>
                {item.todo}
                <div className="setting">
                  <div className="btn">
                    <MdDeleteForever
                      size={23}
                      onClick={() => DeleteTodo(item.id)}
                    />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
