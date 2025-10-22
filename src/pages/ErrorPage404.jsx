import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ErrorPage404 = () => {
  useTitle("404 Not Found");

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage404;
