"use client";

import { motion } from "framer-motion";
import CommonButton from "./CommonButton";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Newsletter = () => {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="section-x-gap newsletter">
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
              blueText="Let's design"
              whiteSecondText="your next system."
              blueTextClass="newsletter-blue-heading"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.div variants={itemVariants}>
            <Paragraph className="newsletter-para" variant="small">
              Ready to build infrastructure that performs at scale? Start a
              conversation with our team.
            </Paragraph>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="newsletter-btn-wrapper newsletter-btn-equal"
          >
            <CommonButton variant="light" href="mailto:contact@fusion3.tech">
              Contact Us
            </CommonButton>
            <CommonButton variant="dark" href="#capabilities">
              Explore Capabilities
            </CommonButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
