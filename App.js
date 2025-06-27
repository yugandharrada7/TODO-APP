import { useState } from "react";
import "./App.css"

function App() {
  const [input, setInput] = useState(""); 
  const [todoList, setTodoList] = useState([]);
    const [nextId, setNextId] = useState(0); 

  function handleAddTodo() {
    if (input.trim() !== "") {
      const newTodo = {
        id:nextId+1,
        task: input.trim()
      };
      setTodoList([...todoList, newTodo]);
      setInput(""); 
      setNextId(nextId + 1);
    }
  }

  function handleDeleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h3 className="d-flex justify-content-center text-primary m-4">TODO APP</h3>

      <div className="d-flex align-items-center gap-2 mt-5 justify-content-center">
        <input
          className="form-control w-50"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="btn btn-success" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <div className="d-flex flex-column mt-4">
        <ul className="list-unstyled">
          {todoList.map((todo) => (
           <li key={todo.id} className="mb-2">
        <div className=" todo-item ">
    <span>
      <strong className="badge bg-primary ">{todo.id}</strong>: {todo.task} 
    </span>
    <button
      className="btn btn-sm btn-outline-danger"
      onClick={() => handleDeleteTodo(todo.id)}
    >
      ❌
    </button>
  </div>
</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
