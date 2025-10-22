import React, { useContext } from "react";
import { AuthContext } from "../providers/Context";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";

const MyProfile = () => {
  useTitle("My Profile");
  const { user } = useContext(AuthContext);

  return (
    <div className="page-container profile-page">
      <div className="profile-card">
        <img
          src={
            user.photoURL
              ? user.photoURL
              : "https://i.ibb.co/L1b1sds/default-avatar-profile-icon-vector-social-media-user-photo-183-0.jpg"
          }
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="profile-name">{user.displayName}</h2>
        <p className="profile-email">{user.email}</p>
        <Link to="/update-profile" className="btn btn-secondary">
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
