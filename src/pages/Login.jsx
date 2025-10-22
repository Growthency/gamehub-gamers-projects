import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Context";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const [email, setEmail] = useState("");
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2 className="auth-title">Login Now</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your-email@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="******"
              required
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="auth-links">
          <Link
            to="/forgot-password"
            state={{ email: email }}
            className="auth-link"
          >
            Forgot password?
          </Link>
          <p>
            New to Gamehub?{" "}
            <Link to="/register" className="auth-link">
              Create an Account
            </Link>
          </p>
        </div>
        <div className="auth-divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-google">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
