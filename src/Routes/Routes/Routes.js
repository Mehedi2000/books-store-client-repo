import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import SingleCategory from "../../Pages/Home/Categories/SingleCategory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/category/:id",
        element: <SingleCategory></SingleCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/category/${params.id}`),
      },
    ],
  },
]);
