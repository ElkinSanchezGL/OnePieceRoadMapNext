/*'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { useTranslation } from "react-i18next";
import InputField from "./InputField";
import { useAuth } from "@/features/auth/AuthContext";

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(formData.username, formData.password)) {
      router.push(`/${i18n.language}`);
    } else {
      alert(t("login.invalidCredentials"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        {t("login.title")}
      </h2>

      <div className="space-y-4">
        <InputField
          id="username"
          label={t("login.username")}
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          id="password"
          label={t("login.password")}
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-red-700 cursor-pointer text-white px-6 py-3 rounded-lg mt-6 w-full"
      >
        {t("login.button")}
      </button>
    </form>
  );
};

export default LoginForm;
*/