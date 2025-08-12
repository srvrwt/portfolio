import spinner from "../assets/icons/spinner.webp";
import Social from "../assets/icons/Social.jsx";
import Download from "../assets/icons/download.jsx";
import styled from "styled-components";
import resumePDF from "../assets/resume/Resume-Saurabh-Rawat.pdf";
import CustomCursor from "./CustomCursor.jsx";

const Section = styled.section`
  padding: 8vw 3vw;
  overflow: hidden;
  display: flex;
  gap: 10vw;
  justify-content: space-between;
  background: #00151e;

  .tws {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    color: #ababab;
  }
  .headline {
    max-width: 800px;
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
  }
  .wave-button {
    height: 58px;
    width: 560px;
    font-size: 48px;
  }
  p {
    font-size: clamp(12px, 4vw, 14px);
    margin-top: 0.5rem;
    max-width: 600px;
    width: 100%;
    color: #ababab;
  }
  .link_item + .link_heading {
    margin-top: 2vw;
  }
  .link_heading {
    font-family: "Switzer Regular";
    text-transform: uppercase;
    color: #ababab;
    font-size: clamp(12px, 4vw, 16px);
  }
  .link_item a {
    font-size: clamp(12px, 4vw, 16px);
    font-family: "Switzer Regular";
    color: var(--color-white);
    text-decoration: none;
    position: relative;
  }

  .footer_links {
    list-style: none;
  }
  .link_item a:after {
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 0.5px;
    background: var(--color-white);
    content: "";
    transition: all 200ms ease-in-out;
  }
  .link_item a:hover::after {
    width: 100%;
  }
  .link_item {
    margin-top: 4px;
    color: var(--color-white);
  }
  .btn {
    color: var(--color-white);
    border-color: var(--color-white);
  }
  .btn.download-btn {
    border-color: var(--color-highlight);
    margin-top: 2.2vw;
    display: inline-flex;
    gap: 0.6rem;
    font-family: "Switzer Regular";
    font-size: clamp(12px, 4vw, 16px);
    color: var(--color-highlight);
    padding: 12px 18px;
    background: var(--color-btn);
    color: var(--color-white);
    border: none;
    border-radius: 4px;
  }
  .btn.download-btn:hover {
    background: var(--color-highlight);
    transition: all 200ms ease-in-out;
    color: var(--color-white);
  }
  .download-btn:active {
    opacity: 0.5;
  }
`;

function Footer() {
  return (
    <Section className="footer" id="contact" data-cursor-text="Let's Connect">
      <CustomCursor />

      <div className="headline">
        <small className="tws">
          <img src={spinner} alt="Loading spinner" className="spinner_sm" />
          Let’s Turn Your Idea Into a Live Experience
        </small>

        <a href="matlto:rwtsrv2112000@gmail.com" target="blank" className="btn wave-button">
          <span className="line first-line">
            {`LET'S WORK TOGETHER`.split("").map((char, i) => (
              <span key={`l1-${i}`} className={char === " " ? "space" : ""}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="line second-line">
            {`START YOUR PROJECT`.split("").map((char, i) => (
              <span key={`l2-${i}`} className={char === " " ? "space" : ""}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </a>
        <p>
          Let’s bring your vision to life with clean, high-converting design.
          From custom Shopify stores to responsive frontend builds — I’ve got
          you. With 3+ years of experience, I craft fast, user-friendly
          experiences. Ready to build something great? Let’s work together.
        </p>
        <Social />
      </div>
      <ul className="footer_links">
        <li className="link_heading">Phone / Whatsapp</li>
        <li className="link_item">
          <a href="tel:9634234248" target="_blank" rel="noreferrer">
            +91 9634234248
          </a>
        </li>
        <li className="link_heading">Email</li>
        <li className="link_item">
          <a
            href="mailto:rwtsrv2112000@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            rwtsrv2112000@gmail.com
          </a>
        </li>
        <li className="link_heading">Location</li>
        <li className="link_item">New Delhi – 110067, India</li>

        <a
          className="btn download-btn"
          href={resumePDF}
          download
          title="Download Resume"
        >
          Download Resume <Download />
        </a>
      </ul>
    </Section>
  );
}

export default Footer;
