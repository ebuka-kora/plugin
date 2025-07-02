"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__media-text block__bg block__bg--dark block__media-text--flipped">
          <div className="container">
            <div className="row row--justified row--top">
              <div className="block__media-text__media column column-m-12 column-t-6">
                <picture
                  decoding="async"
                  className="attachment-large size-large"
                >
                  <source
                    type="image/webp"
                    srcSet="/1021.jpg"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                  <img
                    decoding="async"
                    width="1024"
                    height="681"
                    src="/1021.jpg"
                    alt=""
                    srcSet="/1021.jpg"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    style={{ visibility: "visible" }}
                  />
                </picture>
              </div>
              <div className="block__media-text__content column column-m-12 column-t-6">
                <h2
                  style={{
                    color: "#fff",
                    textAlign: "left",
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
                    How
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    It
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    style={{
                      display: "inline-block",
                      color: "#008080",
                      borderBottom: "4px solid #008080",
                      paddingBottom: 2,
                    }}
                  >
                    Works
                  </motion.span>
                </h2>
                <p style={{ color: "#fff" }}>
                  <strong>Step 1:</strong>Browse <strong>categories</strong> or
                  post your<strong> request</strong>
                  <br />
                  <br />
                  <strong> Step 2:</strong> Get matched with{" "}
                  <strong>verified</strong>
                  service providers
                  <br />
                  <br />
                  <strong>Step 3:</strong>Book, chat, and pay—via wallet,{" "}
                  <strong>card</strong> or
                  <strong>crypto</strong>
                  <br />
                  <br />
                  <strong>Step 4:</strong>
                  <strong>Rate</strong>,<strong>tip</strong>, and
                  <strong>earn rewards</strong> with every job
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
