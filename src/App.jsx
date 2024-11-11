import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/auth/Login";
import RootLayout from "./pages/RootLayout";
import Candidate from "./components/candidate/Candidate";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [],
    },
    {
      path: "/login",
      element: <LoginPage />,
      children: [],
    },
    {
      path: "/candidate",
      element: <Candidate />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
