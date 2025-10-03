"use client";

import Link from "next/link";
import React from "react";
import { TopRightArrow } from "./Icons";
import { motion } from "framer-motion";

export default function FeatureCard({
  icon,
  title,
  description,
  link = "#",
  size = "small",
  bgImage = "",
  overlayProps = {}, // new prop for overlay styles
}) {
  // Variants for staggering fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`feature-card ${size}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // triggers when in view
    >
      {/* Dynamic overlay with card-specific style */}
      {bgImage && (
        <div
          className={`feature-overlay ${size}`}
          style={{
            backgroundImage: `url(${bgImage})`,
            ...overlayProps, // allow custom overlay styles
          }}
        />
      )}

      <motion.div className="feature-content" variants={containerVariants}>
        <motion.div className="feature-icon" variants={itemVariants}>
          <div className="icon-div"></div>
          {icon}
        </motion.div>

        <motion.h3 className="feature-title text-5xl" variants={itemVariants}>
          {title}
        </motion.h3>

        <motion.p className="feature-desc text-2xl" variants={itemVariants}>
          {description}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            className="feature-contact font-medium text-xl leading-130 text-white"
            href={link}
          >
            See more <TopRightArrow className="journey-arrow" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
