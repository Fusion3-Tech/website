import Link from "next/link";
import BackToTop from "./BackToTop";
import { footerContact, footerSitemap, footerSocials } from "./Helper";
import { FooterLogo } from "./Icons";

const Footer = () => {
  return (
    <footer className="footer section-x-gap">
      <div className="footer-container">
        <div className="footer-data-wrapper">
          <Link href="/" className="footer-logo">
            <FooterLogo className="footer-logo-icon" />
            <span className="footer-logo-text font-normal -tracking-64 text-10xl leading-104 text-primary">
              fusion3
            </span>
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
  );c
};

export default Footer;
