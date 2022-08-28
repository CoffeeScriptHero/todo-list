import React, { useState } from "react";
import "./TodoItem-styles.css";
import trashcanSvg from "../../assets/icons/trash-can.svg";
import pencilSvg from "../../assets/icons/pencil.svg";
import checkmarkSvg from "../../assets/icons/checkmark.svg";
import crossSvg from "../../assets/icons/cross.svg";

const TodoItem = ({
  id,
  value,
  isDone,
  editTask,
  deleteTask,
  toggleIsDone,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => setIsEditing((isEditing) => !isEditing);

  const handleChange = (e) => editTask(id, e.target.value);

  return (
    <li className={`todo-item ${isEditing ? "todo-item--editing" : ""}`}>
      {!isEditing && (
        <span className={`todo-item-text ${isDone ? "todo-done-text" : ""}`}>
          {value}
        </span>
      )}
      {isEditing && (
        <input
          className="todo-item-input"
          type="text"
          value={value}
          onChange={handleChange}
        />
      )}
      <div className="todo-item-icons">
        <span
          className={`checkbox ${isDone ? "checked" : ""}`}
          onClick={toggleIsDone.bind(this, id)}
        >
          {isDone && <img src={checkmarkSvg} width={10} height={10} />}
        </span>
        {!isEditing && (
          <img
            src={pencilSvg}
            alt="edit this todo"
            width={16}
            height={16}
            onClick={toggleEditing}
          />
        )}
        {isEditing && (
          <img src={crossSvg} width={14} height={14} onClick={toggleEditing} />
        )}
        <img
          src={trashcanSvg}
          alt="delete this todo"
          width={16}
          height={16}
          onClick={deleteTask.bind(this, id)}
        />
      </div>
    </li>
  );
};

export default TodoItem;
