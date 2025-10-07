import Image from "next/image";
import { Github } from "../common/Icons";
import Paragraph from "../common/Paragraph";

const PortfolioCard = ({ item }) => {
  return (
    <article className="portfolio-card mx-auto">
      <div className="portfolio-card-content-wrapper">
        <div className="portfolio-card-content">
          <Image
            src={item.icon}
            alt="logo"
            width={129}
            height={38}
            className="portfolio-card-icon"
          />
          <Paragraph className="portfolio-card-para" variant="small">
     {item.desc}
          </Paragraph>
          <div className="portfolio-card-btn-wrapper">
            <button onClick={() => window.open(item.appUrl, "_blank")} className="portfolio-card-app-btn text-black font-semibold font-funnel text-xl leading-150">
              Open App
            </button>
            <button onClick={() => window.open(item.githubUrl, "_blank")} className="portfolio-card-github-btn text-white font-semibold font-funnel text-xl leading-150">
              <Github className="github-icon" /> Github
            </button>
          </div>
        </div>
      </div>
      <Image
        src={item.image}
        alt="detail-image"
        width={473}
        height={290}
        className="portfolio-card-detail-image"
      />
    </article>
  );
};

export default PortfolioCard;
