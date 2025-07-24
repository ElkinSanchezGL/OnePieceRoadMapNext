import React from "react";
import Background from "@/components/GeneralComponents/Background";
import GeneralOnepiece from "@/assets/GeneralImages/One_Piece.png";
import RegisterForm from "@/components/AuthComponents/RegisterForm";

const RegisterPage = () => {
  return (
    <Background image={GeneralOnepiece}>
      <main
        className="flex justify-center items-center h-screen"
        aria-labelledby="register-heading"
      >
        <h1 id="register-heading" className="sr-only">
          Registro
        </h1>
        <RegisterForm />
      </main>
    </Background>
  );
};

export default RegisterPage;
