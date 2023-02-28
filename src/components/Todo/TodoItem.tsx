import { DeleteOutlined } from "@ant-design/icons";
import { Checkbox, Button, Typography } from "antd";
import React, { useState } from "react";
import "./TodoItem.scss";

const { Text } = Typography;

interface TodoItemProps {
  todo: {
    id: number;
    user: string;
    text: string;
    date: string;
    time: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  pcSize: boolean;
  editMode: boolean;
}

const TodoItem = ({
  todo,
  toggleTodo,
  deleteTodo,
  pcSize,
  editMode,
}: TodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todoItem">
      <Checkbox
        className="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <Text className="userText">{todo.user}</Text>
      <Text
        className="todoText"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </Text>
      <Text className="todoDate">{todo.date}</Text>
      <Text className="todoTime">{todo.time}</Text>
      {editMode && (
        <Button
          className="deleteButton"
          icon={<DeleteOutlined />}
          danger
          onClick={handleDelete}
        ></Button>
      )}
    </div>
  );
};

export default TodoItem;
