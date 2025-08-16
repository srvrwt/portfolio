import React, { useEffect, useRef, memo, useMemo, useState } from "react";
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
    font-size: clamp(2rem, 4vw, 4vw);
    line-height: 0.65;
    text-transform: uppercase;
    font-family: "Play Bold";
    color: var(--color-white);
  }
  .heading-container,
  .heading-content {
    display: flex;
    flex-direction: column;
    gap: 2vw;
  }
  .heading-content p {
    font-size: clamp(16px, 2vw, 1vw);
    color: #757575;
  }
  .right-section {
    width: 80%;
    overflow: hidden;
  }
  .columns-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5vw;
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
    margin-bottom: 1.5vw;
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
  .reversed-column {
    transform: rotate(180deg);
  }
  .reversed-card-wrapper {
    transform: rotate(180deg);
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
  }

  border-color: var(--color-highlight);
  margin-top: 2.2vw;
  display: inline-flex;

  @media (max-width: 1160px) {
    flex-direction: column;

    .heading-content {
      width: 100%;
      max-width: 400px;
    }
    .left-section,
    .right-section {
      width: 100%;
    }
    .heading-container {
      flex-direction: row;
      align-items: end;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    .heading-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .left-section {
      padding: 3rem 3vw;
    }
    .columns-container {
      gap: 1rem;
    }
  }
  @media (max-width: 1024px) {
    .project-info {
      transform: translateY(0);
    }
  }
  @media (max-width: 768px) {
    .project-info {
      padding: 0.5rem;
    }
  }
  @media (max-width: 480px) {
    .columns-container {
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
    .project-card {
      margin-bottom: 0.5rem;
    }

    .left-section {
      padding: 3rem 1rem;
    }
    .heading-container,
    .heading-content {
      gap: 1.4rem;
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

const Work = () => {
  const [columnCount, setColumnCount] = useState(
    window.innerWidth <= 480 ? 2 : 3
  );
  const colRefs = useRef([]);
  const speed = useRef(1.5);
  const baseSpeed = 1.5;

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(window.innerWidth <= 480 ? 2 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split projects dynamically based on columnCount
  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => []);
    projects.forEach((p, i) => {
      cols[i % columnCount].push(p);
    });
    return cols;
  }, [columnCount]);

  // Duplicate for infinite scroll
  const duplicatedColumns = useMemo(
    () => columns.map((col) => [...col, ...col]),
    [columns]
  );

  const handleMouseEnter = () => {
    speed.current = 0;
  };
  const handleMouseLeave = () => {
    speed.current = baseSpeed;
  };

  useEffect(() => {
    const heights = colRefs.current.map((col) => col.scrollHeight / 2);
    const positions = new Array(columnCount).fill(0);

    const tick = (_, deltaTime) => {
      const deltaFactor = deltaTime / 16;
      positions.forEach((pos, i) => {
        positions[i] += speed.current * deltaFactor;
        if (positions[i] >= heights[i]) positions[i] -= heights[i];
        gsap.set(colRefs.current[i], { y: -positions[i] });
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [columnCount]);

  return (
    <Section>
      <CustomCursor />
      <div className="left-section" data-cursor-text="My Work">
        <div className="heading-container">
          <div className="heading-content">
            <h2 className="sec_heading">Work</h2>
            <p>
              A showcase of my projects — from Shopify themes to React
              interfaces. Each build is designed for performance, creativity,
              and great user experience.
            </p>
          </div>
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
          {duplicatedColumns.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`scroll-column ${
                colIndex % 2 === 1 ? "reversed-column" : ""
              }`}
            >
              <div
                className="scroll-inner"
                ref={(el) => (colRefs.current[colIndex] = el)}
              >
                {col.map((p, i) =>
                  colIndex % 2 === 1 ? (
                    <div
                      className="reversed-card-wrapper"
                      key={`${colIndex}-${i}`}
                    >
                      <ProjectCard project={p} />
                    </div>
                  ) : (
                    <ProjectCard key={`${colIndex}-${i}`} project={p} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Work;
