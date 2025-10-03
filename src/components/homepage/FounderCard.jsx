"use client";

import Image from "next/image";
import Link from "next/link";
import { TopRightArrow } from "../common/Icons";
import Paragraph from "../common/Paragraph";
import { motion } from "framer-motion";

const FounderCard = ({ item }) => {
  // Container for staggered children
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }, // each item comes one by one
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.article
      className="founder-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image */}
      <motion.div variants={itemVariants}>
        <Image
          src={item.image}
          alt={item.name}
          width={129}
          height={129}
          className="founder-image"
        />
      </motion.div>

      {/* Role */}
      <motion.div
        variants={itemVariants}
        className="founder-badge font-funnel font-semibold text-xl leading-150 text-white"
      >
        {item.role}
      </motion.div>

      {/* Name */}
      <motion.span
        variants={itemVariants}
        className="text-7xl font-normal leading-100 -tracking-32 text-center text-white"
      >
        {item.name}
      </motion.span>

      {/* Description */}
      <motion.div variants={itemVariants}>
        <Paragraph className="founder-desc text-center" variant="small">
          {item.desc}
        </Paragraph>
      </motion.div>

      {/* Link */}
      <motion.div variants={itemVariants}>
        <Link
          href={item.href}
          className="founder-link font-funnel font-semibold text-xl leading-150 text-white"
        >
          Linkedin <TopRightArrow className="founder-arrow" />
        </Link>
      </motion.div>
    </motion.article>
  );
};

export default FounderCard;
