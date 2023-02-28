import React, { useState, useEffect } from "react";
import { Form, Select, Button, Input, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "./TodoForm.scss";

interface Props {
  addTodo: (text: string, user: string, date: string, time: string) => void;
  pcSize: boolean;
}

const TodoForm = ({ addTodo, pcSize }: Props) => {

  interface User {
    value: string;
    label: string;
  }

  const [selecterUsers, setSelecterUsers] = useState<User[]>([
    { value: "全員", label: "全員" },
    { value: "宮本", label: "宮本" },
    { value: "梅田", label: "梅田" },
    { value: "西川", label: "西川" },
  ]);

  interface TodoCount {
    userName: string;
    count: number;
  }

  interface TodoCounts {
    todoCounts: TodoCount[];
  }

  const [todoCount, setTodoCount] = useState<TodoCounts>({
    todoCounts: [
      { userName: "全員", count: 0 },
      { userName: "宮本", count: 0 },
      { userName: "梅田", count: 0 },
      { userName: "西川", count: 0 },
    ]
  });

  const [text, setText] = useState("");
  const [user, setUser] = useState("全員");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // 日付を変更した時
  const onChangeDatePicker = (date: dayjs.ConfigType, dateString: string) => {
    setDate(dateString);
  };

  // 時間を変更した時
  const onChangeTimePicker = (time: dayjs.ConfigType, timeString: string) => {
    setTime(timeString);
  };

  // const incrementCount = (user: string) => {
  //   const todoUser = todoCount.todoCounts.find((stateUser) => stateUser.userName === user);
  //   return todoUser ? setTodoCount(todoCount.filter((user) => ))
  // };

  // 作成を押した時
  const onFinishTodoCreate = () => {
    if (!text) return;
    addTodo(text, user, date, time);
    // setText("");
    // incrementCount(user);
  };

  return (
    <Form onFinish={onFinishTodoCreate} layout="inline" className="todoForm">
      <Form.Item className="formItem">
        <Select
          defaultValue="全員"
          onChange={(value) => setUser(value)}
          options={selecterUsers}
          className="todoSelect"
        />
      </Form.Item>

      <Form.Item className="formItem">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Item>

      <Form.Item className="formItem">
        <DatePicker onChange={onChangeDatePicker} placeholder="日付" />
      </Form.Item>

      <Form.Item className="formItem">
        <TimePicker
          format={"HH:mm"}
          onChange={onChangeTimePicker}
          placeholder="時間"
        />
      </Form.Item>

      <Form.Item className="formItem">
        <Button type="primary" htmlType="submit">
          作成
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
