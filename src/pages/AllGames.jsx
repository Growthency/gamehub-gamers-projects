import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import GameCard from "../components/GameCard";
import useTitle from "../hooks/useTitle";
import games from "../games.json";
import Loader from "../components/Loader";

const AllGames = () => {
  useTitle("All Games");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const pageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 500 },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <animated.div style={pageAnimation} className="page-container">
      <h2 className="section-title">All Games</h2>
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </animated.div>
  );
};

export default AllGames;
