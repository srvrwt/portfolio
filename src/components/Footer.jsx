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
  gap: 3vw;
  justify-content: space-between;
  background: #00151e;

  .tws {
    display: flex;
    align-items: center;
    gap: 0.5vw;
    text-transform: uppercase;
    color: #ababab;
    white-space: nowrap;
    flex-wrap: wrap;
  }
  .headline {
    max-width: 40vw;
    display: flex;
    flex-flow: column;
    gap: 2vw;
  }
  .wave-button {
    font-size: clamp(16px, 3.5vw, 3.5vw);
  }
  p {
    font-size: clamp(14px, 1vw, 1vw);
    margin-top: 0;
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
    font-size: clamp(14px, 1vw, 1vw);
  }
  .link_item a {
    font-size: clamp(16px, 1.1vw, 1.1vw);
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
    margin-top: 0.5vw;
    color: var(--color-white);
    font-size: clamp(16px, 1.2vw, 1.2vw);
  }
  .link_item {
    margin-top: 0.5vw;
    color: var(--color-white);
    font-size: clamp(14px, 1vw, 1vw);
  }
  .btn {
    color: var(--color-white);
    border-color: var(--color-white);
  }
  .btn.btn-solid {
    margin-top: 2.4vw;
  }
  @media (max-width: 1024px) {
    .headline {
      max-width: 60vw;
    }
  }
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    gap: 3rem;
    flex-direction: column;

    .headline {
      max-width: 100%;
      gap: 1.5rem;
    }
    .link_item + .link_heading {
      margin-top: 1.5rem;
    }
    .btn.btn-solid {
      margin-top: 2.4rem;
    }

    .link_item {
      margin-top: 0.5rem;
    }
    .wave-button {
      font-size: clamp(16px, 10vw, 8vw);
    }
    .tws {
      gap: 1rem;
    }
  }
  @media (max-width: 480px) {
    .wave-button {
      font-size: clamp(16px, 10vw, 7.6vw);
    }
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

        <a
          href="matlto:rwtsrv2112000@gmail.com"
          target="blank"
          className="btn wave-button"
        >
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
          className="btn btn-solid"
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
