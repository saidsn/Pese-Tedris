import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
