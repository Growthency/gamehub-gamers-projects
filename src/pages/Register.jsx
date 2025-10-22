import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Context";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2 className="auth-title">Create Account</h2>
        <form onSubmit={handleRegister} className="auth-form">
          <div className="form-control">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your-email@example.com"
              required
            />
          </div>
          <div className="form-control">
            <label>Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="https://example.com/image.png"
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
              Register
            </button>
          </div>
        </form>
        <div className="auth-links">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Login
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

export default Register;
