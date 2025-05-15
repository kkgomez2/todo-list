import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodos, type Todo } from "../../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state: any) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (obj: Todo) => dispatch(addTodos(obj)),
  };
};

const Todos = (props: any) => {
  const [todo, setTodo] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  console.log("props from store", props);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        className="todo-input"
      />

      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: uuidv4(),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />

      <ul>
        {props.todos.map((item: any) => {
          return (
            <TodoItem item={item} />
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
