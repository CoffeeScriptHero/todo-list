import React, { useEffect, useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";

const TodoWindow = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTask = (value) => {
    setTodos((todos) => {
      const id =
        Date.now().toString(36) + Math.random().toString(36).substring(2);
      const updatedTodos = [...todos, { id, value, isDone: false }];
      return updatedTodos;
    });
  };

  const deleteTask = (id) => {
    setTodos((todos) => {
      const updatedTodos = todos.filter((t) => t.id !== id);
      return updatedTodos;
    });
  };

  const toggleIsDone = (id) => {
    setTodos((todos) => {
      const updatedTodos = todos.map((t) => {
        if (t.id === id) t.isDone = !t.isDone;
        return t;
      });
      return updatedTodos;
    });
  };

  const editTask = (id, value) => {
    setTodos((todos) => {
      const updatedTodos = todos.map((t) => {
        if (t.id === id) t.value = value;
        return t;
      });
      return updatedTodos;
    });
  };

  const deleteTasks = () => setTodos([]);

  const deleteDoneTasks = () => {
    setTodos((todos) => todos.filter((t) => !t.isDone));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo">
      <TodoInput addTask={addTask} />
      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        toggleIsDone={toggleIsDone}
        editTask={editTask}
        deleteTasks={deleteTasks}
        deleteDoneTasks={deleteDoneTasks}
      />
    </div>
  );
};

export default TodoWindow;
