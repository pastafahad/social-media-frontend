import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutWrapper from "../components/Layout";
import Home from "./Home";
import MyPosts from "./my-posts"; // Updated to reflect the new Posts component
import UserProfile from "./profile/index";
import Login from "./Login";
import Signup from "./Signup";
import CreatePost from "./create-post"; // Updated to reflect the new Create Post component
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isUserLoggedIn } from "../store/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-posts", // Updated path to reflect posts
        element: <MyPosts />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/create-post", // Updated path to reflect post creation
        element: <CreatePost />,
      },
    ],
  },
]);

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    dispatch(isUserLoggedIn(parsedUser));
  }, [dispatch]); // Added dispatch to dependency array

  return <RouterProvider router={router} />;
};

export default Routes;
