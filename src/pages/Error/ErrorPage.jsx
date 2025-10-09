import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  const is404 = !error;
  const title = is404 ? "404" : error.status || "Error";
  const message = is404
    ? "The page you are looking for does not exist."
    : error?.statusText || error?.message || "Something went wrong!";

  return (
    <div className="min-h-[60vh] flex items-center justify-center ">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col items-center justify-center m-16 p-5 space-y-6 text-center max-w-7xl mx-auto w-full bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-50 ">
        <img src="/public/assets/error-404.png" alt="" />
        <h1 className="text-8xl font-extrabold text-pink-600 animate-pulse">
          {title}
        </h1>
        <h2 className="text-2xl font-semibold text-purple-700">{message}</h2>
        <p className="text-purple-500">
          {is404
            ? "Sorry, we couldn’t find the page you’re looking for."
            : "Please try again or go back to the previous page."}
        </p>
        <Link to={"/"}>
          <button className="mt-4 text-lg font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 hover:scale-105 transition-transform duration-200 text-white py-3 cursor-pointer px-8 rounded-full shadow-lg">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
