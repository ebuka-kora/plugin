"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__hero block__hero--home in-view">
          <div className="container">
            <div className="block__hero__bg__front"></div>
            <div className="row row--center">
              <div className="column column-m-12 column-t-8">
                <div className="block__hero__content">
                  <h1 aria-label="Freelance Web Designer">
                    <span className="split-word-wrap">
                      <motion.div
                        className="split-word"
                        aria-hidden="true"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0 }}
                        style={{
                          marginTop: "40vh",
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        Africa's
                        <span
                          style={{
                            display: "block",
                            height: "4px",
                            background:
                              "linear-gradient(90deg, #008080 60%, transparent 100%)",
                            borderRadius: "2px",
                            marginTop: "4px",
                            width: "100%",
                          }}
                        />
                      </motion.div>
                    </span>
                    <span className="split-word-wrap">
                      <motion.div
                        className="split-word"
                        aria-hidden="true"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        Trusted
                      </motion.div>
                    </span>
                    <span className="split-word-wrap">
                      <motion.div
                        className="split-word"
                        aria-hidden="true"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        Service
                      </motion.div>
                    </span>
                    <strong>
                      <span className="split-word-wrap">
                        <motion.div
                          className="split-word"
                          aria-hidden="true"
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.6 }}
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          Marketplace
                        </motion.div>
                      </span>
                    </strong>
                  </h1>
                  <p>
                    From barbers in Surulere to software engineers in Nairobi,
                    Plugin connects you to the people who get things
                    done—securely, instantly, and effortlessly.
                  </p>
                  <div className="block-buttons">
                    <a
                      className="button button--internal"
                      href="#"
                      style={{
                        marginTop: "10vh",
                        position: "relative",
                        overflow: "hidden",
                        paddingLeft: "5vh",
                        transition: "box-shadow 0.9s, border-bottom 0.9s",
                        borderBottom: "4px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        const glow =
                          e.currentTarget.querySelector(".glow-inner");
                        if (glow) glow.style.opacity = 0.7;
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block__hero__bg">
            <div className="block__hero__bg__front"></div>
            <div
              className="block__hero__bg__back"
              data-parallax="-0.1"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, -1.8534%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
        </section>
      </main>
    </div>
  );
}
