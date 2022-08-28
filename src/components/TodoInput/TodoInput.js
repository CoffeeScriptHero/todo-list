import React, { useState } from "react";
import "./TodoInput-styles.css";
import penSvg from "../../assets/icons/pen.svg";

const TodoInput = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="todo-input">
      <h2 className="todo-title">Todo Input</h2>
      <form onSubmit={handleSubmit} className="todo-form">
        <label className="input-label">
          <img
            className="label-img"
            src={penSvg}
            alt="add new todo"
            width={15}
            height={15}
          />
          <input
            className="text-input"
            type="text"
            placeholder="New Todo"
            value={value}
            onChange={handleChange}
          />
        </label>
        <button
          disabled={value ? false : true}
          type="submit"
          className={`todo-blue-button submit-button ${
            value ? "" : "disabled-button"
          }`}
        >
          Add new task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
