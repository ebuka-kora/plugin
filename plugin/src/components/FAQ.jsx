"use client";

import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__stacking-cards block__bg block__bg--dark">
          <div className="container">
            <div className="row row--center">
              <div className="block__intro column column-m-12 column-t-10">
                <motion.h2
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: 900,
                    fontSize: "4.5rem",
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                  }}
                >
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    Frequently
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    Asked
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    Questions
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    style={{ display: "inline-block", color: "#008080", borderBottom: "4px solid #008080", paddingBottom: 2 }}
                  >
                    FAQ
                  </motion.span>
                </motion.h2>
                <p>
                  Here are some of the most common questions we get asked.
                  <br />
                  If you can't find the answer you're looking for,
                  <br />
                  please{" "}
                  <span
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#e4a425",
                    }}
                  >
                    contact us.
                  </span>
                </p>
              </div>
            </div>
            <div className="row row--center">
              <div className="column column-m-12">
                <div className="block__stacking-cards__content">
                  {/* Card 1 */}
                  <div className="stacking-card">
                    <div className="stacking-card__heading">
                      <div className="card-image">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="48"
                          height="47"
                          src="/start-up.svg"
                          className="attachment-full size-full"
                          alt=""
                          style={{ visibility: "visible" }}
                        />
                      </div>
                      <h3 style={{ color: "black" }}>
                        When is Plugin launching?
                      </h3>
                    </div>
                    <div className="stacking-card__content">
                      <h4
                        style={{
                          color: "black",
                          paddingTop: 160,
                          paddingBottom: 0,
                        }}
                      >
                        Launching August 2025. Join the waitlist for first
                        access—and plug into the future. 🔌🌍🚀
                      </h4>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="stacking-card">
                    <div className="stacking-card__heading">
                      <div className="card-image">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="64"
                          height="64"
                          src="/companies.svg"
                          className="attachment-full size-full"
                          alt=""
                          style={{ visibility: "visible" }}
                        />
                      </div>
                      <h3 style={{ color: "black" }}>
                        What can I use Plugin for?
                      </h3>
                    </div>
                    <div className="stacking-card__content">
                      <h4
                        style={{
                          color: "black",
                          paddingTop: 160,
                          paddingBottom: 0,
                        }}
                      >
                        To find and pay trusted service providers across 20+
                        verified categories.
                      </h4>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="stacking-card">
                    <div className="stacking-card__heading">
                      <div className="card-image">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="52"
                          height="57"
                          src="/agencies.svg"
                          className="attachment-full size-full"
                          alt=""
                          style={{ visibility: "visible" }}
                        />
                      </div>
                      <h3 style={{ color: "black" }}>
                        Is it a secure platform to use?
                      </h3>
                    </div>
                    <div className="stacking-card__content">
                      <h4
                        style={{
                          color: "black",
                          paddingTop: 160,
                          paddingBottom: 0,
                        }}
                      >
                        100%. Plugin uses wallet escrow and vendor verification
                        to protect you.
                      </h4>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className="stacking-card">
                    <div className="stacking-card__heading">
                      <div className="card-image">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="52"
                          height="57"
                          src="/web-design.svg"
                          className="attachment-full size-full"
                          alt=""
                          style={{ visibility: "visible" }}
                        />
                      </div>
                      <h3 style={{ color: "black" }}>Can I pay with crypto?</h3>
                    </div>
                    <div className="stacking-card__content">
                      <h4
                        style={{
                          color: "black",
                          paddingTop: 160,
                          paddingBottom: 0,
                        }}
                      >
                        Yes! Plugin supports USDT, BTC, QDX and more via Payaza
                        and Quidax.
                      </h4>
                    </div>
                  </div>
                  {/* Card 5 */}
                  <div className="stacking-card">
                    <div className="stacking-card__heading">
                      <div className="card-image">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="52"
                          height="57"
                          src="/ux.svg"
                          className="attachment-full size-full"
                          alt=""
                          style={{ visibility: "visible" }}
                        />
                      </div>
                      <h3 style={{ color: "black" }}>What's Plugin4Good?</h3>
                    </div>
                    <div className="stacking-card__content">
                      <h4
                        style={{
                          color: "black",
                          paddingTop: 160,
                          paddingBottom: 0,
                        }}
                      >
                        Our initiative to train, empower, and uplift African
                        communities through skill-building and job access.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
