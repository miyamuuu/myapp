import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/Todo/TodoList";


export const Routers = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/components/TodoList" element={<TodoList />} />
          </Routes>
        </BrowserRouter>
    )
}