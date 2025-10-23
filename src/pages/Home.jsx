import React from "react";
import BannerSlider from "../components/BannerSlider";
import PopularGames from "../components/PopularGames";
import Newsletter from "../components/Newsletter";
import useTitle from "../hooks/useTitle";
import games from "../games.json";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <BannerSlider games={games} />
      <PopularGames games={games} />
      <Newsletter />
    </div>
  );
};

export default Home;
