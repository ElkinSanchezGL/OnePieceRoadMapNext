'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import InputField from "./InputField";

const RegisterForm = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(t("login.passwordMismatch"));
    } else {
      alert(t("register.registered"));
      router.push(`/${i18n.language}/login`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300 transition duration-300 ease-in-out hover:shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-black-700">
        {t("register.title")}
      </h2>

      <InputField
        id="username"
        label={t("login.username")}
        value={formData.username}
        onChange={handleChange}
        className="bg-red-50"
      />
      <InputField
        id="password"
        label={t("login.password")}
        type="password"
        value={formData.password}
        onChange={handleChange}
        className="bg-red-50"
      />
      <InputField
        id="confirmPassword"
        label={t("register.repeatPassword")}
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="bg-red-50"
      />

      {formData.password !== formData.confirmPassword && (
        <p className="text-sm text-red-600 mt-1">
          {t("login.passwordMismatch")}
        </p>
      )}

      <button
        type="submit"
        className="bg-red-800 text-white px-8 py-2 rounded-lg font-semibold tracking-wide shadow-md hover:bg-red-600 hover:scale-105 transform transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-600/50 w-full mt-4"
      >
        {t("register.button")}
      </button>
    </form>
  );
};

export default RegisterForm;
