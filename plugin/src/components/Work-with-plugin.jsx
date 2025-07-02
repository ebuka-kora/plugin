"use client";

import Marquee from "react-fast-marquee";

export default function Workwith() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <main id="main" role="main">
        <section className="block block__cta block__bg block__bg--dark">
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
                width: "100%",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(10vw, 0px)",
              }}
            >
              <Marquee gradient={false} speed={100}>
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={"left-" + idx}
                    className="marquee-advanced__item-width"
                    style={{ fontSize: "10rem", fontWeight: 700 }}
                  >
                    WORK WITH <span style={{ color: "#e4a425" }}>PLUGIN.</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          <div
            data-marquee-duplicate="2"
            data-marquee-scroll-direction-target=""
            data-marquee-direction="right"
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
                transform: "translate(-10vw, 0px)",
              }}
            >
              <Marquee
                gradient={false}
                speed={100}
                direction="right"
              >
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={"right-" + idx}
                    className="marquee-advanced__item-width"
                    style={{ fontSize: "10rem", fontWeight: 700}}
                  >
                    WORK WITH <span style={{ color: "#e4a425" }}>PLUGIN.</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
