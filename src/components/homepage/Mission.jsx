"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import missionImage from "../../../public/assets/images/webp/mission-hand.webp";
import Badge from "../common/Badge";
import CommonButton from "../common/CommonButton";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const Mission = () => {
  // Parent variant to stagger children
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // gap between each animation
      },
    },
  };

  // Fade + slide up variant
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Scale-up variant for image
  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="mission" className="section-x-gap mission">
      <section className="mission-section">
        {/* Left Content */}
        <motion.div
          className="mission-content-wrapper !mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={parentVariant} // apply stagger here
        >
          <motion.div variants={fadeUpVariant}>
            <Badge start>Our Mission</Badge>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <Heading variant="white" className="text-start mission-heading">
              <span className="mission-start-heading">
                We build projects
              </span>{" "}
              with Web3 principles in mind.
            </Heading>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <Paragraph
              variant="large"
              className="mission-para text-start !mx-0 "
            >
              We develop projects for high-impact needs, with Web3 principles at the core.
            </Paragraph>
          </motion.div>

          <motion.div variants={scaleUpVariant}>
            <Image
              src={missionImage}
              alt="logo"
              width={470}
              height={566}
              sizes="(max-width: 768px) 80vw, 470px"
              priority
              className="mission-hand-img mission-hand-img-mobile"
            />
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <CommonButton className="portfolio-btn" href="#portfolio" variant="light">
              View projects
            </CommonButton>
          </motion.div>
        </motion.div>

        {/* ✅ Image visible only on ≥ 768px */}
        <motion.div
          variants={scaleUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={missionImage}
            alt="logo"
            width={470}
            height={566}
            sizes="(max-width: 768px) 80vw, 470px"
            priority
            className="mission-hand-img mission-hand-img-desktop"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Mission;
