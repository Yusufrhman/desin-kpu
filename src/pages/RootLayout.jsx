import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
