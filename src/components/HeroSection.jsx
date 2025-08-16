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
    gap: 0.5vw;
    text-transform: uppercase;
  }
  .headline {
    max-width: 50vw;
    margin: 3vw 0;
    display: flex;
    flex-flow: column;
    gap: 2vw;
  }
  .circular-text {
    margin: -8vw -8vw 0 auto;
    font-family: "Play Bold";
    border-radius: 50%;
    width: 14vw;
    position: relative;
    height: 14vw;
    font-weight: bold;
    color: var(--color-primary);
    font-weight: 900;
    text-align: center;
    cursor: pointer;
    transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    min-width: 120px;
    min-height: 120px;
  }

  .circular-text span {
    position: absolute;
    display: inline-block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: clamp(12px, 2vw, 1.4vw);
    transition: all 0.5s cubic-bezier(0, 0, 0, 1);
  }
  .resume_group {
    display: flex;
    gap: 1vw;
    align-items: inherit;
  }
  .resume_group svg {
    width: 1.5vw;
    min-width: 20px;
    height: auto;
    stroke: var(--color-highlight);
    vertical-align: middle;
  }
  p {
    font-size: clamp(16px, 4vw, 1.6vw);
  }
  @media (max-width: 1024px) {
    .headline {
      max-width: 70vw;
    }
  }
  @media (max-width: 768px) {
    padding: 3rem 1rem 1rem;
    .headline {
      margin-top: 2rem;
      gap: 1.4rem;
      max-width: 80vw;
    }
    .resume_group {
      gap: 0.5rem;
    }
    .tws {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
  @media (max-width: 480px) {
    .headline {
      max-width: 100%;
      margin: 0;
    }
    .circular-text {
      margin: 0 -4rem 0 auto;
    }
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
