import spinner from "../assets/icons/spinner.webp";
import CircularText from "./circulartext";
import styled from "styled-components";
import resumePDF from "../assets/resume/Resume-Saurabh-Rawat.pdf";
import CustomCursor from "./CustomCursor.jsx";

const Section = styled.section`
  padding: 1.5vw 3vw;
  overflow: hidden;

  .tws {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
  }
  .headline {
    max-width: 800px;
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
  }
  .circular-text {
    margin: -120px -120px 0 auto;
    font-family: "Play Bold";
    border-radius: 50%;
    width: 200px;
    position: relative;
    height: 200px;
    font-weight: bold;
    color: var(--color-primary);
    font-weight: 900;
    text-align: center;
    cursor: pointer;
    transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
  }

  .circular-text span {
    position: absolute;
    display: inline-block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 24px;
    transition: all 0.5s cubic-bezier(0, 0, 0, 1);
  }
  .resume_group {
    display: flex;
    gap: 1rem;
    align-items: inherit;
  }
  .resume_group svg {
    width: 24px;
    height: 24px;
    stroke: var(--color-highlight);
  }
`;

function HeroSection() {
  return (
    <Section className="hero" data-cursor-text="Scroll For More">
      <CustomCursor />
      <div className="headline">
        <small className="tws">
          <img src={spinner} alt="Loading spinner" className="spinner_sm" />
          AVAILABLE FOR NEW PROJECTS and opportunities
        </small>
        <p>
          I’m a Frontend & Shopify Developer with 3+ years of experience
          building fast, user-friendly, and high-converting eCommerce websites,
          specializing in custom themes, clean UI, smooth functionality, and
          performance optimization to bring ideas to life.
        </p>

        <div className="resume_group">
          <a
            href="mailto:rwtsrv2112000@gmail.com"
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

          <a href={resumePDF} download className="" title="Download Resume">
            <svg
              className="feather feather-download"
              fill="none"
              height="20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
        </div>
      </div>
      <CircularText
        text="OPEN*TO*WORK*LET'S*CONNECT*"
        spinDuration={20}
        className="custom-class"
      />
    </Section>
  );
}

export default HeroSection;
