import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavLink({ children, href }) {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  const isSelected =
    currentPath === href || (currentPath === "/" && href === "/");
  return (
    <div>
      <Link to={href} className={`p-0 m-0 text-base ${isSelected ? "font-bold" : ""}`}>
        {children}
      </Link>
      {isSelected ? (
        <motion.span
          layoutId="nav-indicator"
          className="w-full bg-white h-[2px] block"
        ></motion.span>
      ) : (
        <></>
      )}
    </div>
  );
}
