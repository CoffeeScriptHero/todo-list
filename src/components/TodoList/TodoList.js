import React, { useEffect, useRef, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList-styles.css";

const TodoList = ({
  todos,
  deleteTask,
  toggleIsDone,
  editTask,
  deleteTasks,
  deleteDoneTasks,
}) => {
  const [filterType, setFilterType] = useState("all");
  const [todosFiltered, setTodosFiltered] = useState(todos);
  const btnsWrapperRef = useRef();

  const todosList = todosFiltered.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      value={todo.value}
      isDone={todo.isDone}
      editTask={editTask}
      deleteTask={deleteTask}
      toggleIsDone={toggleIsDone}
    />
  ));

  const handleButtons = (e) => {
    if (e.target.tagName === "BUTTON") {
      setFilterType(e.target.dataset.type);
      document.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
    }
  };

  useEffect(() => {
    if (btnsWrapperRef) {
      btnsWrapperRef.current.addEventListener("click", handleButtons);
    }
  }, []);

  useEffect(() => {
    if (filterType === "all") {
      setTodosFiltered(todos);
    } else if (filterType === "done") {
      setTodosFiltered(todos.filter((t) => t.isDone));
    } else {
      setTodosFiltered(todos.filter((t) => !t.isDone));
    }
  }, [todos, filterType]);

  return (
    <div className="todo-list">
      <h2 className="todo-title">Todo List</h2>
      <div className="show-buttons-wrapper" ref={btnsWrapperRef}>
        <button data-type="all" className="todo-blue-button active">
          All
        </button>
        <button data-type="done" className="todo-blue-button">
          Done
        </button>
        <button data-type="todo" className="todo-blue-button">
          Todo
        </button>
      </div>
      {!!todosList.length && <ul className="todo-tasks-list">{todosList}</ul>}
      {!todosList.length && <p className="no-content">Add some todos</p>}
      <div className="del-buttons-wrapper">
        <button className="todo-del-button" onClick={deleteDoneTasks}>
          Delete done tasks
        </button>
        <button className="todo-del-button" onClick={deleteTasks}>
          Delete all tasks
        </button>
      </div>
    </div>
  );
};

export default TodoList;
