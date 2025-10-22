import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import Loader from "../components/Loader";

const GameDetails = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const allGames = useLoaderData();

  useTitle(game ? game.title : "Game Details");

  useEffect(() => {
    const findGame = allGames.find((g) => g.id === id);
    if (findGame) {
      setGame(findGame);
    }
    setLoading(false);
  }, [id, allGames]);

  if (loading) {
    return <Loader />;
  }

  if (!game) {
    return (
      <div className="page-container">
        <h2>Game not found!</h2>
      </div>
    );
  }

  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;

  return (
    <div className="game-details-container">
      <img src={coverPhoto} alt={title} className="details-image" />
      <div className="details-content">
        <h1 className="details-title">{title}</h1>
        <div className="details-meta">
          <span className="details-category">{category}</span>
          <span className="details-rating">{ratings} ★</span>
        </div>
        <p className="details-developer">
          Developer: <strong>{developer}</strong>
        </p>
        <p className="details-description">{description}</p>
        <a
          href={downloadLink}
          target="_blank"
          className="btn btn-primary btn-large"
        >
          Install Game
        </a>
      </div>
    </div>
  );
};

export default GameDetails;
