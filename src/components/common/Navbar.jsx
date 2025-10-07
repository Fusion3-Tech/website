"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommonButton from "./CommonButton";
import { navLinks } from "./Helper";
import { Cross, Logo, Menu } from "./Icons";
import { motion } from "framer-motion"; // <-- Import framer motion

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle body overflow when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinksVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const logoButtonsVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-spacing">
          <div className="nav-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={logoButtonsVariant}
            >
              <Link href="/" className="logo">
                <Logo />
                <span className="-tracking-64 text-white text-6xl font-normal">
                  fusion3
                </span>
              </Link>
            </motion.div>
            <nav className="desktop-nav">
              <ul className="nav-list">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={navLinksVariant}
                  >
                    <Link
                      href={link.href}
                      className="nav-link text-white-60 text-lg font-normal leading-100"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="cta-button-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              <CommonButton variant="dark" href="#portfolio">
                View projects
              </CommonButton>
            </motion.div>

            <motion.div
              className="nav-menu-lg"
              initial="hidden"
              animate="visible"
              variants={logoButtonsVariant}
            >
              <div className="nav-buttons">
                <Link
                  className="nav-contact text-md font-normal text-white-60 -tracking-15 leading-100"
                  href="#get-in-touch"
                >
                  Contact us
                </Link>
                <div className="cta-button-max-sm">
                  <CommonButton variant="dark" href="#portfolio">
                    View projects
                  </CommonButton>
                </div>
              </div>
              <button
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Open menu"
              >
                <Menu className="menu-icon" />
              </button>
            </motion.div>

            {/* Hamburger Menu */}
          </div>
        </div>
      </header>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="cross" onClick={toggleMenu} aria-label="Close menu">
          <Cross className="cross-icon" />
        </button>
        <motion.nav
          className="mobile-nav"
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.25 },
            },
            hidden: {},
          }}
        >
          <div>
            <ul className="mobile-nav-list">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    className="mobile-nav-link text-white font-normal leading-100"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <Link
                  href="#get-in-touch"
                  className="mobile-nav-link text-white font-normal leading-100"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </motion.li>
            </ul>
            <motion.div
              className="mobile-cta"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <CommonButton variant="dark" href="#portfolio">
                View projects
              </CommonButton>
            </motion.div>
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
