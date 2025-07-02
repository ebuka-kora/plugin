"use client";

import { motion } from "framer-motion";

export default function Foundertory() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__media-text block__bg block__bg--dark block__media-text--flipped">
          <div className="container">
            <div className="row row--justified row--top">
              <div className="block__media-text__media column column-m-12 column-t-6">
                <picture
                  loading="lazy"
                  decoding="async"
                  className="attachment-large size-large"
                >
                  <source
                    type="image/webp"
                    srcSet="/lax(2).png"
                    sizes="auto, (max-width: 648px) 100vw, 648px"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    width="648"
                    height="707"
                    src="/lax(2).png"
                    alt=""
                    srcSet="/lax(2).png"
                    sizes="auto, (max-width: 648px) 100vw, 648px"
                    style={{ visibility: "visible" }}
                  />
                </picture>
              </div>
              <div className="block__media-text__content column column-m-12 column-t-6">
                <motion.h2
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
                    Founder's
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    style={{
                      display: "inline-block",
                      color: "#008080",
                      borderBottom: "4px solid #008080",
                      paddingBottom: 2,
                    }}
                  >
                    Story
                  </motion.span>
                </motion.h2>
                <p>
                  Plugin started with a big dream to create a world where
                  everyday people can find meaningful work, earn fairly, and get
                  paid on time, no matter where they live or what tools they
                  have. This is more than a platform; it's a movement to unlock
                  Africa's potential, one service at a time. Here's why working
                  with us could be a great fit:
                </p>
                <ul className="block-list">
                  {[
                    {
                      img: "/15-years-experience.svg",
                      title: "15 years of freelance experience",
                      desc: "we create user-centric designs that feel effortless to navigate leaving a lasting impression.",
                    },
                    {
                      img: "/200-sites-launched.svg",
                      title: "Purpose-Driven Work",
                      desc: `Empowering real people through meaningful opportunities I believe work should be more than a transaction—it should be transformational. Every task, job, or gig represents someone's ambition and drive.`,
                    },
                    {
                      img: "/client-shapes.svg",
                      title: "Community & Connection",
                      desc: `Building trust one service at a time At Plugin, we focus on local talent and grassroots growth. Trust isn't built overnight, it's earned through reliable service, fairness, and shared experience.`,
                    },
                    {
                      img: "/design-develop.svg",
                      title: "Fair Pay & Timely Payments",
                      desc: `Championing dignity in earnings Getting paid on time shouldn't be a luxury. We're changing that by making fair compensation a standard, not a perk.`,
                    },
                  ].map((item, idx) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7, delay: idx * 0.2 }}
                      style={{ listStyle: "none" }}
                    >
                      <div>
                        <img
                          src={item.img}
                          alt=""
                          width="89"
                          height="94"
                          style={{ visibility: "visible" }}
                        />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
