import Image from "next/image";
import Link from "next/link";
import { TopRightArrow } from "../common/Icons";
import { journeyData } from "../common/Helper";
import { motion } from "framer-motion";

const JourneyCard = ({ index, card, activeTab }) => {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.article
      className="journey-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Section label */}
      <motion.span
        variants={itemVariants}
        className={`font-semibold text-xs leading-150 -tracking-32 ${
          card.section === activeTab ? "text-primary" : "text-white"
        }`}
      >
        {card.section}
      </motion.span>

      {/* Heading */}
      <motion.h3
        variants={itemVariants}
        className="font-medium text-5xl text-white leading-150 journey-card-heading"
      >
        {card.heading}
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="font-normal leading-150 text-2xl text-white-60"
      >
        {card.description}
      </motion.p>

      {/* Link */}
      <motion.div variants={itemVariants}>
        <Link
          className="journey-contact font-medium text-xl leading-130 text-white"
          href="#"
        >
          {card.contact} <TopRightArrow className="journey-arrow" />
        </Link>
      </motion.div>

      {/* Image */}
      <motion.div variants={itemVariants} className="journey-img-wrapper">
        <Image
          width={524}
          height={516}
          className="journey-card-image"
          src={card.image}
          alt={card.heading}
        />
      </motion.div>

      {/* Divider */}
      {index < journeyData.length - 1 && <hr className="divider" />}
    </motion.article>
  );
};

export default JourneyCard;
