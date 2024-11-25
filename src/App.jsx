import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/auth/Login";
import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
          children: [],
        },
        {
          path: "tentang",
          element: <LandingPage />,
        },
        ,
        {
          path: "histori",
          element: <LandingPage />,
        },
        {
          path: "unduhan",
          element: <LandingPage />,
        },
        {
          path: "pilkada-2024",
          element: <LandingPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
