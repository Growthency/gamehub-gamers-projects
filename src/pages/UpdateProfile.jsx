import React, { useContext } from "react";
import { AuthContext } from "../providers/Context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const UpdateProfile = () => {
  useTitle("Update Profile");
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/my-profile");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2 className="auth-title">Update Your Profile</h2>
        <form onSubmit={handleUpdate} className="auth-form">
          <div className="form-control">
            <label>Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              required
            />
          </div>
          <div className="form-control">
            <label>Photo URL</label>
            <input type="text" name="photoURL" defaultValue={user.photoURL} />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
