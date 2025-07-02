"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [open, setOpen] = useState(null); // for dropdowns if needed

  // Helper for dynamic class
  const getNavItemClass = (side, idx) => {
    let base = "nav-item nav-item--default";
    if (open === `${side}-${idx}`) base += " show-dropdown";
    return base;
  };

  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <div className="skip-links-container">
        <a href="#content" className="skip-link">
          Skip to Content
        </a>
        <a
          href="#accessibility-modal"
          className="skip-link"
          id="skipToAccessibility"
        >
          Skip to Accessibility Options
        </a>
        <a href="#footer" className="skip-link">
          Skip to Footer
        </a>
      </div>
      <header
        className={`header header-sticky${isNavOpen ? " offcanvas-open" : ""}`}
        role="banner"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          opacity: 1,
          transform: "translate(0px, 0px)",
        }}
      >
        <div className="column column-m-12-nest">
          <div className="row row--middle row--justified">
            <a
              href="/"
              className="nav-link"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="/Logo Yellow.svg"
                alt="Logo"
                style={{ height: "40px" }}
              />
            </a>
            {/* Left Nav */}
            <nav
              id="navbar-left"
              className="navbar navbar--left nav-style--narrow"
              role="navigation"
              aria-label="Left Navigation"
            >
              <ul className="navbar-nav navbar-nav--left">
                <li className={getNavItemClass("left", 2)}>
                  <a
                    href="/"
                    className="nav-link"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderBottom = "4px solid #008080";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderBottom =
                        "4px solid transparent";
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className={getNavItemClass("left", 2)}>
                  <a
                    href="#"
                    className="nav-link"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderBottom = "4px solid #008080";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderBottom =
                        "4px solid transparent";
                    }}
                  >
                    Service
                  </a>
                </li>
                <li className={getNavItemClass("left", 3)}>
                  <a
                    href="/about-us"
                    className="nav-link"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderBottom = "4px solid #008080";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderBottom =
                        "4px solid transparent";
                    }}
                  >
                    About Us
                  </a>
                </li>
              </ul>
              <div className="nav-glowing-line nav-glowing-line--left"></div>
            </nav>
            {/* Right Nav */}
            <nav
              id="navbar-right"
              className="navbar navbar--right nav-style--narrow"
              role="navigation"
              aria-label="Right Navigation"
            >
              <ul className="navbar-nav navbar-nav--right">
                <li className={getNavItemClass("right", 0)}>
                  <a
                    style={{ textDecoration: "underline" }}
                    href="/contact-us"
                    className="nav-link"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderBottom = "4px solid #008080";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderBottom =
                        "4px solid transparent";
                    }}
                  >
                    Contact us
                  </a>
                </li>
                <li
                  className={getNavItemClass("right", 1)}
                  style={{ position: "relative" }}
                >
                  <span
                    className="nav-link"
                    style={{
                      cursor: "not-allowed",
                      color: "#aaa",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const tooltip = e.currentTarget.querySelector(
                        ".coming-soon-tooltip"
                      );
                      if (tooltip) tooltip.style.opacity = 1;
                    }}
                    onMouseLeave={(e) => {
                      const tooltip = e.currentTarget.querySelector(
                        ".coming-soon-tooltip"
                      );
                      if (tooltip) tooltip.style.opacity = 0;
                    }}
                  >
                    Plugin4Good
                    <div
                      className="coming-soon-tooltip"
                      style={{
                        opacity: 0,
                        transition: "opacity 0.2s",
                        position: "absolute",
                        top: "120%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#222",
                        color: "#008080",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        fontSize: "1.95rem",
                        pointerEvents: "none",
                        zIndex: 10,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Coming Soon
                    </div>
                  </span>
                </li>
                <li
                  className={
                    "nav-item nav-item--cta" +
                    (open === "right-2" ? " show-dropdown" : "")
                  }
                >
                  <a
                    href="#"
                    className="nav-link"
                    style={{ position: "relative", overflow: "hidden" }}
                    onMouseEnter={(e) => {
                      const glow = e.currentTarget.querySelector(".glow-inner");
                      if (glow) glow.style.opacity = 0.7;
                      const border =
                        e.currentTarget.querySelector(".glow-border");
                      if (border) border.style.opacity = 1;
                      e.currentTarget.style.borderBottom = "4px solid #008080";
                    }}
                    onMouseLeave={(e) => {
                      const glow = e.currentTarget.querySelector(".glow-inner");
                      if (glow) glow.style.opacity = 0;
                      const border =
                        e.currentTarget.querySelector(".glow-border");
                      if (border) border.style.opacity = 0;
                      e.currentTarget.style.borderBottom =
                        "4px solid transparent";
                    }}
                  >
                    JOIN THE WAITLIST
                    <div
                      className="glow-inner"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        pointerEvents: "none",
                        zIndex: 0,
                        opacity: 0,
                        transition: "opacity 0.3s",
                        background:
                          "radial-gradient(150% 150% at 50% 50%, rgba(0, 255, 144, 0.7) 0%, rgba(0, 255, 144, 0.5) 20%, rgba(0, 255, 144, 0.3) 40%, rgba(0, 255, 144, 0.1) 60%, transparent 80%)",
                      }}
                    ></div>
                    <div
                      className="glow-border"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        pointerEvents: "none",
                        zIndex: 1,
                        opacity: 0,
                        transition: "opacity 0.3s",
                        boxSizing: "border-box",
                        boxShadow:
                          "rgba(0, 255, 144, 0.6) 0px 0px 0px 1px inset",
                        maskImage:
                          "radial-gradient(circle at 50% 50%, white 40%, transparent 80%)",
                        maskRepeat: "no-repeat",
                        maskSize: "100% 100%",
                      }}
                    ></div>
                  </a>
                </li>
              </ul>
              <div className="nav-glowing-line nav-glowing-line--right"></div>
            </nav>
            {/* Hamburger Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle navigation menu"
              className={"hamburger" + (isNavOpen ? " offcanvas-active" : "")}
            >
              <span className={isNavOpen ? "offcanvas-active" : ""}></span>
            </button>
            {/* Offcanvas Menu */}
            {isNavOpen && (
              <div className="offcanvas">
                <div className="container">
                  <div className="row">
                    <div className="column column-m-12">
                      <div className="offcanvas-section">
                        <ul className="navbar-nav navbar-nav--left">
                          <li className={getNavItemClass("left", 1)}>
                            <a
                              href="/"
                              className="nav-link"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid #008080";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid transparent";
                              }}
                            >
                              Home
                            </a>
                          </li>
                          <li className={getNavItemClass("left", 2)}>
                            <a
                              href="#"
                              className="nav-link"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid #008080";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid transparent";
                              }}
                            >
                              Service
                            </a>
                          </li>
                          <li className={getNavItemClass("left", 3)}>
                            <a
                              href="/about-us"
                              className="nav-link"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid #008080";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid transparent";
                              }}
                            >
                              About Us
                            </a>
                          </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav--right">
                          <li className={getNavItemClass("right", 3)}>
                            <a
                              href="/contact-us"
                              className="nav-link"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid #008080";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid transparent";
                              }}
                            >
                              Contact Us
                            </a>
                          </li>
                          <li className={getNavItemClass("right", 1)}>
                            <a
                              href="#"
                              className="nav-link"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid #008080";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom =
                                  "4px solid transparent";
                              }}
                            >
                              Plugin4Good
                            </a>
                          </li>
                          <li
                            className={
                              "nav-item nav-item--cta" +
                              (open === "right-2" ? " show-dropdown" : "")
                            }
                          >
                            <a
                              href="#"
                              className="nav-link"
                              style={{
                                position: "relative",
                                overflow: "hidden",
                              }}
                              onMouseEnter={(e) => {
                                const glow =
                                  e.currentTarget.querySelector(".glow-inner");
                                if (glow) glow.style.opacity = 0.3;
                                const border =
                                  e.currentTarget.querySelector(".glow-border");
                                if (border) border.style.opacity = 1;
                                e.currentTarget.style.borderBottom =
                                  "4px solid #008080";
                              }}
                              onMouseLeave={(e) => {
                                const glow =
                                  e.currentTarget.querySelector(".glow-inner");
                                if (glow) glow.style.opacity = 0;
                                const border =
                                  e.currentTarget.querySelector(".glow-border");
                                if (border) border.style.opacity = 0;
                                e.currentTarget.style.borderBottom =
                                  "4px solid transparent";
                              }}
                            >
                              JOIN THE WAITLIST
                              <div
                                className="glow-inner"
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  borderRadius: "inherit",
                                  pointerEvents: "none",
                                  zIndex: 0,
                                  opacity: 0,
                                  transition: "opacity 0.3s",
                                  background:
                                    "radial-gradient(150% 150% at 50% 50%, rgba(0, 255, 144, 0.7) 0%, rgba(0, 255, 144, 0.5) 20%, rgba(0, 255, 144, 0.3) 40%, rgba(0, 255, 144, 0.1) 60%, transparent 80%)",
                                }}
                              ></div>
                              <div
                                className="glow-border"
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  borderRadius: "inherit",
                                  pointerEvents: "none",
                                  zIndex: 1,
                                  opacity: 0,
                                  transition: "opacity 0.3s",
                                  boxSizing: "border-box",
                                  boxShadow:
                                    "rgba(0, 255, 144, 0.6) 0px 0px 0px 1px inset",
                                  maskImage:
                                    "radial-gradient(circle at 50% 50%, white 40%, transparent 80%)",
                                  maskRepeat: "no-repeat",
                                  maskSize: "100% 100%",
                                }}
                              ></div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
