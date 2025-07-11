import React from 'react';
import Background from '@/components/GeneralComponents/Background';
import GeneralOnepiece from '@/assets/GeneralImages/One_Piece.png';
import RegisterForm from '@/components/AuthComponents/RegisterForm';

const Login = () => {
  return (
    <Background image={GeneralOnepiece}>
      <main className="flex justify-center items-center h-screen">
        <RegisterForm />
      </main>
    </Background>
  );
};

export default Login;