import { useState } from "react";
import FormInput from "../form/FormInput";
import FormSection from "../form/FormSection";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredData = Object.fromEntries(formData.entries());
    if (enteredData.email === "aa@aa.com") {
      setErrorMessage({
        email: "Akun belum terdaftar",
        password: errorMessage.password,
      });
    } else if (enteredData.email.length < 1) {
      setErrorMessage({
        email: "Email Wajib diisi",
        password: errorMessage.password,
        confirm: errorMessage.confirm,
      });
    } else if (enteredData.password.length < 6) {
      setErrorMessage({
        email: errorMessage.email,
        password: "Password minimal 6 karakter",
      });
    } else {
      setErrorMessage({ email: "", password: "" });
      navigate("/");
    }
  }
  return (
    <FormSection title="Selamat Datang!">
      <form className="space-y-8" onSubmit={submit}>
        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="name@company.com"
          isError={errorMessage.email !== ""}
          errorMessage={errorMessage.email}
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          isError={errorMessage.password !== ""}
          errorMessage={errorMessage.password}
        />
        <button className="w-full h-fit bg-[#FED700] text-base px-4 py-2 rounded-lg hover:bg-[#cbb42f] ">
          Masuk
        </button>
      </form>
    </FormSection>
  );
}
