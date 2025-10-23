import React, { useEffect, useState } from "react";
import BannerSlider from "../components/BannerSlider";
import PopularGames from "../components/PopularGames";
import Newsletter from "../components/Newsletter";
import useTitle from "../hooks/useTitle";
import Loader from "../components/Loader";

const Home = () => {
  useTitle("Home");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("games.json")
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
    <div>
      <BannerSlider games={games} />
      <PopularGames games={games} />
      <Newsletter />
    </div>
  );
};

export default Home;
