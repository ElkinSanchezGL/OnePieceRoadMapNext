import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  let message = "Ocurrió un error inesperado.";

  if (isRouteErrorResponse(error)) {
    message = `${error.status} - ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-100 text-red-800 p-8">
      <h1 className="text-3xl font-bold mb-4">¡Ups! Algo salió mal</h1>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default ErrorPage;
