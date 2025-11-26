"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import CommonButton from "../common/CommonButton";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.25]);

  // Variants
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
      <div className="hero-visuals" aria-hidden="true">
        <span className="hero-orb hero-orb-left" />
        <span className="hero-orb hero-orb-right" />
        <span className="hero-rails" />
        <span className="hero-rails hero-rails-secondary" />
        <span className="hero-starfield" />
      </div>
      <motion.div
        className="hero-grid"
        aria-hidden="true"
        style={{ y: gridY, opacity: gridOpacity }}
      />
      <div className="hero-container">
        <motion.div
          className="text-center hero-heading mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUpVariant} className="hero-pill">
            <span className="hero-pill-dot" />
            <span>Web3 venture studio</span>
            <span className="hero-pill-chip">Protocol & product lab</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUpVariant}>
            <Heading
              className="text-center hero-heading mx-auto"
              variant="large"
              headingVariant="main"
              whiteText="Developing the next "
              gradientBlueText="wave of Web3"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.div variants={fadeUpVariant}>
            <Paragraph
              variant="extraLarge"
              className="hero-para text-center mx-auto"
            >
              Fusion3 works on projects that push Web3 forward and help drive
              adoption
            </Paragraph>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="hero-ribbon">
            <span className="hero-ribbon-chip">DeFi</span>
            <span className="hero-ribbon-chip">Gaming</span>
            <span className="hero-ribbon-chip">L2 ecosystems</span>
            <span className="hero-ribbon-chip">Infrastructure</span>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUpVariant} className="hero-btn-wrapper">
            <CommonButton variant="light" href="#portfolio">
              View projects
            </CommonButton>
            <CommonButton href="/#get-in-touch" variant="dark">
              Discover fusion3
            </CommonButton>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-number">25+</span>
              <p className="hero-meta-copy">
                launches, audits, and ecosystem builds shipped with our team.
              </p>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-number">4</span>
              <p className="hero-meta-copy">
                active build pods that prototype, test, and harden weekly.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="hero-feature-grid">
            <div className="hero-feature-card">
              <p className="hero-feature-title">Protocol design</p>
              <p className="hero-feature-copy">
                Mechanism sprints, token design, and governance that can scale.
              </p>
            </div>
            <div className="hero-feature-card">
              <p className="hero-feature-title">Product acceleration</p>
              <p className="hero-feature-copy">
                Pods focused on UX, simulations, and mainnet-readiness.
              </p>
            </div>
            <div className="hero-feature-card">
              <p className="hero-feature-title">Launch & growth</p>
              <p className="hero-feature-copy">
                GTM playbooks across L2s, DeFi, gaming, and infra ecosystems.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="hero-image-wrapper">
        <Image
          src="/assets/images/webp/hero-hand-image.webp"
          alt="hero-hand"
          fill
          priority
          className="object-contain hero-image"
        />
      </div> */}
    </section>
  );
};

export default Hero;
