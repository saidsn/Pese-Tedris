import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Wishlist from "../pages/wishlist/Wishlist";
import Basket from "../pages/basket/Basket";
import DetailPage from "../pages/detail/DetailPage";
import Admin from "../pages/admin/Admin";

export const router = createBrowserRouter([
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
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/detailpage/:id",
        element: <DetailPage />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
