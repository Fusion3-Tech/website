"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Badge from "../common/Badge";
import Heading from "../common/Heading";
import { journeyData } from "../common/Helper";
import JourneyCard from "./JourneyCard";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("Discovery");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey section-x-gap">
      <div className="journey-container mx-auto">
        {/* Badge fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Badge>How We Work</Badge>
        </motion.div>

        {/* Heading fade-in with small delay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Heading
            className="journey-heading"
            headingVariant="sub"
            variant="small"
            blueText="Journey"
            whiteSecondText="Behind Every Project"
          />
        </motion.div>

        <div className="journey-wrapper">
          <div className="journey-tabs">
            {journeyData.map((item) => (
              <button
                key={item.section}
                className={`tab-btn font-medium text-5xl leading-130 ${
                  activeTab === item.section ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab(item.section);
                  sectionRefs.current[item.section]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {item.section}
              </button>
            ))}
          </div>

          <div className="journey-content">
            {journeyData.map((card, index) => (
              <div
                key={card.section}
                id={card.section}
                ref={(el) => (sectionRefs.current[card.section] = el)}
              >
                <JourneyCard
                  index={index}
                  card={card}
                  active={card.section === activeTab}
                  activeTab={activeTab}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
