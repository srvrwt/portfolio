import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import RuggedBeardHero from "../assets/img/case-study/ruggedbeard-herobanner.webp";
import RuggedBeardProduct from "../assets/img/case-study/ruggedbeard_product.webp";
import RuggedBeardCollection from "../assets/img/case-study/ruggedbeard.co_collections.webp";
import RuggedBeardMenu from "../assets/img/case-study/Rugged-Beard_menu.webp";
import MenuMb from "../assets/img/case-study/Menu.webp";
import VariantSalection from "../assets/img/case-study/variant-salection.webp";
import Checkut from "../assets/img/case-study/checkout.webp";

import CustomCursor from "./CustomCursor.jsx";

const Section = styled.section`
  padding: 8vw 3vw 0;
  display: flex;
  flex-direction: column;
  gap: 6vw;
  position: relative;
  overflow: hidden; /* For overlay effect */

  h2 {
    font-size: 8vw;
    font-family: "Play Bold";
    text-transform: uppercase;
    position: absolute;
    top: 5vw;
    left: 3vw;
    z-index: 0;
    color: var(--color-primary);
    pointer-events: none;
  }

  .work_container {
    position: relative;
    z-index: 1;
    padding: 3vw;
    background: var(--color-white);
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 10vw;
  }

  .project_title {
    font-family: "Switzer Light";
    letter-spacing: 0.04rem;
    font-size: clamp(18px, 3vw, 36px);
    font-weight: 300;
  }

  .project_heading {
    font-family: "Switzer Regular";
    text-transform: uppercase;
    color: #8a8a8a;
    font-size: clamp(12px, 4vw, 16px);
    margin-top: 2vw;
  }

  .project_details ul li,
  .project_info {
    font-size: clamp(12px, 4vw, 16px);
    font-family: "Switzer Regular";
    color: #222222;
  }

  .project_gallery img {
    width: 100%;
  }

  .project_gallery p {
    font-size: clamp(12px, 4vw, 14px);
    font-family: "Switzer Regular";
    margin-bottom: 2vw;
  }

  .project_det {
    position: sticky;
    top: 2vw;
  }

  .project_details ul {
    list-style-position: outside;
    padding-left: 16px;
    line-height: 1.6;
  }

  .project_details ul,
  .project_info + .project_info {
    margin-top: 0.4vw;
  }

  .work_container.gallery_first {
    grid-template-columns: 1.5fr 1fr;
  }

  .work_container.gallery_first .project_details {
    order: 2;
  }

  .work_container.gallery_first .project_gallery {
    order: 1;
  }

  .gallery_mb {
    display: flex;
    gap: 2vw;
  }

  .gallery_mb_images {
    width: 100%;
  }

  .gallery_mb img {
    mix-blend-mode: darken;
    object-fit: contain;
  }
`;

function CaseStudy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // Changed offset for proper scroll range on tall content
  });

  // Parallax effect: heading moves slower, content moves faster
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["40%", "-50%"]);

  return (
    <Section className="recent_work" id="recent-work" ref={ref}>
      <CustomCursor />

      {/* Heading with slow movement */}
      <motion.h2 style={{ y: headingY }}>My Recent Work</motion.h2>

      {/* Project 1 container with faster movement */}
      <motion.div
        className="work_container"
        style={{ y: contentY }}
        data-cursor-text="Rugged Beard"
      >
        <div className="project_details">
          <div className="project_det">
            <h3 className="project_title">Rugged Beard</h3>
            <p className="project_heading">About</p>
            <p className="project_info">
              Rugged Beard is an e-commerce store crafted to showcase premium
              grooming products for men, designed to deliver a modern, rugged,
              and user-friendly experience that reflects the brand’s identity.
            </p>
            <p className="project_info">
              I handled the full design and development using Shopify, building
              custom-coded solutions for advanced functionality, including:
            </p>
            <ul>
              <li>A fully custom mega menu for streamlined navigation.</li>
              <li>
                Custom-coded Recharge App integration for subscription-based
                checkout.
              </li>
              <li>Collection pages with advanced custom filters.</li>
            </ul>

            <p className="project_heading">Client</p>
            <p className="project_info">Sejad</p>
            <p className="project_heading">Field</p>
            <p className="project_info">E-commerce</p>
            <p className="project_heading">Role</p>
            <p className="project_info">Web design</p>
          </div>
        </div>
        <div className="project_gallery">
          <img src={RuggedBeardHero} alt="Rugged Beard Home" />
          <p>Home Page</p>
          <img src={RuggedBeardMenu} alt="Rugged Beard Menu" />
          <p>Menu</p>
          <img src={RuggedBeardProduct} alt="Rugged Beard Product" />
          <p>Product Page</p>
          <img src={RuggedBeardCollection} alt="Rugged Beard Collection" />
          <p>Collection Page</p>
          <div className="gallery_mb">
            <div className="gallery_mb_images">
              <img src={MenuMb} alt="Rugged Beard Menu Mobile" />
            </div>
            <div className="gallery_mb_images">
              <img
                src={VariantSalection}
                alt="Rugged Beard Variant Selection"
              />
            </div>
            <div className="gallery_mb_images">
              <img src={Checkut} alt="Rugged Beard Checkout" />
            </div>
          </div>
          <p>Mobile View</p>
        </div>
      </motion.div>
    </Section>
  );
}

export default CaseStudy;
