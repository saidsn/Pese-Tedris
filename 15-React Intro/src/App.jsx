import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const peseRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={peseRouter} />
    </>
  );
}

export default App;
