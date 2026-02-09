import React from "react";
import FeatureCard from "../common/FeatureCard";
import { SecureIcon, ReliableIcon, InnovativeIcon } from "../common/Icons";

export default function Features() {
  return (
    <div className="section-x-gap features ">
      <div className="features-grid ">
        <FeatureCard
          icon={<SecureIcon />}
          title="Infrastructure Architecture"
          description="We build scalable, secure, and high-performance backend systems and digital foundations engineered for complex products and demanding operational environments."
          link="#contact"
          size="large"
          bgImage="/assets/images/webp/secure-bg.webp"
          overlayProps={{
            backgroundPosition: "bottom -230px right -180px",
            width: "100%",
            height: "100%",
          }}
        />
        <FeatureCard
          icon={<ReliableIcon />}
          title="Intelligent Systems"
          description="We implement data-driven, autonomous, and adaptive systems that improve decision-making and operational performance across every layer of your platform."
          link="#contact"
          size="small"
          bgImage="/assets/images/webp/reliable-bg.webp"
          overlayProps={{
            backgroundPosition: "bottom -25px right -40px",
            backgroundSize: "230px 220px",
            width: "100%",
            height: "100%",
          }}
        />
        <FeatureCard
          icon={<InnovativeIcon />}
          title="Strategic Advisory"
          description="We guide founders and organizations in structuring, launching, and scaling technically complex platforms with clarity, precision, and long-term viability."
          link="#contact"
          size="small"
          bgImage="/assets/images/webp/innovative-bg.webp"
          overlayProps={{
            backgroundPosition: "bottom -210px right -220px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
