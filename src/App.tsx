import TodoPage from "./components/Todo/TodoPage";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Routers } from "./Routers";
import "./reset.css";

const App = () => {
  return (
    <Router>
      <TodoPage />
    </Router>
  );
};

export default App;