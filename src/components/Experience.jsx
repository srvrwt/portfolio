import { useEffect, useRef } from "react";
import styled from "styled-components";
import Srv from "../assets/img/srvrwt.jpg";
import CustomCursor from "./CustomCursor.jsx";

const Section = styled.section`
  padding: 4vw 3vw 8vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 6vw;

  .about_me {
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }

  .left-section {
    width: 100%;
  }

  p {
    font-size: clamp(14px, 4vw, 18px);
  }

  .experience_wrap {
    display: flex;
    flex-direction: column;
    gap: 4vw;
    margin-top: 4vw;
  }

  .job-title {
    font-family: "Play Bold";
    font-size: clamp(14px, 2vw, 1.5vw);
    font-weight: 300;
    color: #222222;
  }

  .experience {
    margin-left: 5vw;
    position: relative;
  }

  .experience:nth-child(2) {
    margin-left: 13vw;
  }
  .experience:nth-child(3) {
    margin-left: 21vw;
  }
  .experience:nth-child(4) {
    margin-left: 29vw;
  }

  .organization {
    margin-top: 0.2rem;
    color: #8a8a8a;
    font-size: clamp(14px, 2vw, 1.2vw);
  }

  .duration {
    color: #8a8a8a;
    font-size: clamp(12px, 2vw, 1vw);
    margin-top: 0.2rem;
  }

  .border {
    height: 0.5px;
    margin: 0.5rem 0 0 auto;
    background: var(--color-highlight);
    transition: all 1s ease-in-out;
    display: block;
    width: 0;
    border: 1px solid var(--color-highlight);
  }

  .border.line-s {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 1260px) {
    gap: 3vw;
    .experience_wrap {
      gap: 3vw;
      margin-top: 3vw;
    }
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;

    .experience,
    .experience:nth-child(2),
    .experience:nth-child(3),
    .experience:nth-child(4) {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
  }
`;

const experiences = [
  {
    title: "Frontend & Shopify Developer",
    type: "(Remote)",
    organization: "Draftsstech Applications Private Limited",
    duration: "Sep 2024 – Present",
  },
  {
    title: "Frontend & Shopify Developer",
    type: "(Onsite)",
    organization: "Beta Soft Technology Private Limited",
    duration: "Jul 2024 – Sep 2024",
  },
  {
    title: "Web Designer Trainee",
    type: "(Onsite)",
    organization: "Makkpress Technologies Private Limited",
    duration: "Jul 2022 – Jun 2024",
  },
  {
    title: "Web Designer",
    type: "(Onsite)",
    organization: "PrintVenue",
    duration: "Jan 2022 – Jul 2022",
  },
];

function Experience() {
  const bordersRef = useRef([]);
  const experienceRefs = useRef([]);
  const headingRef = useRef(null);
  const headingBorderRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Animate heading border
      if (headingRef.current && headingBorderRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isFullyVisible =
          rect.top >= 0 && rect.bottom + 20 <= windowHeight;
        const isOutOfViewDown = rect.top > windowHeight;
        const alreadyActive =
          headingBorderRef.current.classList.contains("line-s");

        if (isFullyVisible && !alreadyActive) {
          headingBorderRef.current.classList.add("line-s");
        }

        if (isScrollingDown && isOutOfViewDown && alreadyActive) {
          headingBorderRef.current.classList.remove("line-s");
        }
      }

      // Animate experience item borders
      bordersRef.current.forEach((borderEl, index) => {
        const block = experienceRefs.current[index];
        if (!block || !borderEl) return;

        const rect = block.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const isFullyVisible =
          rect.top >= 0 && rect.bottom + 20 <= windowHeight;
        const isOutOfViewDown = rect.top > windowHeight;
        const alreadyActive = borderEl.classList.contains("line-s");

        if (isFullyVisible && !alreadyActive) {
          borderEl.classList.add("line-s");
        }

        if (isScrollingDown && isOutOfViewDown && alreadyActive) {
          borderEl.classList.remove("line-s");
        }
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Section className="about">
      <CustomCursor />
      <div className="left-section" data-cursor-text="Experience">
        <h2 className="sec_heading" ref={headingRef}>
          Experience
        </h2>
        <span className="border" ref={headingBorderRef}></span>

        <div className="experience_wrap">
          {experiences.map((exp, idx) => (
            <div
              className="experience"
              key={idx}
              ref={(el) => (experienceRefs.current[idx] = el)}
            >
              <h4 className="job-title">
                {exp.title} <span className="job-type">{exp.type}</span>
              </h4>
              <p className="organization">{exp.organization}</p>
              <p className="duration">{exp.duration}</p>
              <span
                className="border"
                ref={(el) => (bordersRef.current[idx] = el)}
              ></span>
            </div>
          ))}
        </div>
      </div>

      <div className="about_me" data-cursor-text="Saurabh Rawat">
        <img src={Srv} alt="Saurabh Rawat" />
      </div>
    </Section>
  );
}

export default Experience;
