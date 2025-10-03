"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "../common/Heading";
import ReviewsSlider from "./ReviewsSlider";
import { reviewsDataList } from "../common/Helper";

const Reviews = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="reviews">
      <div className="section-x-gap">
        <motion.div
          className="reviews-heading-wrapper"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Heading
            className="text-center"
            headingVariant="sub"
            variant="small"
            blueText="Loved by"
            whiteSecondText="founders, innovators, communities and "
            blueEndText="visionaries"
          />
        </motion.div>
      </div>

      <div className="review-sliders-wrapper">
        <ReviewsSlider
          className="review-slider-first"
          slidesData={[
            ...reviewsDataList,
            ...reviewsDataList,
            ...reviewsDataList,
          ]}
        />

        <ReviewsSlider
          className="review-slider-second"
          slidesData={[
            ...reviewsDataList,
            ...reviewsDataList,
            ...reviewsDataList,
          ]}
          reverse
        />
        <div className="review-slider-left-layer"></div>
        <div className="review-slider-right-layer"></div>
      </div>
    </section>
  );
};

export default Reviews;
