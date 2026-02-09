"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import { motion } from "framer-motion";
import Badge from "../common/Badge";
import CommonButton from "../common/CommonButton";
import Heading from "../common/Heading";
import { portfolioDataList } from "../common/Helper";
import Paragraph from "../common/Paragraph";
import PortfolioCard from "./PortfolioCard";
import { NavigationArrow } from "../common/Icons";

const Portfolio = () => {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="work" className="portfolio">
      <div className="portfolio-container mx-auto">
        <motion.div
          className="portfolio-content-wrapper section-x-gap mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge center>Selected Work</Badge>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <Heading
              variant="small"
              className="text-center mx-auto portfolio-heading"
              whiteText="Systems Built for"
              blueText="Real-World Complexity"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.div variants={itemVariants}>
            <Paragraph
              variant="small"
              className="portfolio-para text-center mx-auto"
            >
              Each engagement reflects our commitment to delivering infrastructure
              that operates reliably under demanding conditions. These projects
              demonstrate our capabilities across distributed systems, cross-network
              integration, and high-performance architecture.
            </Paragraph>
          </motion.div>

          {/* View projects Button */}
          <motion.div variants={itemVariants}>
            <CommonButton href="#contact" className="portfolio-btn" variant="light">
              Start a conversation
            </CommonButton>
          </motion.div>
        </motion.div>

        <div className="relative">
          <Swiper
            className="portfolio-slider"
            modules={[Autoplay, Navigation, EffectFade]}
            loop
            speed={500}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={{
              prevEl: ".portfolio-prev",
              nextEl: ".portfolio-next",
            }}
            slidesPerView={1}
            spaceBetween={16}
          >
            {portfolioDataList.map((item, index) => (
              <SwiperSlide key={index}>
                <PortfolioCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="portfolio-swiper-btn-wrapper">
            <div className="portfolio-navigation-btns-wrapper section-x-gap">
              <button
                aria-label="previous arrow button"
                className="portfolio-prev portfolio-navigation-btn"
              >
                <NavigationArrow className="portfolio-navigation" />
              </button>
              <button
                aria-label="next arrow button"
                className="portfolio-next portfolio-navigation-btn"
              >
                <NavigationArrow className="portfolio-navigation portfolio-navigation-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-layer"></div>
    </section>
  );
};

export default Portfolio;
