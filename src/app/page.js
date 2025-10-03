import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Newsletter from "@/components/common/Newsletter";
import Features from "@/components/homepage/Features";
import Founders from "@/components/homepage/Founders";
import Hero from "@/components/homepage/Hero";
import Journey from "@/components/homepage/Journey";
import Mission from "@/components/homepage/Mission";
import OurVision from "@/components/homepage/OurVision";
import Portfolio from "@/components/homepage/Portfolio";
import Reviews from "@/components/homepage/Reviews";
import TrustedBy from "@/components/homepage/TrustedBy";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="header-hero-wrapper relative">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-20">
        <TrustedBy />
        <div className="overlay-blur"></div>
        <OurVision />
      </div>
      <Mission />
      <Features />
      <Journey />
      <Portfolio />
      <Founders />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
}
