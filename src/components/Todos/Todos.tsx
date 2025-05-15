import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodos, removeTodos } from "../../redux/reducer";

const mapStateToProps = (state: any) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (obj: any) => dispatch(addTodos(obj)),
    removeTodo: (id: string) => dispatch(removeTodos(id))
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
      <br/>

      <ul>
        {props.todos.map((item:any) => {
          return <li key={item.id}>{item.item}
            <button
              className="remove-btn"
              onClick={() => props.removeTodo(item.id)}
            >Remove</button>
          </li>
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
