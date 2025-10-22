import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = ({ games }) => {
  const bannerGames = games.slice(0, 3);

  return (
    <div className="banner-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {bannerGames.map((game) => (
          <SwiperSlide key={game.id}>
            <div
              className="slide-item"
              style={{ backgroundImage: `url(${game.coverPhoto})` }}
            >
              <div className="slide-content">
                <h2>{game.title}</h2>
                <p>{game.description.substring(0, 100)}...</p>
                <a
                  href={game.downloadLink}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Get Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
