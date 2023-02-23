import TodoList from "./components/Todo/TodoList";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Routers } from "./Routers";
import "./reset.css";

const App = () => {
  return (
    <Router>
      <TodoList />
    </Router>
  );
};

export default App;