import React, { useEffect, useRef, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import CustomCursor from "./CustomCursor.jsx";
import projects, { platformIcons } from "../data/projects.jsx";

const Section = styled.section`
  min-height: 100vh;
  color: white;
  display: flex;
  background: #00151e;
  margin-top: 3vw;

  .left-section {
    width: 20%;
    padding: 3vw;
  }

  .sec_heading {
    font-size: 4vw;
    line-height: 0.65;
    text-transform: uppercase;
    font-family: "Play Bold";
    color: var(--color-white);
  }
  .heading-content {
    display: flex;
    flex-direction: column;
    gap: 2vw;
  }
  .heading-content p {
    font-size: clamp(12px, 3vw, 14px);
    color: #757575;
  }
  .right-section {
    width: 80%;
    overflow: hidden;
  }
  .columns-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    height: 100vh;
  }
  .scroll-column {
    overflow: hidden;
  }
  .scroll-inner {
    display: flex;
    flex-direction: column;
    will-change: transform;
  }
  .project-card {
    position: relative;
    margin-bottom: 1.5rem;
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
    gap: 1rem;
    justify-content: space-between;
    color: var(--color-primary);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    width: 100%;
    background: var(--color-white);
    padding: 0.4rem 1rem;
    font-family: "Switzer Regular";
  }
  .project-card:hover .project-info {
    transform: translateY(0);
  }
  .project-title {
    font-size: clamp(10px, 3vw, 14px);
  }
  .project-subtitle {
    font-size: clamp(10px, 3vw, 12px);
    margin-top: 0.2rem;
    text-transform: capitalize;
  }
  .reversed-column {
    transform: rotate(180deg);
  }
  .reversed-card-wrapper {
    transform: rotate(180deg);
  }
  .wrok_platform {
    align-items: center;
    display: flex;
    width: 24%;
    min-width: 30px;
    justify-content: end;
  }
  .platform-icon {
    aspect-ratio: 1/0.4;
    object-fit: contain;
    object-position: right;
  }

  border-color: var(--color-highlight);
  margin-top: 2.2vw;
  display: inline-flex;

  .btn-solid {
    gap: 0.6rem;
    font-family: "Switzer Regular";
    font-size: clamp(12px, 4vw, 16px);
    color: var(--color-highlight);
    padding: 12px 18px;
    background: var(--color-btn);
    color: var(--color-white);
    border: none;
    transition: all 200ms ease-in-out;
    border-radius: 4px;
  }
  .btn-solid:hover {
    background: var(--color-highlight);
    color: var(--color-white);
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
      {project.platforms && project.platforms.length > 0 && (
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

const Work = () => {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const pos = useRef({ col1: 0, col2: 0, col3: 0 });
  const speed = useRef(1.5);
  const baseSpeed = 1.5;

  // Split projects into columns
  const col1Projects = useMemo(
    () => projects.filter((_, i) => i % 3 === 0),
    []
  );
  const col2Projects = useMemo(
    () => projects.filter((_, i) => i % 3 === 1).reverse(),
    []
  );
  const col3Projects = useMemo(
    () => projects.filter((_, i) => i % 3 === 2),
    []
  );

  const duplicate = (arr) => [...arr, ...arr];
  const col1Data = useMemo(() => duplicate(col1Projects), [col1Projects]);
  const col2Data = useMemo(() => duplicate(col2Projects), [col2Projects]);
  const col3Data = useMemo(() => duplicate(col3Projects), [col3Projects]);

  const handleMouseEnter = () => {
    speed.current = 0;
  };

  const handleMouseLeave = () => {
    speed.current = baseSpeed;
  };

  useEffect(() => {
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;
    const col3 = col3Ref.current;
    if (!col1 || !col2 || !col3) return;

    const height1 = col1.scrollHeight / 2;
    const height2 = col2.scrollHeight / 2;
    const height3 = col3.scrollHeight / 2;

    const tick = (_, deltaTime) => {
      const deltaFactor = deltaTime / 16;
      pos.current.col1 += speed.current * deltaFactor;
      pos.current.col2 += speed.current * deltaFactor;
      pos.current.col3 += speed.current * deltaFactor;
      if (pos.current.col1 >= height1) pos.current.col1 -= height1;
      if (pos.current.col2 >= height2) pos.current.col2 -= height2;
      if (pos.current.col3 >= height3) pos.current.col3 -= height3;
      gsap.set(col1, { y: -pos.current.col1 });
      gsap.set(col2, { y: -pos.current.col2 });
      gsap.set(col3, { y: -pos.current.col3 });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);

  return (
    <Section>
      <CustomCursor />
      <div className="left-section" data-cursor-text="My Work">
        <div className="heading-content">
          <h2 className="sec_heading">Work</h2>
          <p>
            A showcase of my projects — from Shopify themes to React interfaces.
            Each build is designed for performance, creativity, and great user
            experience.
          </p>
          <Link to="/all-work" className="btn btn-solid">
            View All Work
          </Link>
        </div>
      </div>
      <div className="right-section" data-cursor-text="Visit Site">
        <div
          className="columns-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="scroll-column">
            <div className="scroll-inner" ref={col1Ref}>
              {col1Data.map((p, i) => (
                <ProjectCard key={`c1-${i}`} project={p} />
              ))}
            </div>
          </div>
          <div className="scroll-column reversed-column">
            <div className="scroll-inner" ref={col2Ref}>
              {col2Data.map((p, i) => (
                <div className="reversed-card-wrapper" key={`c2-${i}`}>
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-column">
            <div className="scroll-inner" ref={col3Ref}>
              {col3Data.map((p, i) => (
                <ProjectCard key={`c3-${i}`} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
