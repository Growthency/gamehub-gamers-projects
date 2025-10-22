import React from "react";
import GameCard from "./GameCard";

const PopularGames = ({ games }) => {
  const popular = games
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);

  return (
    <section className="popular-games-section">
      <h2 className="section-title">Popular Games</h2>
      <div className="games-grid">
        {popular.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default PopularGames;
