import React from "react";
import Background from "@/components/GeneralComponents/Background";
import GeneralOnepiece from "@/assets/GeneralImages/One_Piece.png";
import LoginForm from "@/components/AuthComponents/LoginForm";

const Login = () => {
  return (
    <Background image={GeneralOnepiece}>
      <main role="main" className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md p-4">
          <LoginForm />
        </div>
      </main>
    </Background>
  );
};

export default Login;
