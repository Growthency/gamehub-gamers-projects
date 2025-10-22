import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../providers/Context";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";

const ForgotPassword = () => {
  useTitle("Reset Password");
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2 className="auth-title">Forgot Password</h2>
        <p className="auth-subtitle">
          Enter your email and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your-email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary">
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
