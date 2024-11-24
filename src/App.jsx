import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/auth/Login";
import RootLayout from "./pages/RootLayout";
import CandidateInfo from "./pages/candidate/Candidate";
import PartyInfo from "./pages/party/Party";
import RealtimeCount from "./pages/realtime-count/RealtimeCount";
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
      element: <CandidateInfo />,
      children: [],
    },
    {
      path: "/party",
      element: <PartyInfo />,
      children: [],
    },
    {
      path: "/realtime",
      element: <RealtimeCount />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
