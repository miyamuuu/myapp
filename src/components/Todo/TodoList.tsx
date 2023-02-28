import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { List, Switch } from "antd";
import "./TodoList.scss";
import { LockFilled, UnlockFilled } from "@ant-design/icons";

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

const TodoList = ({ pcSize }: Props) => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [editMode, setEditMode] = useState(false);

  const addTodo = (text: string, user: string, date: string, time: string) => {
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
        <TodoForm addTodo={addTodo} pcSize={pcSize} />
      </div>
      <List
        bordered
        className="list"
        header={
          <>
          <div className="userList">
            <p>全員 / 10件</p>
            <p>宮本 / 5件</p>
            <p>梅田 / 3件</p>
            <p>西川 / 2件</p>
          </div>
          <Switch
            checkedChildren={<UnlockFilled />}
            unCheckedChildren={<LockFilled />}
            onChange={() => setEditMode(!editMode)}
          />
          </>
        }
      >
        {todos.map((todo) => (
          <List.Item className="listItem">
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              pcSize={pcSize}
              editMode={editMode}
            />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default TodoList;
