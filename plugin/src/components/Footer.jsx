"use client";

export default function Footer() {
  return (
    <div className="home wp-singular page-template-default page page-id-10 wp-theme-TLP2025 beautifully-refined-perfectly-formed">
      <footer className="section section--dark" role="contentinfo" id="footer">
        {/* <div className="footer-bg">
          <img
            src="/footer-bg.webp"
            alt="Footer Background"
            style={{ visibility: "visible" }}
          />
        </div> */}
        <div className="footer--middle">
          <div className="row">
            <div className="column column-t-6 column-d-4">
              <div className="oh">
                <h4>Service Areas</h4>
              </div>
              <p>
                I'm a freelance web designer anddeveloper that operates in
                London and Hertfordshire, I can also work remotely, servicing
                the entire country. If you have an upcoming project you'd like
                to discuss then please
                <br />
                <a style={{ color: "#e4a425" }} href="/contact-us">
                  get in touch.
                </a>
              </p>
            </div>
            <div className="column column-t-6 column-d-2">
              <div className="oh">
                <h4>Navigation</h4>
              </div>
              <ul id="menu-menu-1" className="menu js-menu">
                <li
                  id="menu-item-1581"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-10 current_page_item menu-item-1581 active"
                >
                  <a href="/" aria-current="page">
                    Home
                  </a>
                </li>
                <li
                  id="menu-item-14"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                >
                  <a href="#">Service</a>
                </li>
                <li
                  id="menu-item-166"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"
                >
                  <a href="/about-us">About Us</a>
                </li>
                <li
                  id="menu-item-1265"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1265"
                >
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li
                  id="menu-item-16"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16"
                >
                  <span
                    className="footer-link-disabled"
                    style={{
                      cursor: "not-allowed",
                      color: "#aaa",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const tooltip = e.currentTarget.querySelector(
                        ".coming-soon-tooltip"
                      );
                      if (tooltip) tooltip.style.opacity = 1;
                    }}
                    onMouseLeave={(e) => {
                      const tooltip = e.currentTarget.querySelector(
                        ".coming-soon-tooltip"
                      );
                      if (tooltip) tooltip.style.opacity = 0;
                    }}
                  >
                    Plugin4Good
                    <div
                      className="coming-soon-tooltip"
                      style={{
                        opacity: 0,
                        transition: "opacity 0.2s",
                        position: "absolute",
                        top: "120%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#222",
                        color: "#008080",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        fontSize: "2rem",
                        pointerEvents: "none",
                        zIndex: 10,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Coming Soon
                    </div>
                  </span>
                </li>
              </ul>
            </div>
            <div className="column column-t-6 column-d-3">
              <div className="oh"></div>
            </div>
            <div className="column column-t-6 column-d-3">
              <div className="oh">
                <h4>Contact</h4>
              </div>
              <p>
                <a href="mailto:chris@thelonelypixel.co.uk">plugin</a>
              </p>
              <div className="oh">
                <h4>Social</h4>
              </div>
              <ul className="social">
                <li className="tw">
                  <a href="#">
                    <img
                      width="40"
                      height="40"
                      src="/social-tw.svg"
                      alt="Follow me on Twitter"
                      style={{ visibility: "visible" }}
                    />
                  </a>
                </li>
                <li className="li">
                  <a href="#">
                    <img
                      width="40"
                      height="40"
                      src="/social-li.svg"
                      alt="Connect with me on LinkedIn"
                      style={{ visibility: "visible" }}
                    />
                  </a>
                </li>
                <li className="in">
                  <a href="#">
                    <img
                      width="40"
                      height="40"
                      src="/social-in.svg"
                      alt="Follow me on Instagram"
                      style={{ visibility: "visible" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer--bottom">
          <div className="row row--justified">
            <div className="column column-m-12 column-t-8 legal">
              <p>
                © PlugIn Limited 2025. All Rights Reserved. Company Nº 4345422 -{" "}
                <a href="/privacy-policy">Privacy Policy</a>
              </p>
            </div>
            <div className="column column-m-12 column-t-4 site-by">
              <p> Made by Dip$ix</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
