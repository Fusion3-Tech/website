"use client";

import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "../common/Badge";
import { trustedLogoData } from "../common/Helper";
const TrustedBy = () => {
  return (
    <section className="trusted-by">
      <div className="trusted-by-container mx-auto w-full">
        <Badge center className="trusted-batch">
          Trusted By
        </Badge>
        <Swiper
          className="logo-slider"
          modules={[Autoplay]}
          loop
          // smooth marquee-style movement
          freeMode={{ enabled: true, momentum: false }}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          // block user dragging
          allowTouchMove={false}
          simulateTouch={false}
          followFinger={false}
          grabCursor={false}
          slidesPerView={2.2}
          spaceBetween={24}
          breakpoints={{
            400: { slidesPerView: 2.6 },
            450: { slidesPerView: 3 },
            550: { slidesPerView: 3.5 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 4.5, spaceBetween: 30 },
            900: { slidesPerView: 5, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 72 },
          }}
        >
          {trustedLogoData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="logo-parent">
                <Image
                  src={item}
                  alt="logo"
                  width={144}
                  height={33}
                  className="logo-slider-image"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="left-gradient-layer"></div>
      <div className="right-gradient-layer"></div>
    </section>
  );
};

export default TrustedBy;
