"use client";

import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const ReviewsSlider = ({ slidesData, className, reverse = false }) => {
  return (
    <Swiper
      className={className}
      modules={[Autoplay]}
      freeMode
      loop
      grabCursor
      centeredSlides={true}
      slidesPerView={1.5}
      spaceBetween={18}
      speed={15000} 
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: reverse, 
      }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 24 },
        768: { slidesPerView: 2, spaceBetween: 32 },
        1024: { slidesPerView: 2.32, spaceBetween: 48 },
        1280: { slidesPerView: 2.8, spaceBetween: 48 },
        1800: { slidesPerView: 3.4, spaceBetween: 48 },
      }}
    >
      {slidesData.map((item, index) => (
        <SwiperSlide key={index}>
          <ReviewCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSlider;
