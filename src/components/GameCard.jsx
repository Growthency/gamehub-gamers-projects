import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const { id, title, coverPhoto, category, ratings } = game;

  return (
    <div className="game-card">
      <figure>
        <img src={coverPhoto} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Category: {category}</p>
        <div className="card-footer">
          <span>Rating: {ratings} ★</span>
          <Link to={`/game/${id}`} className="btn btn-secondary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
