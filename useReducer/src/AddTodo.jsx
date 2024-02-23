import { useState } from "react";
import PropTypes from "prop-types";

export default function AddTodo({ onAddTodo }) {
    const [todoText, setTodoText] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      {" "}
      <button
        disabled={todoText.length === 0}
        onClick={() => {
          if (todoText.length > 0) {
            setTodoText("");
            onAddTodo(todoText);
          }
        }}
      >
        Add
      </button>
    </>
  );

}

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};
 
