import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateTask from "./pages/CreateTask";
import DeleteTask from "./pages/DeleteTask";
import EditTask from "./pages/EditTask";
import Layout from "./pages/Layout";
import ViewTask from "./pages/ViewTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ViewTask />} />
          <Route path="create-task" element={<CreateTask />} />
          <Route path="todos/:taskId/deleteTask" element={<DeleteTask />} />
          <Route path="edit-task" element={<EditTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
