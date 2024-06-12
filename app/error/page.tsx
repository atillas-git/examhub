import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-teal-500 flex items-center justify-center text-white">
      <div className="flex flex-col">
        <p className="text-3xl font-semibold">
          Oops! Looks like there is an error.
        </p>
        <small>Do not worry, we are trying to fix this!</small>
      </div>
    </div>
  );
};

export default ErrorPage;
