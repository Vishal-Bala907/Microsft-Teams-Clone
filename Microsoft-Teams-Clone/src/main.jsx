import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GetStarted from "./components/Chat Area Layouts/getStartedSDK.jsx";
import Hero from "./components/Public/Hero.jsx";
import Signup from "./components/Users/Signup.jsx";
import Login from "./components/Users/Login.jsx";
import LoginAndProfileStore from "./Redux Store/NavBar Slices/LoginAndProfileStore.jsx";
import MainComp from "../src/components/ChatBox/MainComp.jsx";
import Calender from "./components/ChatBox/Calender.jsx";
import ContactsArea from "./components/ChatBox/ContactsArea.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/calling",
    element: <GetStarted />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={LoginAndProfileStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
