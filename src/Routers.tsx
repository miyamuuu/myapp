import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./components/Todo/TodoPage";


export const Routers = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/components/TodoPage" element={<TodoPage />} />
          </Routes>
        </BrowserRouter>
    )
}