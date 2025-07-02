"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Partnerlogo() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__logos block__bg block__bg--dark">
          <div className="container">
            <div className="row">
              <div className="block__intro column column-m-12">
                <motion.h2
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: 900,
                    fontSize: "4.5rem",
                    lineHeight: 1.1,
                    marginBottom: "0.5rem",
                  }}
                >
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    A
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    trusted
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    freelance
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    web
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    style={{
                      display: "inline-block",
                      color: "#008080",
                      borderBottom: "4px solid #008080",
                      paddingBottom: 2,
                    }}
                  >
                    designer
                  </motion.span>
                </motion.h2>
                <p style={{ marginBottom: "1rem" }}>
                  I've had the pleasure of working with some wicked clients over
                  the years. Want to be one of them? Get in touch
                </p>
              </div>
            </div>
          </div>
          <section className="section-resource">
            <div
              data-marquee-duplicate="2"
              data-marquee-scroll-direction-target=""
              data-marquee-direction="left"
              data-marquee-status="normal"
              data-marquee-speed="15"
              data-marquee-scroll-speed="10"
              className="marquee-advanced"
            >
              <div
                data-marquee-scroll-target=""
                className="marquee-advanced__scroll"
                style={{
                  marginLeft: "-10%",
                  width: "120%",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(10vw, 0px)",
                }}
              >
                <Marquee gradient={false} speed={100}>
                  <div className="marquee-advanced__item-width">
                    <img src="/meks4.png" width="358" height="115" alt="" />
                  </div>
                  <div className="marquee-advanced__item-width">
                    <img src="/dip3.jpg" width="297" height="142" alt="" />
                  </div>
                  <div className="marquee-advanced__item-width">
                    <img src="/11q11q.png" width="288" height="61" alt="" />
                  </div>
                  <div className="marquee-advanced__item-width">
                    <img src="/chai5.avif" width="114" height="50" alt="" />
                  </div>
                  <div className="marquee-advanced__item-width">
                    <img src="/seth6.avif" width="200" height="200" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
