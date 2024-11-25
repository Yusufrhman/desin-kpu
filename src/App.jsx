import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/auth/Login";
import RootLayout from "./pages/RootLayout";
import CandidateInfo from "./pages/candidate/Candidate";
import PartyInfo from "./pages/party/Party";
import RealtimeCount from "./pages/realtime-count/RealtimeCount";
import VoteInput from "./pages/party/vote-input/VoteInput";
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
          path: "/party",
          children: [
            {
              path: ":name",
              element: <VoteInput />,
              children: [],
            },
          ],
        },
        {
          path: "/realtime",
          element: <RealtimeCount />,
          children: [],
        },
      ],
    },
    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
