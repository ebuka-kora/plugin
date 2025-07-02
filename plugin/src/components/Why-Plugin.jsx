"use client";

import { motion } from "framer-motion";

export default function WhyPlugin() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__feed block__bg block__bg--light block__feed--list">
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
                    Why,
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    Plugin?
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    style={{
                      display: "inline-block",
                      color: " #008080",
                      borderBottom: "4px solid #008080",
                      paddingBottom: 2,
                    }}
                  >
                    Trust Builders
                  </motion.span>
                </motion.h2>
                <p>
                  Why should you choose Plugin? Because we provide you with...
                </p>
                <div className="block-buttons"></div>
              </div>
            </div>
            <div className="row">
              <div className="block__feed__feed column column-m-12">
                <div className="featured-work__list">
                  {/* Item 1 */}
                  <div className="featured-work__list__item">
                    <a href="#">
                      <div className="featured-work__list__item__content">
                        <div className="work-item__left">
                          <motion.h2
                            style={{
                              color: "#fff",
                              textAlign: "left",
                              fontWeight: 900,
                              fontSize: "3.5rem",
                              lineHeight: 1.1,
                              marginBottom: "1.5rem",
                            }}
                          >
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                                Multi
                            </motion.span>
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0.2 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Currency{" "}
                            </motion.span>
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0.4 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Payments
                            </motion.span>
                          </motion.h2>
                        </div>
                        <div className="work-item__right">
                          <picture
                            loading="lazy"
                            decoding="async"
                            className="attachment-large size-large"
                          >
                            <source
                              type="image/webp"
                              srcSet="/1111.png"
                              sizes="auto, (max-width: 639px) 100vw, 639px"
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              width="639"
                              height="350"
                              src="/1111.png"
                              alt=""
                              srcSet="/1111.png"
                              sizes="auto, (max-width: 639px) 100vw, 639px"
                              style={{ visibility: "visible" }}
                            />
                            <span
                              style={{ fontWeight: "normal", display: "block" }}
                            >
                              Pay with card, wallet, or crypto (
                              VISA,BTC,USDT,QDX )
                            </span>
                          </picture>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* Item 2 */}
                  <div className="featured-work__list__item">
                    <a href="#">
                      <div className="featured-work__list__item__content">
                        <div className="work-item__left">
                          <motion.h2
                            style={{
                              color: "#fff",
                              textAlign: "left",
                              fontWeight: 900,
                              fontSize: "3.5rem",
                              lineHeight: 1.1,
                              marginBottom: "1.5rem",
                            }}
                          >
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Escrow
                            </motion.span>
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0.2 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Protection
                            </motion.span>
                          </motion.h2>
                        </div>
                        <div className="work-item__right">
                          <picture
                            loading="lazy"
                            decoding="async"
                            className="attachment-large size-large"
                          >
                            <source
                              type="image/webp"
                              srcSet="/1112.webp"
                              sizes="auto, (max-width: 639px) 100vw, 639px"
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              width="639"
                              height="350"
                              src="/1112.webp"
                              alt=""
                              srcSet="/1112.webp"
                              sizes="auto, (max-width: 639px) 100vw, 639px"
                              style={{ visibility: "visible" }}
                            />
                            <span
                              style={{ fontWeight: "normal", display: "block" }}
                            >
                              Funds are held securely until you confirm
                              satisfaction
                            </span>
                          </picture>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* Item 3 */}
                  <div className="featured-work__list__item">
                    <a href="#">
                      <div className="featured-work__list__item__content">
                        <div className="work-item__left">
                          <motion.h2
                            style={{
                              color: "#fff",
                              textAlign: "left",
                              fontWeight: 900,
                              fontSize: "3.5rem",
                              lineHeight: 1.1,
                              marginBottom: "1.5rem",
                            }}
                          >
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Verified
                            </motion.span>
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0.2 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Vendors
                            </motion.span>
                          </motion.h2>
                        </div>
                        <div className="work-item__right">
                          <picture
                            loading="lazy"
                            decoding="async"
                            className="attachment-large size-large"
                          >
                            <source
                              type="image/webp"
                              srcSet="/1.jpg"
                              sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              width="1200"
                              height="670"
                              src="/1.jpg"
                              alt=""
                              srcSet="/1.jpg"
                              sizes="auto, (max-width: 1200px) 100vw, 1200px"
                              style={{ visibility: "visible" }}
                            />
                            <span
                              style={{ fontWeight: "normal", display: "block" }}
                            >
                              Every provider is community vetted, rated, and
                              reviewed
                            </span>
                          </picture>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* Item 4 */}
                  <div className="featured-work__list__item">
                    <a href="#">
                      <div className="featured-work__list__item__content">
                        <div className="work-item__left">
                          <motion.h2
                            style={{
                              color: "#fff",
                              textAlign: "left",
                              fontWeight: 900,
                              fontSize: "3.5rem",
                              lineHeight: 1.1,
                              marginBottom: "1.5rem",
                            }}
                          >
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Smart
                            </motion.span>
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0.2 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Matching
                            </motion.span>
                          </motion.h2>
                        </div>
                        <div className="work-item__right">
                          <picture
                            loading="lazy"
                            decoding="async"
                            className="attachment-large size-large"
                          >
                            <source
                              type="image/webp"
                              srcSet="/1113.webp"
                              sizes="auto, (max-width: 1024px) 100vw, 1024px"
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              width="1024"
                              height="570"
                              src="/1113.webp"
                              alt=""
                              srcSet="/1113.webp"
                              sizes="auto, (max-width: 1024px) 100vw, 1024px"
                              style={{ visibility: "visible" }}
                            />
                            <span
                              style={{ fontWeight: "normal", display: "block" }}
                            >
                              Get instant offers from the best available talent
                              near you
                            </span>
                          </picture>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* Item 5 */}
                  <div className="featured-work__list__item">
                    <a href="#">
                      <div className="featured-work__list__item__content">
                        <div className="work-item__left">
                          <motion.h2
                            style={{
                              color: "#fff",
                              textAlign: "left",
                              fontWeight: 900,
                              fontSize: "3.5rem",
                              lineHeight: 1.1,
                              marginBottom: "1.5rem",
                            }}
                          >
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              USSD +
                            </motion.span>
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0.2 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Offline
                            </motion.span>
                            <motion.span
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.8 }}
                              transition={{ duration: 1.2, delay: 0.4 }}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              Access
                            </motion.span>
                          </motion.h2>
                        </div>
                        <div className="work-item__right">
                          <picture
                            loading="lazy"
                            decoding="async"
                            className="attachment-large size-large"
                          >
                            <source
                              type="image/webp"
                              srcSet="/1115.png"
                              sizes="auto, (max-width: 1024px) 100vw, 1024px"
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="335"
                              src="/1115.png"
                              alt=""
                              srcSet="/1115.png"
                              sizes="auto, (max-width: 1024px) 100vw, 1024px"
                              style={{ visibility: "visible" }}
                            />
                            <span
                              style={{
                                fontWeight: "normal",
                                display: "block",
                                justifyContent: "center",
                              }}
                            >
                              Not everyone has data? We've got that covered
                            </span>
                          </picture>
                        </div>
                      </div>
                    </a>
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
