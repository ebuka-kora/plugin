import { useState } from "react";




export default function Contactus() {
function SuccessModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadeInBg 0.3s",
      }}
    >
      <style>{`
        @keyframes fadeInBg { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
      <div
        style={{
          background: "#fff",
          color: "#222",
          borderRadius: "18px",
          padding: "2.5rem 2rem 2rem 2rem",
          minWidth: "340px",
          maxWidth: "90vw",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          textAlign: "center",
          animation: "popIn 0.35s cubic-bezier(.68,-0.55,.27,1.55)",
        }}
      >
        <div style={{ marginBottom: "1.2rem" }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", margin: "0 auto 0.5rem auto" }}
          >
            <circle cx="28" cy="28" r="28" fill="#008080" />
            <path
              d="M16 29.5L24.5 38L40 22.5"
              stroke="#fff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          style={{
            fontWeight: 600,
            fontSize: "1.18rem",
            marginBottom: "0.7rem",
            color: "#008080",
          }}
        >
          Message Sent!
        </div>
        <div
          style={{ fontSize: "1.05rem", marginBottom: "1.5rem", color: "#444" }}
        >
          We will contact you via email within the next 48 hours.
        </div>
        <button
          onClick={onClose}
          style={{
            background: "#008080",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "0.6rem 2.2rem",
            fontSize: "1.08rem",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "background 0.2s",
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}


  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleCloseModal = () => {
    setSuccess(false);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bodd">
      <section className="contact_pp">
        <div className="wrapper_hero contact_page">
          <div className="flex_contact">
            <div className="contact_box">
              <div className="sticky_box">
                <div>
                  <h1 className="contact_h1">
                    Contact <span style={{ color: "#fff" }}>Us</span>
                  </h1>
                </div>
                <div className="additional_contact">
                  <div className="title_additional">E-mail address</div>
                  <a className="email_copy w-inline-block">
                    <div>travelnxtlvl@gmail.com</div>
                  </a>
                </div>
                <div className="additional_contact second_info">
                  <div className="title_additional">working hours</div>
                  <a>
                    <div>Monday - Friday, 10AM - 5PM, CET</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="form_box">
              <div className="w-form">
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  data-wf-page-id="6727ae653ca09a961429ee5b"
                  data-wf-element-id="d30d94a0-c3c7-07cb-79f3-b7c0391153af"
                  aria-label="Contact Form"
                  onSubmit={handleSubmit}
                >
                  <div className="fields_flex">
                    <div className="flex_name">
                      <div className="field_box">
                        <label
                          htmlFor="First-Name-Contact"
                          className="field_txt"
                        >
                          First Name*
                        </label>
                        <input
                          className="input_box w-input"
                          maxLength="256"
                          name="firstName"
                          data-name="First-Name-Contact"
                          placeholder="Enter first name"
                          type="text"
                          id="First-Name-Contact"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="field_box">
                        <label
                          htmlFor="Last-Name-Contact"
                          className="field_txt"
                        >
                          Last Name*
                        </label>
                        <input
                          className="input_box w-input"
                          maxLength="256"
                          name="lastName"
                          data-name="Last-Name-Contact"
                          placeholder="Enter last name"
                          type="text"
                          id="Last-Name-Contact"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="field_box">
                      <label htmlFor="Email-Contact" className="field_txt">
                        Email Address*
                      </label>
                      <input
                        className="input_box w-input"
                        maxLength="256"
                        name="email"
                        data-name="Email-Contact"
                        placeholder="Enter e-mail"
                        type="email"
                        id="Email-Contact"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field_box">
                      <label htmlFor="Subject-Contact" className="field_txt">
                        Subject (Optional)
                      </label>
                      <input
                        className="input_box w-input"
                        maxLength="256"
                        name="subject"
                        data-name="Subject-Contact"
                        placeholder="Enter subject"
                        type="text"
                        id="Subject-Contact"
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field_box">
                      <label htmlFor="Message-Contact" className="field_txt">
                        Message*
                      </label>
                      <textarea
                        required
                        placeholder="Enter message"
                        maxLength="5000"
                        id="Message-Contact"
                        name="message"
                        data-name="Message-Contact"
                        className="input_box area-field w-input"
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="send_form w-button"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SuccessModal open={success} onClose={handleCloseModal} />
    </div>
  );
}