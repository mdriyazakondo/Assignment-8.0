import React from "react";
import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  // Determine if this is a real route error or just a 404 (wrong path)
  const is404 = !error;
  const title = is404 ? "404" : error.status || "Error";
  const message = is404
    ? "The page you are looking for does not exist."
    : error?.statusText || error?.message || "Something went wrong!";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-50 p-4">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col items-center justify-center p-16 space-y-6 text-center max-w-xl">
        <h1 className="text-8xl font-extrabold text-pink-600 animate-pulse">
          {title}
        </h1>
        <h2 className="text-2xl font-semibold text-purple-700">{message}</h2>
        <p className="text-purple-500">
          {is404
            ? "Sorry, we couldn’t find the page you’re looking for."
            : "Please try again or go back to the previous page."}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-lg font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 hover:scale-105 transition-transform duration-200 text-white py-3 cursor-pointer px-8 rounded-full shadow-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
