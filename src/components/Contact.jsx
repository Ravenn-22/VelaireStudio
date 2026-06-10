import "./Contact.css";
function Contact() {
  return (
    <div className="contact-wrapper" id="Contact">
      {/* ── Hero Banner ── */}
      <div className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-content">
          <span className="contact-hero-eyebrow">
            Home &nbsp;/&nbsp; Contact
          </span>
          <h1 className="contact-hero-title">
            Your Dream Design
            <br />
            Starts Here
          </h1>
        </div>
      </div>

      {/* ── Main Split ── */}
      <div className="contact-main">
        {/* Left — Info */}
        <div className="contact-left">
          <span className="contact-section-eyebrow">Contact Us</span>
          <h2 className="contact-left-title">Our Studio </h2>

          {/* Location */}
          <div className="contact-info-block">
            <div className="contact-info-block-top">
              <div className="contact-dot" />
              <span className="contact-info-block-label">Our Location</span>
            </div>
            <p className="contact-info-block-name">Studio Address</p>
            <p className="contact-info-block-address">
              276B, Walker's Point, Milwaukee, Wisconsin
            </p>
            <div className="contact-tags">
              <span className="contact-tag">Milwaukee</span>
              <span className="contact-tag">Open Mon – Sat</span>
              <span className="contact-tag">Studio Visits Available</span>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-info-block">
            <div className="contact-info-block-top">
              <div className="contact-info-icon">📞</div>
              <div>
                <p className="contact-info-block-label">Call Us</p>
                <p className="contact-info-block-sub">Reach out directly</p>
              </div>
            </div>
            <a href="tel:+2348023133328" className="contact-info-value">
              +1 467 313 3397
            </a>
          </div>

          {/* Email */}
          <div className="contact-info-block">
            <div className="contact-info-block-top">
              <div className="contact-info-icon">✉️</div>
              <div>
                <p className="contact-info-block-label">Email Us</p>
                <p className="contact-info-block-sub">For general enquiries</p>
              </div>
            </div>
            <a href="mailto:hello@naimat.com" className="contact-info-value">
              Raspberry@gmail.com
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-right">
          <h3 className="contact-form-title">Get In Touch</h3>
          <p className="contact-form-subtitle">
            Have a design in mind? We'd love to hear from you. Tell us about
            your vision and let's create something beautiful together.
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label">Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label">Email Address</label>
                <input type="email" placeholder="you@email.com" />
              </div>
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label">Phone Number</label>
              <input type="tel" placeholder="+1 000 000 0000" />
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your vision, style preferences, and what you need..."
              />
            </div>

            <button type="submit" className="contact-form-submit">
              Let's Talk Fashion →
            </button>
          </form>
        </div>
      </div>

     
    </div>
  );
}
export default Contact;
