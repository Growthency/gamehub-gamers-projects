import React from "react";
import GameCard from "../components/GameCard";
import useTitle from "../hooks/useTitle";
import games from "../games.json";

const AllGames = () => {
  useTitle("All Games");

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
