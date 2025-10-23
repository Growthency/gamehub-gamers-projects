import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import BannerSlider from "../components/BannerSlider";
import PopularGames from "../components/PopularGames";
import Newsletter from "../components/Newsletter";
import useTitle from "../hooks/useTitle";
import games from "../games.json";
import Loader from "../components/Loader";

const Home = () => {
  useTitle("Home");
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
    <animated.div style={pageAnimation}>
      <BannerSlider games={games} />
      <PopularGames games={games} />
      <Newsletter />
    </animated.div>
  );
};

export default Home;
