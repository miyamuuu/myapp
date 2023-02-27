import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { List } from "antd";
import "./TodoList.scss";

interface Todo {
  id: number;
  user: string;
  text: string;
  date: string;
  time: string;
  completed: boolean;
}

interface Props {
  pcSize: boolean;
}

const TodoList= ({pcSize}: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (
    text: string,
    user: string,
    date: string,
    time: string,
  ) => {
    const newTodo: Todo = {
      id: Date.now(),
      user,
      text,
      date,
      time,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoFormBackground">
        <TodoForm addTodo={addTodo} pcSize={pcSize}/>
      </div>
      <List bordered className="list">
        {todos.map((todo) => (
          <List.Item className="listItem">
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default TodoList;
