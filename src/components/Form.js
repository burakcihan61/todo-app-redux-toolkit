import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/todos/todosSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const hendleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();
    dispatch(addNewTodo({ title }));
    setTitle("");
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default Form;
