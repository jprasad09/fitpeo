import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-2">Oops!</h1>
      <p>
        <i className="font-medium text-gray-700 text-lg">{error.statusText || error.message}</i>
      </p>
      <Link to='/' className="mt-5 px-3 py-2 bg-[--primary-bg-color] text-[--primary-text-color] rounded-md">Go Home</Link>
    </div>
  );
};

export default ErrorPage;