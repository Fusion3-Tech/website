import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Newsletter from "@/components/common/Newsletter";
import Features from "@/components/homepage/Features";
import Founders from "@/components/homepage/Founders";
import Hero from "@/components/homepage/Hero";
import Journey from "@/components/homepage/Journey";
import Mission from "@/components/homepage/Mission";
import OurVision from "@/components/homepage/OurVision";
import TrustedBy from "@/components/homepage/TrustedBy";

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
        <div className="overlay-blur-bottom"></div>
      </div>
      <Features />
      <Mission />
      <Journey />
      <Founders />
      <Newsletter />
      <Footer />
    </main>
  );
}
