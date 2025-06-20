'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import InputField from './InputField';

const LoginForm = () => {
  const t = useTranslations('login');
  const locale = useLocale();
  const router = useRouter();

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push(`/${locale}/`);
      } else {
        const errorData = await response.json();
        setError(errorData.message || t('invalidCredentials'));
      }
    } catch (err) {
      setError(t('connectionError'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        {t('title')}
      </h2>

      <div className="space-y-4">
        <InputField
          id="username"
          label={t('username')}
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          id="password"
          label={t('password')}
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="bg-red-700 cursor-pointer text-white px-6 py-3 rounded-lg mt-6 w-full hover:bg-red-800 disabled:bg-red-400 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? t('loading') : t('button')}
      </button>
    </form>
  );
};

export default LoginForm;
