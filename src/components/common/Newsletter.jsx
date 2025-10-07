"use client";

import { motion } from "framer-motion";
import CommonButton from "./CommonButton";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Newsletter = () => {
  // Parent container variants for staggered fade-in
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } }, // each child appears one by one
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="get-in-touch" className="section-x-gap newsletter">
      <div className="newsletter-box">
        <motion.div
          className="newsletter-content-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <Heading
              className="newsletter-heading"
              variant="small"
              headingVariant="small"
              blueText="Join the Future"
              whiteSecondText="of Decentralized Projects"
              blueTextClass="newsletter-blue-heading"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.div variants={itemVariants}>
            <Paragraph className="newsletter-para" variant="small">
              Stay updated on our projects and insights. Follow us on our
              socials or get in touch.
            </Paragraph>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="newsletter-btn-wrapper newsletter-btn-equal"
          >
            <CommonButton variant="light" href="#portfolio">
              View projects
            </CommonButton>
            <CommonButton variant="dark" href="mailto:contact@fusion3.tech">
              Contact Us
            </CommonButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
