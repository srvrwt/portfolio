import React, { useState, useMemo, useEffect, memo, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomCursor from "./CustomCursor.jsx";
import ArrowRight from "../assets/icons/arrow-right.jsx";
import projects, { platformIcons } from "../data/projects.jsx";
import HeadingHover from "./HeadingHover.jsx";

const Section = styled.section`
  min-height: 100vh;
  color: white;
  padding: 2vw 3vw 3vw;
  .allwork-section {
    display: flex;
    gap: 3vw;
    padding: 3vw;
    background: var(--color-primary);
  }
  .left-section {
    width: 10%;
    min-width: 140px;
  }

  h2 {
    font-size: 8vw;
    font-family: "Play Bold";
    text-transform: uppercase;
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    margin-bottom: 4vw;
    line-height: 1;
  }
  h2 > span:nth-child(2) {
    margin: 0 auto;
  }
  h2 > span:nth-child(3) {
    margin: 0 0 0 auto;
    color: var(--color-btn);
  }
  h2 > span:first-child {
    margin: 0 auto 0 0;
  }
  .navbar-links {
    margin: 0;
    line-height: 1;
  }
  .heading-content {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    position: sticky;
    top: 0;
  }
  .heading-content p {
    font-size: clamp(12px, 3vw, 14px);
    color: #757575;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    flex-direction: column;
  }
  .filter-btn {
    font-family: "Switzer Light";
    white-space: nowrap;
    background: none;
    border: none;
    color: var(--color-white);
    text-align: left;
    padding: 0.5vw 0.5vw 0.5vw 0;
    font-size: clamp(14px, 1.5vw, 1vw);
    cursor: pointer;
    border-bottom: 1px solid transparent;
    display: flex;
    transition: all 200ms ease-in-out;
    gap: 0.5vw;
    align-items: center;
  }
  .filter-btn.active {
    color: var(--color-btn);
    border-color: var(--color-btn);
  }
  .filter-btn:hover {
    color: var(--color-btn);
  }

  .right-section {
    width: 90%;
    overflow: auto;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5vw;
    align-items: start;
  }

  .project-card {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    display: block;
    text-decoration: none;
    color: inherit;
  }
  .project-image-container {
    aspect-ratio: 4/5;
    overflow: hidden;
  }
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.7s ease;
  }
  .project-card:hover .project-overlay {
    opacity: 1;
  }
  .project-info {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    gap: 1vw;
    justify-content: space-between;
    color: var(--color-primary);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    width: 100%;
    background: var(--color-white);
    padding: 0.5vw 1vw;
    font-family: "Switzer Regular";
  }
  .project-card:hover .project-info {
    transform: translateY(0);
  }
  .project-title {
    font-size: clamp(10px, 1.5vw, 0.8vw);
  }
  .project-subtitle {
    font-size: clamp(10px, 1.5vw, 0.8vw);
    margin-top: 0.2rem;
    text-transform: capitalize;
  }
  .wrok_platform {
    align-items: center;
    display: flex;
    width: 20%;
    min-width: 42px;
    justify-content: end;
  }
  .platform-icon {
    aspect-ratio: 1/0.4;
    object-fit: contain;
    object-position: right;
    max-height: 28px;
  }
  .filter-btn svg {
    width: 0;
    height: 0;
    fill: var(--color-btn);
    transition: all 200ms ease-in-out;
  }
  .filter-btn.active svg,
  .filter-btn:hover svg {
    width: 1vw;
    height: 1vw;
    min-width: 12px;
  }
  .project-image-container img {
    transition: all 10s linear;
  }
  .project-image-container:hover img {
    object-position: bottom;
  }
  .hover-heading {
    padding: 8vw 0;
    text-align: center;
  }
  .hover-heading .variable-proximity {
    font-size: clamp(24px, 8vw, 6vw);
    color: var(--color-primary);
    -webkit-text-stroke: 0.4vw;
    text-transform: capitalize;
  }
  .hover-heading .variable-proximity * {
    letter-spacing: 0.2rem;
    word-spacing: 0.8rem;
    line-height: 1.4;
  }
  .wave-button {
    font-size: clamp(18px, 4vw, 3vw);
    display: block;
    overflow: hidden;
    position: relative;
    margin-top: 1vw;
    margin: 1.2vw auto 0;
  }
  .line {
    justify-content: center;
  }

  @media (max-width: 1160px) {
    flex-direction: column;

    .left-section,
    .right-section {
      width: 100%;
    }

    .left-section {
      padding: 3rem 3vw;
    }
    .columns-container {
      gap: 1rem;
    }
  }
  @media (max-width: 1024px) {
    .hover-heading .variable-proximity {
      font-size: clamp(24px, 8vw, 6vw);
    }
  }
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
    .hover-heading {
      padding: 3rem 0;
    }
    .hover-heading .variable-proximity {
      -webkit-text-stroke: 0.2rem;
    }
    .hover-heading .variable-proximity {
      font-size: clamp(24px, 8vw, 5vw);
    }
    .wave-button {
      margin: 1rem auto 0;
    }
    .hover-heading .variable-proximity * {
      word-spacing: normal;
      line-height: 1.6;
    }
    .project-info {
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    .left-section {
      padding: 3rem 1rem;
    }
  }
`;

const ProjectCard = memo(({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card"
  >
    <div
      className="project-image-container"
      data-cursor-text={`Visit ${project.title}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        loading="eager"
        width="400"
        height="250"
        srcSet={`
          ${project.image} 600w,
          ${project.image.replace(".webp", "-small.webp")} 300w
        `}
        sizes="(max-width: 768px) 300px, 600px"
      />
    </div>
    <div className="project-info" data-cursor-text={`Visit ${project.title}`}>
      <div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
      {project.platforms?.length > 0 && (
        <div className="wrok_platform">
          {project.platforms.map((plat, idx) => {
            const Icon = platformIcons[plat] || platformIcons.Shopify;
            return (
              <img
                key={idx}
                src={Icon}
                alt={plat}
                title={plat}
                className="platform-icon"
              />
            );
          })}
        </div>
      )}
    </div>
  </a>
));

const AllWork = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activePlatform, setActivePlatform] = useState("All");

  const platforms = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => {
      (p.platforms || []).forEach((pl) => set.add(pl));
    });
    return ["All", ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activePlatform === "All") return projects;
    return projects.filter((p) => (p.platforms || []).includes(activePlatform));
  }, [activePlatform]);

  return (
    <Section>
      <CustomCursor />
      <nav className="navbar-links">
        <Link to="/" className="">
          Home
        </Link>{" "}
      </nav>
      <h2 data-cursor-text="Scroll Down Let's Check">
        <span>Let’s take</span> <span>a look at</span> <span>all my work</span>
      </h2>
      <div className="allwork-section">
        <div className="left-section" data-cursor-text="All Work">
          <div className="heading-content">
            <div className="filters" aria-label="project filters">
              {platforms.map((plat) => (
                <button
                  key={plat}
                  className={`filter-btn ${
                    activePlatform === plat ? "active" : ""
                  }`}
                  onClick={() => setActivePlatform(plat)}
                >
                  <ArrowRight />
                  {plat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="projects-grid">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        style={{ position: "relative" }}
        className="hover-heading"
        data-cursor-text="Let’s Talk"
      >
        <HeadingHover
          label={"Have a project in mind? Let’s make it real."}
          className={"variable-proximity-demo"}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
        <a
          href="https://wa.me/919634234248"
          target="blank"
          className="btn wave-button"
        >
          <span className="line first-line">
            {`Start Chat Now`.split("").map((char, i) => (
              <span key={`l1-${i}`} className={char === " " ? "space" : ""}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="line second-line">
            {`Let’s Talk Now`.split("").map((char, i) => (
              <span key={`l2-${i}`} className={char === " " ? "space" : ""}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </a>
      </div>
    </Section>
  );
};

export default AllWork;
