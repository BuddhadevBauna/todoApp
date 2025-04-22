import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root.jsx";
import Home from "./pages/Home.jsx";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import Logout from "./auth/Logout.jsx";
import NotFound from "./pages/NotFound.jsx";
import axios from "axios";
import ServerError from "./pages/ServerError.jsx";
import ProtectedRoot from "./components/ProtectedRoot.jsx";

const router = createBrowserRouter([
  {
    path: '/', element: <Root />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoot>
            <Home />
          </ProtectedRoot>
        )
      },
      {
        path: 'account/',
        children: [
          { path: 'register', element: <Register /> },
          { path: 'login', element: <Login /> },
          { path: 'logout', element: <Logout /> },
        ]
      },
      { path: '*', element: <NotFound /> },
    ],
  }
])

function App() {
  const [isServerIssue, setServerIssue] = useState(true);
  const [isServerIssueLoading, setServerIssueLoading] = useState(true);

  const checkServerStatus = async () => {
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/status`;
      const response = await axios.get(url);
      if (response.status >= 200 && response.status <= 300) {
        setServerIssue(false);
      } else {
        setServerIssue(true);
      }
    } catch (error) {
      setServerIssue(true);
    } finally {
      setServerIssueLoading(false);
    }
  }

  useEffect(() => {
    checkServerStatus();
  }, []);

  if (isServerIssueLoading) return <p>Loading...</p>;
  if (isServerIssue) return <ServerError />;
  return (
    <RouterProvider router={router} />
  )
}

export default App;