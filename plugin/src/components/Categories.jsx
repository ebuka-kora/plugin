"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Categories() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__services block__bg block__bg--dark block__services--carousel">
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
                    Explore
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    style={{ display: "inline-block", marginRight: 8 }}
                  >
                    Service
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
                    Categories
                  </motion.span>
                </motion.h2>
                <p>
                  Over 20+ service categories—crafted for Africa's vibrant
                  workforce.
                </p>
                <br />
                <p>
                  Built to power Africa's unstoppable workforce. Celebrating
                  makers, fixers, coders, and creators turning skill into
                  progress and hustle into legacy.
                </p>
                <div className="block-buttons">
                  <a
                    className="button button--simple button--internal"
                    href="#"
                  >
                    Browse All 20 Categories →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="block__services__slider">
            <Marquee gradient={false} speed={90} pauseOnHover>
              <div
                className="service-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minWidth: 320,
                  margin: "0 2vw",
                }}
              >
                <div className="service-icon">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="34"
                    height="43"
                    src="/web-design.svg"
                    className="attachment-full size-full"
                    alt=""
                    style={{ visibility: "visible" }}
                  />
                </div>
                <div className="service-content">
                  <h3>Tech &amp; Digital Services</h3>
                  <p>
                    We deliver smart, scalable digital solutions, from code to
                    cloud, to power modern businesses.
                  </p>
                </div>
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
                    boxShadow: "rgba(0, 255, 144, 0.6) 0px 0px 0px 1px inset",
                    maskImage:
                      "radial-gradient(circle at 50% 50%, white 40%, transparent 80%)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                  }}
                ></div>
              </div>
              <div
                className="service-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minWidth: 320,
                  margin: "0 2vw",
                }}
              >
                <div className="service-icon">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="45"
                    height="44"
                    src="/development.svg"
                    className="attachment-full size-full"
                    alt=""
                    style={{ visibility: "visible" }}
                  />
                </div>
                <div className="service-content">
                  <h3>Fashion &amp; Styling</h3>
                  <p>
                    We bring style to life, crafting looks that celebrate
                    individuality, culture, and confidence.
                  </p>
                </div>
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
                    boxShadow: "rgba(0, 255, 144, 0.6) 0px 0px 0px 1px inset",
                    maskImage:
                      "radial-gradient(circle at 50% 50%, white 40%, transparent 80%)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                  }}
                ></div>
              </div>
              <div
                className="service-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minWidth: 320,
                  margin: "0 2vw",
                }}
              >
                <div className="service-icon">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="54"
                    height="54"
                    src="/e-comm.svg"
                    className="attachment-full size-full"
                    alt=""
                    style={{ visibility: "visible" }}
                  />
                </div>
                <div className="service-content">
                  <h3>Home Repairs &amp; Errands</h3>
                  <p>
                    We keep your life running, handling everything from quick
                    fixes to everyday tasks, so you can focus on what matters.
                  </p>
                </div>
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
                    boxShadow: "rgba(0, 255, 144, 0.6) 0px 0px 0px 1px inset",
                    maskImage:
                      "radial-gradient(circle at 50% 50%, white 40%, transparent 80%)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                  }}
                ></div>
              </div>
              <div
                className="service-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minWidth: 320,
                  margin: "0 2vw",
                }}
              >
                <div className="service-icon">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="40"
                    height="41"
                    src="/maint.svg"
                    className="attachment-full size-full"
                    alt=""
                    style={{ visibility: "visible" }}
                  />
                </div>
                <div className="service-content">
                  <h3>Legal, Business &amp; Compliance</h3>
                  <p>
                    We provide trusted support across legal, business, and
                    compliance services, helping you operate confidently and
                    grow with clarity.
                  </p>
                </div>
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
                    boxShadow: "rgba(0, 255, 144, 0.6) 0px 0px 0px 1px inset",
                    maskImage:
                      "radial-gradient(circle at 50% 50%, white 40%, transparent 80%)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                  }}
                ></div>
              </div>
              <div
                className="service-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minWidth: 320,
                  margin: "0 2vw",
                }}
              >
                <div className="service-icon">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="46"
                    height="46"
                    src="/ux.svg"
                    className="attachment-full size-full"
                    alt=""
                    style={{ visibility: "visible" }}
                  />
                </div>
                <div className="service-content">
                  <h3>Logistics, Coaching, Wellness, and more</h3>
                  <p>
                    We support life in motion, delivering services that move,
                    motivate, and care, all in one trusted place.
                  </p>
                </div>
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
                    boxShadow: "rgba(0, 255, 144, 0.6) 0px 0px 0px 1px inset",
                    maskImage:
                      "radial-gradient(circle at 50% 50%, white 40%, transparent 80%)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                  }}
                ></div>
              </div>
            </Marquee>
          </div>
        </section>
      </main>
    </div>
  );
}
