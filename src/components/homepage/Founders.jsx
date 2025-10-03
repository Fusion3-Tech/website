"use client";

import { motion } from "framer-motion";
import Badge from "../common/Badge";
import Heading from "../common/Heading";
import { foundersDataList } from "../common/Helper";
import Paragraph from "../common/Paragraph";
import FounderCard from "./FounderCard";

const Founders = () => {
  // Variants for staggered fade-in
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="founders" className="section-x-gap founders">
      <div className="founders-container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge className="founders-section-badge">Founders</Badge>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="founders-header-wrapper"
          >
            <Heading
              className="founder-heading"
              headingVariant="sub"
              variant="small"
              whiteText="Meet the Founders Driving Fusion3 Forward"
            />

            {/* Paragraph */}
            <motion.div variants={itemVariants}>
              <Paragraph className="founder-para" variant="small">
                Guided by vision and hands-on experience, Fusion3’s founders
                bring complementary skills that bridge blockchain innovation
                with real-world application.
              </Paragraph>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Founder cards remain unchanged */}
        <div className="founder-card-wrapper">
          {foundersDataList.map((item, index) => (
            <FounderCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
