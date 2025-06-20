import React from 'react';
import Background from '@/components/GeneralComponents/Background';
import GeneralOnepiece from '@/assets/GeneralImages/One_Piece.png';
import LoginForm from '@/components/AuthComponents/LoginForm';

const Login = () => {
  return (
    <Background image={GeneralOnepiece}>
      <main className="flex justify-center items-center h-screen">
        <LoginForm />
      </main>
    </Background>
  );
};

export default Login;