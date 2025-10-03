import React from "react";
import FeatureCard from "../common/FeatureCard";
import { InnovativeIcon, ReliableIcon, SecureIcon } from "../common/Icons";

export default function Features() {
  return (
    <div className="section-x-gap features ">
      <div className="features-grid ">
        <FeatureCard
          icon={<SecureIcon />}
          title="Secure"
          description="Fusion3 develops projects on the Polkadot ecosystem using robust, secure, and future-proof blockchain infrastructures."
          link="#"
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
          title="Reliable"
          description="Our processes ensure consistent results, from concept to deployment, for every project we manage."
          link="#"
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
          title="Innovative"
          description="We leverage the latest technologies, including the upcoming JAM upgrade, to create scalable and cutting-edge solutions."
          link="#"
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
