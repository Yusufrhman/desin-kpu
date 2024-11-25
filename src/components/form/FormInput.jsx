import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  isError,
  errorMessage,
}) => {
  const isPassword = type === "password";
  const [isHidden, setIsHidden] = useState(true);
  return (
    <motion.div
      animate={isError ? { y: [0, -5, 5, -5, 5, 0] } : { y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-white text-left ${
          isError && " text-red-400"
        }`}
      >
        {label}
      </label>
      <div className="w-full h-full relative text-left ">
        {isPassword &&
          (!isHidden ? (
            <FaEyeSlash
              size={24}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setIsHidden(true)}
            />
          ) : (
            <FaEye
              size={24}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setIsHidden(false)}
            />
          ))}
        <input
          type={!isPassword ? type : isHidden ? type : "text"}
          name={id}
          id={id}
          placeholder={placeholder}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-slate-600 focus:border-primary-600 block w-full p-2.5 text-left  ${
            isError && "text-red-400 border-red-400"
          }`}
        />
      </div>
      {isError && (
        <p className="text-xs text-red-400 text-left  p-1">{errorMessage}</p>
      )}
    </motion.div>
  );
};

export default FormInput;
