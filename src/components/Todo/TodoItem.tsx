import { Checkbox, Button, Typography } from "antd";
import React from "react";
import "./TodoItem.scss";

const { Text } = Typography;

interface TodoItemProps {
  todo: {
    id: number;
    user: string;
    text: string;
    date: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todoItem">
      <Checkbox checked={todo.completed} onChange={handleToggle} />
      <Text className="userText">{todo.user}</Text>
      <Text
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        className="todoText"
      >
        {todo.text}
      </Text>
      <Text
        className="todoDate"
      >{todo.date}</Text>
      <Button onClick={handleDelete}>削除</Button>
    </div>
  );
};

export default TodoItem;
