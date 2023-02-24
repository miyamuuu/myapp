import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Layout, List, Menu } from "antd";
import "./TodoList.scss";

const { Header, Footer, Sider, Content } = Layout;

interface Todo {
  id: number;
  user: string;
  text: string;
  date: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string, user: string, date: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      user,
      text,
      date,
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
        <TodoForm addTodo={addTodo} />
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
