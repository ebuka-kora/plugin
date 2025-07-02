import { motion } from "framer-motion";

export default function Aboutus() {
  return (
    <div className="wp-singular page-template-default page page-id-4 wp-theme-TLP2025 about">
      <main id="main" role="main">
        <section className="block block__hero block__hero--simple in-view">
          <div className="container">
            <div className="row row--center">
              <div className="column column-m-12 column-t-8">
                <div className="block__hero__content">
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    aria-label="About Us"
                    style={{
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "7.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ display: "inline-flex", gap: "0.2em" }}>
                      <motion.span
                        className="split-word"
                        aria-hidden="true"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0 }}
                        style={{ display: "inline-block" }}
                      >
                        About
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
                      </motion.span>
                      <motion.span
                        className="split-word"
                        aria-hidden="true"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{ display: "inline-block" }}
                      >
                        Us
                      </motion.span>
                    </span>
                  </motion.h1>
                  <motion.h3
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "2rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    It all started as a{" "}
                    <span style={{ color: "#008080" }}>Dream</span>
                  </motion.h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="scroll-to"></div>

        <section className="block block__media-text block__bg block__bg--dark">
          <div className="container">
            <div className="row row--justified row--top">
              <div className="block__media-text__media column column-m-12 column-t-6">
                <picture
                  decoding="async"
                  className="attachment-large size-large"
                >
                  <source
                    type="image/webp"
                    srcSet="/ola.png"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                  <img
                    decoding="async"
                    width="1024"
                    height="681"
                    src="/ola.png"
                    alt=""
                    srcSet="/ola.png"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </picture>
              </div>
              <div className="block__media-text__content column column-m-12 column-t-6">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                  aria-label="Hi."
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "5.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span className="split-word-wrap">
                    <div
                      className="split-word"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    >
                      Hi.
                    </div>
                  </span>
                </motion.h2>
                <p>
                  I'm <strong>Kuforiji Olamide</strong>, CEO & Founder of{" "}
                  <strong>Plugin</strong>. As the Founder and CEO of{" "}
                  <strong>Plugin</strong>, I'm passionate about empowering
                  Africa's gig economy. With over <strong>6</strong> years of
                  experience in Freelance I'm driven by one mission: to make
                  digital opportunity accessible to every African regardless of
                  location, background, or income level. <strong>Plugin</strong>
                  is more than a marketplace; it's a movement to transform the
                  way people find work, hire talent, and build trust in the gig
                  and service economy.
                </p>
                <p>
                  My journey with <strong>Plugin</strong> started with a deep
                  desire to bridge the massive gap between skilled service
                  providers and the millions of people who need them. From{" "}
                  <strong>barbers in Surulere</strong> to{" "}
                  <strong>software developers in Nairobi</strong>.{" "}
                  <strong>Plugin</strong> connects everyday people with real,
                  verified opportunities online, offline, and across borders.
                </p>
                <p>
                  At <strong>Plugin</strong>, we're not just creating a
                  platform, we're building Africa's future of work. And this is
                  only the <strong>beginning</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="block block__services block__bg block__bg--light block__services--carousel">
          <div className="container">
            <div className="row">
              <div className="block__intro column column-m-12">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                  aria-label="Meet Our Team"
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "5.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ display: "inline-flex", gap: "0.2em" }}>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0 }}
                      style={{ display: "inline-block" }}
                    >
                      Meet
                    </motion.span>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      style={{ display: "inline-block" }}
                    >
                      Our
                    </motion.span>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      style={{ display: "inline-block", color: "#008080" }}
                    >
                      <span style={{ color: "#008080" }}>Team</span>
                    </motion.span>
                  </span>
                </motion.h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className="teammembers"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "3rem",
              }}
            >
              <div className="person">
                <div className="containerx">
                  <div className="containerx-inner">
                    <img className="circle" src="/abstract2.png" />
                    <img className="img img1" src="/meks.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Meks</div>
                <div className="title">Senior Frontend Engineer</div>
              </div>
              <div className="person">
                <div className="containerx">
                  <div className="containerx-inner">
                    <img className="circle" src="/abstract2.png" />
                    <img className="img img1" src="/jp.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">APs</div>
                <div className="title">Senior Backend Engineer</div>
              </div>
              <div className="person">
                <div className="containerx">
                  <div className="containerx-inner">
                    <img className="circle" src="/abstract2.png" />
                    <img className="img img3" src="/loti.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Dipsix</div>
                <div className="title">Senior Frontend Engineer</div>
              </div>
              <div className="person">
                <div className="containerx">
                  <div className="containerx-inner">
                    <img className="circle" src="/abstract2.png" />
                    <img className="img img4" src="/seth.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Seth</div>
                <div className="title">Senior Backend Engineer</div>
              </div>
              <div className="person">
                <div className="containerx">
                  <div className="containerx-inner">
                    <img className="circle" src="/abstract2.png" />
                    <img className="img img5" src="/chirman.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Chairman</div>
                <div className="title">Senior Frontend Engineer</div>
              </div>
            </div>
          </div>
        </section>

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
                    srcSet="/toge.png"
                    sizes="auto, (max-width: 1024px) 100vw, 1024px"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    width="1024"
                    height="682"
                    src="/toge.png"
                    alt=""
                    srcSet="/toge.png"
                    sizes="auto, (max-width: 1024px) 100vw, 1024px"
                  />
                </picture>
              </div>
              <div className="block__media-text__content column column-m-12 column-t-6">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  aria-label="What We Bring To The Table"
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "4.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ display: "inline-flex", gap: "0.2em" }}>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0 }}
                      style={{ display: "inline-block" }}
                    >
                      What
                    </motion.span>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      style={{ display: "inline-block", color: "#008080" }}
                    >
                      We
                    </motion.span>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      style={{ display: "inline-block" }}
                    >
                      bring
                    </motion.span>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      style={{ display: "inline-block" }}
                    >
                      to
                    </motion.span>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                      style={{ display: "inline-block" }}
                    >
                      the
                    </motion.span>
                    <motion.span
                      className="split-word"
                      aria-hidden="true"
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                      style={{ display: "inline-block" }}
                    >
                      Table
                    </motion.span>
                  </span>
                </motion.h2>
                <p>
                  At Plugin, we're not just delivering digital services—we're
                  building the infrastructure for Africa's future of work. With
                  over 6 years of hands-on experience across industries and
                  borders, we've helped businesses, creators, and service
                  providers unlock opportunity and grow with purpose-driven
                  technology.
                </p>
                <ul>
                  <li>
                    <strong>Digital Experiences Delivered</strong> – From
                    Surulere to Nairobi, we've helped brands go from local to
                    global.
                  </li>
                  <li>
                    <strong>Tech That Works for You</strong> – We leverage the
                    best of WordPress, Tailwind, Astro, and JavaScript to build
                    platforms that are beautiful, fast, and future-ready.
                  </li>
                  <li>
                    <strong>SEO & Performance-Focused</strong> – Every
                    Plugin-built solution is optimized for Google's Core Web
                    Vitals, ensuring speed, trust, & discoverability.
                  </li>
                  <li>
                    <strong>Rooted in Africa, Built for the World</strong> –
                    we're not just creating gigs—we're building careers,
                    communities, and a new standard for freelance excellence.
                    sustainable web design.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
