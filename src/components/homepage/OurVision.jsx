"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "../common/Badge";
import CommonButton from "../common/CommonButton";
import Heading from "../common/Heading";
import { Contract, Ecosystem, Infrastructure, Research } from "../common/Icons";
import VisionBadge from "./VisionBadge";

const OurVision = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeOpacityVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const badgeContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="capabilities" className="our-vision section-x-gap">
      <div className="our-vision-container mx-auto">
        {/* Header */}
        <motion.div
          className="our-vision-header mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerStagger}
        >
          <motion.div variants={fadeInVariant}>
            <Badge center>What We Do</Badge>
          </motion.div>

          <motion.div variants={fadeInVariant}>
            <Heading
              className="our-vision-heading text-center"
              headingVariant="sub"
              variant="small"
              blueText="We architect, build, and operate"
              whiteSecondText="complex digital systems that"
              blueEndText="deliver lasting performance."
            />
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            className="our-vision-btns-wrapper"
          >
            <CommonButton href="#contact" variant="light">
              Work with us
            </CommonButton>
            <CommonButton href="#contact" variant="dark">
              Start a conversation
            </CommonButton>
          </motion.div>
        </motion.div>

        {/* Vision Logo Box */}
        <motion.div
          className="vision-logo-box mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Polka Icon */}
          <motion.div variants={scaleUpVariant}>
            <Image
              src="/assets/images/webp/fusion3-vision1.svg"
              width={290}
              height={92}
              className="vision-polka-icon"
              alt="fusion3-icon"
              priority
              sizes="(max-width: 768px) 60vw, 304px"
            />
          </motion.div>

          {/* Vision Badges */}
          <motion.div
            variants={badgeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeOpacityVariant}>
              <VisionBadge
                className="vision-badge-1"
                icon={<Contract className="vision-badge-icons" />}
              >
                Architecture
              </VisionBadge>
            </motion.div>

            <motion.div variants={fadeOpacityVariant}>
              <VisionBadge
                className="vision-badge-2"
                icon={<Ecosystem className="vision-badge-icons" />}
              >
                Integration
              </VisionBadge>
            </motion.div>

            <motion.div variants={fadeOpacityVariant}>
              <VisionBadge
                className="vision-badge-3"
                icon={<Infrastructure className="vision-badge-icons" />}
              >
                Infrastructure
              </VisionBadge>
            </motion.div>

            <motion.div variants={fadeOpacityVariant}>
              <VisionBadge
                className="vision-badge-4"
                icon={<Research className="vision-badge-icons" />}
              >
                Intelligence
              </VisionBadge>
            </motion.div>
          </motion.div>

          {/* Arrows */}
          <motion.div variants={fadeOpacityVariant}>
            <Image
              src="/assets/images/webp/vision-badge-arrow-1.webp"
              alt="arrow"
              width={172}
              height={68}
              className="vision-badge-arrow-1"
            />
          </motion.div>
          <motion.div variants={fadeOpacityVariant}>
            <Image
              src="/assets/images/webp/vision-badge-arrow-2.webp"
              alt="arrow"
              width={124}
              height={63}
              className="vision-badge-arrow-2"
            />
          </motion.div>
          <motion.div variants={fadeOpacityVariant}>
            <Image
              src="/assets/images/webp/vision-badge-arrow-3.webp"
              alt="arrow"
              width={124}
              height={78}
              className="vision-badge-arrow-3"
            />
          </motion.div>
          <motion.div variants={fadeOpacityVariant}>
            <Image
              src="/assets/images/webp/vision-badge-arrow-4.webp"
              alt="arrow"
              width={217}
              height={68}
              className="vision-badge-arrow-4"
            />
          </motion.div>

          {/* Dots */}
          <motion.div
            variants={fadeOpacityVariant}
            className="vision-dots-wrapper"
          >
            <Image
              src="/assets/images/webp/our-vision-dots.webp"
              alt="dots"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
