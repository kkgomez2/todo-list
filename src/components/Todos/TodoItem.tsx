import { useRef, type KeyboardEvent } from "react";
import { connect } from "react-redux";
import { removeTodos, updateTodos, type Todo } from "../../redux/reducer";
type Props = {
  item: Todo;
  updateTodo: Function;
  removeTodo: Function;
};

const mapStateToProps = (state: any) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeTodo: (id: string) => dispatch(removeTodos(id)),
    updateTodo: (obj: any) => dispatch(updateTodos(obj)),
  };
};

const TodoItem = ({ item, updateTodo, removeTodo }: Props) => {
  const itemRef = useRef<HTMLTextAreaElement>(null);

  const changeFocus = () => {
    if (itemRef.current) {
      console.log(itemRef.current);
      itemRef.current.disabled = false;
      itemRef.current.focus();
    }
  };

  const update = (id: string, value: string, e: KeyboardEvent) => {
    if (e.key === "Enter") {
      updateTodo({ id, item: value });
      if (itemRef.current) {
        itemRef.current.disabled = true;
      }
    }
  };
  return (
    <li key={item.id}>
      <textarea
        ref={itemRef}
        disabled={!!itemRef}
        defaultValue={item.item}
        onKeyDown={(e) =>
          update(item.id, itemRef.current?.value || "", e)
        }
      ></textarea>
      <button onClick={() => changeFocus()}>Edit</button>
      <button
        className="remove-btn"
        onClick={() => removeTodo(item.id)}
      >
        Remove
      </button>
    </li>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
