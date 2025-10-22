import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import useTitle from "../hooks/useTitle";
import Loader from "../components/Loader";

const AllGames = () => {
  useTitle("All Games");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="page-container">
      <h2 className="section-title">All Games</h2>
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default AllGames;
