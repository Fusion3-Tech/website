import Link from "next/link";
import Image from "next/image"; // ⬅️ add this
import BackToTop from "./BackToTop";
import { footerContact, footerSitemap, footerSocials } from "./Helper";
// import { FooterLogo } from "./Icons"; // ⬅️ no longer needed here (keep it if used elsewhere)

const Footer = () => {
  return (
    <footer className="footer section-x-gap">
      <div className="footer-container">
        <div className="footer-data-wrapper">
          <Link href="/" className="footer-logo">
            <Image
              src="/Fusion3logo.png" // put the file in /public/Fusion3logo.png
              alt="Fusion3"
              width={436} // tweak to your desired size
              height={108}
              className="footer-logo-icon"
              priority
            />
          </Link>

          <div className="footer-items-wrapper">
            <div className="footer-section">
              <h3 className="font-medium text-5xl text-white leading-130">
                Sitemap
              </h3>
              <ul>
                {footerSitemap.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="font-medium text-white-60 leading-150 text-2xl"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="footer-section">
              <h3 className="font-medium text-5xl text-white leading-130">
                Socials
              </h3>
              <ul>
                {footerSocials.map((item, index) => (
                  <li key={index}>
                    <Link
                      target="_blank"
                      className="font-medium text-white-60 leading-150 text-2xl"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="font-medium text-5xl text-white leading-130">
                Contact us
              </h3>
              <ul>
                {footerContact.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="font-medium text-white-60 leading-150 text-2xl"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-wrapper">
          <BackToTop />
          <span className="font-medium text-xl leading-130 text-white">
            Copyright © Fusion3 <span>{new Date().getFullYear()}</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
