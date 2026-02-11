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
      <motion.div variants={itemVariants} className="founder-image-wrap">
        <Image
          src={item.image}
          alt={item.name}
          width={129}
          height={129}
          className="founder-image"
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="founder-badge"
      >
        {item.role}
      </motion.div>

      <motion.h3 variants={itemVariants} className="founder-name">
        {item.name}
      </motion.h3>

      <motion.div variants={itemVariants}>
        <Paragraph className="founder-desc" variant="small">
          {item.desc}
        </Paragraph>
      </motion.div>

      <motion.div variants={itemVariants} className="founder-link-row">
        <Link
          href={item.href}
          className="founder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin <TopRightArrow className="founder-arrow" />
        </Link>
      </motion.div>
    </motion.article>
  );
};

export default FounderCard;
