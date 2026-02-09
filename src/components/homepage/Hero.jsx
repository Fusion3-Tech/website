"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CommonButton from "../common/CommonButton";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section-x-gap hero">
      <div className="hero-container">
        <motion.div
          className="text-center hero-heading mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUpVariant}>
            <Heading
              className="text-center hero-heading mx-auto"
              variant="large"
              headingVariant="main"
              whiteText="Infrastructure & "
              gradientBlueText="Intelligence Consultancy"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.div variants={fadeUpVariant}>
            <Paragraph
              variant="extraLarge"
              className="hero-para text-center mx-auto"
            >
              We design and deploy high-performance digital systems for organizations operating at the edge of technical complexity.
            </Paragraph>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUpVariant} className="hero-btn-wrapper">
            <CommonButton variant="light" href="#contact">Work With Us</CommonButton>
            <CommonButton href="#capabilities" variant="dark">
              Explore Capabilities
            </CommonButton>
          </motion.div>
        </motion.div>
      </div>
      <div className="hero-image-wrapper">
        <Image
          src="/assets/images/webp/hero-hand-image.webp"
          alt="hero-hand"
          fill
          priority
          className="object-contain hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
