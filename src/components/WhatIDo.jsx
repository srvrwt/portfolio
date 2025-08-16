import { useEffect } from "react";
import styled from "styled-components";
import Skills from "./Skills.jsx";
import SrvRwt from "../assets/img/Saurabh-Rawat.jpg";
import SpinnerDark from "../assets/icons/Spinner.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 4vw 3vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 6vw;

  .about_me {
    display: flex;
    flex-direction: column;
    gap: 4vw;
  }

  .my_services li,
  p {
    font-size: clamp(16px, 2vw, 1.2vw);
  }

  .srv_img {
    position: relative;
    max-width: 22vw;
    margin: 8vw 0 0 16vw;
    padding: 1vw;
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--body-bg);
    z-index: 2;
    transform: translateY(0%);
  }

  .img_wrap_over {
    position: relative;
    overflow: hidden;
  }

  .my_services {
    margin-left: -0.8vw;
  }

  .my_services li {
    font-family: "Play Bold";
    padding: 0.8vw;
    display: flex;
    align-items: baseline;
    gap: 0.8vw;
    color: var(--color-primary);
  }

  .my_services li svg {
    width: 1.2vw;
    min-width: 14px;
    height: auto;
    transform: translateY(1.5px);
  }

  @media (max-width: 1260px) {
    grid-template-columns: 1fr 1.5fr;
    gap: 3vw;

    .srv_img {
      max-width: 28vw;
      margin: 4vw 0 0;
    }
  }

  @media (max-width: 1024px) {
    .srv_img {
      max-width: 100%;
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem 1rem;

    .about_me {
      gap: 3rem;
    }

    .my_services li {
      padding: 0.5rem;
      gap: 0.5rem;
    }

    .my_services {
      margin-left: -0.5rem;
    }
  }
`;

function WhatIDo() {
  useEffect(() => {
    // Animate overlay sliding down
    gsap.to(".srv_img .overlay", {
      y: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".srv_img",
        start: "top bottom", // start animation when image enters viewport
        end: "center center", // finish when halfway in view
        scrub: true, // smooth scroll-based animation
      },
    });

    // Fade & scale image in as overlay moves
    gsap.to(".srv_img img", {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".srv_img",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  }, []);

  return (
    <Section className="about" id="services">
      <div className="left-section">
        <h2 className="sec_heading">What I Do</h2>
        <div className="srv_img cursor-target">
          <div className="img_wrap_over">
            <div className="overlay"></div>
            <img src={SrvRwt} alt="Saurabh Rawat" />
          </div>
        </div>
      </div>

      <div className="about_me">
        <ul className="my_services">
          <li className="cursor-target">
            <SpinnerDark />
            Shopify design and development
          </li>
          <li className="cursor-target">
            <SpinnerDark />
            Headless Shopify (Hydrogen + Remix)
          </li>
          <li className="cursor-target">
            <SpinnerDark />
            WordPress design and development
          </li>
          <li className="cursor-target">
            <SpinnerDark />
            BigCommerce & GoHighLevel development
          </li>
          <li className="cursor-target">
            <SpinnerDark />
            Frontend: HTML, CSS, Tailwind, Bootstrap, React
          </li>
          <li className="cursor-target">
            <SpinnerDark />
            Website speed & performance optimization
          </li>
          <li className="cursor-target">
            <SpinnerDark />
            Email template design
          </li>
        </ul>

        <Skills
          spinDuration={2}
          hideDefaultCursor={true}
          containerSelector="#services"
        />

        <div className="skills_container">
          <h4 className="skill_heading">My Skills</h4>
          <span className="cursor-target">HTML</span>
          <span className="cursor-target">CSS</span>
          <span className="cursor-target">JavaScript</span>
          <span className="cursor-target">JQuery</span>
          <span className="cursor-target">Tailwind CSS</span>
          <span className="cursor-target">Bootstrap</span>
          <span className="cursor-target">React</span>
          <span className="cursor-target">Shopify</span>
          <span className="cursor-target">Headless</span>
          <span className="cursor-target">WordPress</span>
          <span className="cursor-target">BigCommerce</span>
          <span className="cursor-target">Wix (Editor X)</span>
          <span className="cursor-target">GoHighLevel</span>
          <span className="cursor-target">Webflow</span>
          <span className="cursor-target">Shift4Shop</span>
          <span className="cursor-target">SHOWIT</span>
          <span className="cursor-target">Git & GitHub</span>
          <span className="cursor-target">Adobe Photoshop</span>
          <span className="cursor-target">Figma</span>
        </div>
      </div>
    </Section>
  );
}

export default WhatIDo;
