"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Plugin4Good() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__testimonials block__bg block__bg--light">
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
                    Plugin4Good
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    Social Impact,
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    Powered by
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    style={{
                      display: "inline-block",
                      color: "#008080",
                      borderBottom: "4px solid #008080",
                      paddingBottom: 2,
                    }}
                  >
                    Community 💛
                  </motion.span>
                </motion.h2>
                <h3>This isn't just business. it's community empowerment.</h3>
                <p style={{ fontWeight: "bold" }}>
                  Plugin4Good is our commitment to social impact. We empower
                  underserved communities with practical, in demand skills,
                  connect them to real job opportunities, and support economic
                  inclusion.
                  <br />
                  We're building a new generation of skilled Africans—tailors,
                  barbers, bricklayers, coders, chefs, and more—ready to thrive
                  in the digital economy.
                </p>
              </div>
            </div>
          </div>
          <div className="centered-slider-group">
            <Marquee gradient={false} speed={30} pauseOnHover>
              <div
                className="centered-slider-slide__inner"
                style={{
                  minWidth: 350,
                  margin: "0 2vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="slide__video-wrapper">
                  <img
                    src="/11q.jpeg"
                    width="350"
                    height="100"
                    alt="Testimonial"
                  />
                </div>
                <img
                  src="/stars.svg"
                  width="165"
                  height="22"
                  alt="Testimonial Stars"
                />
                <div className="slide__author">
                  <span
                    className="slide__author-name"
                    style={{ fontWeight: "bolder" }}
                  >
                    300+ trained in tech, trades & business
                  </span>
                  <p
                    className="slide__description"
                    style={{ fontWeight: "bolder" }}
                  >
                    Trained 300+ across Africa in tech, trades, and
                    business—with real skills for real growth: 💻 Tech: From web
                    to digital marketing, we fuel digital careers. 🛠️ Trades:
                    Skilled hands like tailors and electricians, leveled up. 💼
                    Business: Freelancers turned founders, side hustles to
                    brands.
                  </p>
                </div>
              </div>
              <div
                className="centered-slider-slide__inner"
                style={{
                  minWidth: 350,
                  margin: "0 2vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="slide__video-wrapper">
                  <img
                    src="/11w.png"
                    width="370"
                    height="100"
                    alt="Testimonial"
                  />
                </div>
                <img
                  src="/stars.svg"
                  width="165"
                  height="22"
                  alt="Testimonial Stars"
                />
                <div className="slide__author">
                  <span
                    className="slide__author-name"
                    style={{ fontWeight: "bolder" }}
                  >
                    100+ entrepreneurs empowered
                  </span>
                  <p className="slide__description">
                    we've supported over 100 entrepreneurs in turning bold ideas
                    into real income. From side hustles to full-fledged
                    ventures, we provide the tools, training, and guidance to
                    help them build sustainable businesses and grow with
                    confidence. These entrepreneurs aren't just making
                    moves—they're creating ripple effects in their communities,
                    and we're proud to be part of their journey.
                  </p>
                </div>
              </div>
              <div
                className="centered-slider-slide__inner"
                style={{
                  minWidth: 350,
                  margin: "0 2vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="slide__video-wrapper">
                  <img
                    src="/1qw.webp"
                    width="340"
                    height="100"
                    alt="Testimonial"
                  />
                </div>
                <img
                  src="/stars.svg"
                  width="165"
                  height="22"
                  alt="Testimonial Stars"
                />
                <div className="slide__author">
                  <span
                    className="slide__author-name"
                    style={{ fontWeight: "bolder" }}
                  >
                    20 scholarships awarded in rural communities
                  </span>
                  <p className="slide__description">
                    We believe talent lives everywhere—even in the most remote
                    places. That's why we've awarded 20 scholarships to
                    individuals in underserved communities, providing access to
                    training, tools, and opportunities that empower them to
                    rise, contribute, and lead. These scholarships aren't just
                    gifts—they're investments in future changemakers.
                  </p>
                </div>
              </div>
              <div
                className="centered-slider-slide__inner"
                style={{
                  minWidth: 350,
                  margin: "0 2vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="slide__video-wrapper">
                  <img
                    src="/11e.jpeg"
                    width="350"
                    height="100"
                    alt="Testimonial"
                  />
                </div>
                <img
                  src="/stars.svg"
                  width="165"
                  height="22"
                  alt="Testimonial Stars"
                />
                <div className="slide__author">
                  <span
                    className="slide__author-name"
                    style={{ fontWeight: "bolder" }}
                  >
                    80+ families supported with food & aid
                  </span>
                  <p className="slide__description">
                    We believe no one should be left behind—especially in times
                    of need. Through our outreach initiatives, we've provided
                    food, essentials, and direct aid to over 80 families,
                    bringing relief, dignity, and hope where it matters most.
                    This isn't charity—it's community in action. 💛🍲🌍
                  </p>
                </div>
              </div>
              <div
                className="centered-slider-slide__inner"
                style={{
                  minWidth: 350,
                  margin: "0 2vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="slide__video-wrapper">
                  <img
                    src="/1q11.jpg"
                    width="350"
                    height="100"
                    alt="Testimonial"
                  />
                </div>
                <img
                  src="/stars.svg"
                  width="165"
                  height="22"
                  alt="Testimonial Stars"
                />
                <div className="slide__author">
                  <span
                    className="slide__author-name"
                    style={{ fontWeight: "bolder" }}
                  >
                    500+ Skilled Africans—and counting
                  </span>
                  <p className="slide__description">
                    We're proud to have supported and connected over 500
                    talented individuals across the continent with the training,
                    tools, and opportunities to thrive. From coders to
                    creatives, artisans to entrepreneurs, this growing network
                    represents the heartbeat of Africa's future—skilled, ready,
                    and unstoppable.
                  </p>
                </div>
              </div>
            </Marquee>
          </div>
        </section>
      </main>
    </div>
  );
}
