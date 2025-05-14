import { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  console.log(todo);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        className="todo-input"
      />

      <button className="add-btn">Add</button>
    </div>
  );
};

export default Todos;
