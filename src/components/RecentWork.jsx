import styled from "styled-components";
import TextType from "./TextType";

import RuggedBeardHero from "../assets/img/case-study/ruggedbeard-herobanner.webp";
import RuggedBeardProduct from "../assets/img/case-study/ruggedbeard_product.webp";
import RuggedBeardCollection from "../assets/img/case-study/ruggedbeard.co_collections.webp";
import RuggedBeardMenu from "../assets/img/case-study/Rugged-Beard_menu.webp";
import MenuMb from "../assets/img/case-study/Menu.webp";
import VariantSalection from "../assets/img/case-study/variant-salection.webp";
import Checkut from "../assets/img/case-study/checkout.webp";
import headless from "../assets/img/case-study/headless.webp";

import CustomCursor from "./CustomCursor.jsx";

const Section = styled.section`
  padding: 8vw 3vw;
  display: flex;
  flex-direction: column;
  gap: 6vw;
  .work_container {
    padding: 3vw;
    background: var(--color-white);
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 6vw;
  }
  .text-type__cursor {
    color: var(--color-btn);
  }
  .project_title {
    font-family: "Switzer Light";
    letter-spacing: 0.04rem;
    font-size: clamp(24px, 3vw, 2.4vw);
    font-weight: 300;
  }
  .project_heading {
    font-family: "Switzer Regular";
    color: var(--color-secondary);
    font-size: clamp(16px, 3vw, 1.2vw);
    margin-top: 2vw;
  }
  .project_details ul li,
  .project_info {
    font-size: clamp(14px, 3vw, 1.1vw);
    margin-top: 0.5rem;
    font-family: "Switzer Light";
  }
  .project_gallery img {
    width: 100%;
  }
  .project_gallery p {
    font-size: clamp(12px, 1vw, 0.8vw);
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
    margin-top: 1rem;
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
  h2 {
    font-size: clamp(2rem, 8vw, 8vw);
    font-family: "Play Bold";
    text-transform: uppercase;
  }
  .wave-button {
    margin-top: 2vw;
    font-size: clamp(12px, 2vw, 1vw);
  }
  @media (max-width: 1024px) {
    .work_container.gallery_first,
    .work_container {
      gap: 3vw;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    gap: 1.5rem;

    .work_container.gallery_first,
    .work_container {
      grid-template-columns: 1fr;
      gap: 0;
      padding: 0;
      background: none;
    }
    .project_gallery {
      order: 1;
    }
    .project_details {
      order: 2;
    }
    .project_det {
      padding: 3rem 0 0;
    }
    .project_gallery p {
      margin: 0 !important;
    }
    .gallery_mb,
    .project_gallery p + img,
    .wave-button,
    .project_heading {
      margin-top: 1.5rem;
    }
    .wave-button {
      margin-top: 1.4rem;
      font-size: clamp(14px, 2vw, 1vw);
    }
    .work_container + .work_container {
      margin-top: 3rem;
    }
  }
  @media (max-width: 480px) {
    padding: 3rem 1rem;
    .project_det {
      padding: 1.5rem 0 0;
    }
    .wave-button,
    .project_heading {
      margin-top: 1.4rem;
    }
  }
`;

function RecentWork() {
  return (
    <Section className="recent_work" id="recent-work">
      <CustomCursor />
      <h2>
        <TextType
          text={["My Latest Work", "Recent Case Studies", "Work Highlights"]}
          typingSpeed={100}
          pauseDuration={6000}
          showCursor={true}
          cursorCharacter="|"
        />
      </h2>

      <div className="work_container " data-cursor-text="Shopify Headless">
        <div className="project_details">
          <div className="project_det">
            <h3 className="project_title">Shopify Headless Store</h3>
            <p className="project_heading">About</p>
            <p className="project_info">
              I’m currently building a fully custom Shopify headless e-commerce
              store from my Shopify Partner account development store as a local
              showcase project. This is not a live store — it’s a practice build
              to replicate the design of another store while coding everything
              from scratch. The frontend is built with Next.js and React for
              speed, flexibility, and real-time content updates, and it connects
              to Shopify’s Storefront API to dynamically pull products,
              collections, blogs, and menus.
            </p>
            <p className="project_info">
              The project is in progress. I’ve implemented a dynamic header with
              a custom mega menu from Shopify navigation, real-time rendering of
              products, collections, and blogs via GraphQL API, and a custom
              footer that also pulls real-time data from Shopify.
            </p>

            <p className="project_heading">Technologies Used</p>
            <p className="project_info">
              React.js, Next.js, Shopify Storefront API (GraphQL), Shopify Admin
              API (REST), Node.js{" "}
            </p>
            <a
              href="https://srvrwt.github.io/headless/"
              target="_blank"
              rel="noreferrer"
              className="btn wave-button project_link"
            >
              <span className="line first-line">
                {`View Project`.split("").map((char, i) => (
                  <span key={`l1-${i}`} className={char === " " ? "space" : ""}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span className="line second-line">
                {`Visit Website`.split("").map((char, i) => (
                  <span key={`l2-${i}`} className={char === " " ? "space" : ""}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </a>
          </div>
        </div>
        <div className="project_gallery">
          <img src={headless} alt="Shopify headless" />
          <p>Home Page</p>
        </div>
      </div>
      <div
        className="work_container gallery_first"
        data-cursor-text="Rugged Beard"
      >
        <div className="project_details">
          <div className="project_det">
            <h3 className="project_title">Rugged Beard</h3>
            <p className="project_heading">About</p>
            <p className="project_info">
              Rugged Beard is an e-commerce store offering premium grooming
              products for men. It delivers a modern, rugged, and user-friendly
              shopping experience that aligns with the brand’s identity.
            </p>
            <p className="project_info">
              I handled the complete design and development on Shopify, creating
              custom-coded solutions to enhance functionality and performance.
              Key implementations include a fully custom mega menu for
              streamlined navigation, a custom-coded Recharge App integration
              for subscription-based checkout, and collection pages with
              advanced custom filters for improved product discovery.
            </p>

            <p className="project_heading">Technologies Used</p>
            <p className="project_info">
              Shopify, Liquid, JavaScript, Recharge App
            </p>

            <a
              href="https://ruggedbeard.co/"
              target="_blank"
              rel="noreferrer"
              className="btn wave-button project_link"
            >
              <span className="line first-line">
                {`View Project`.split("").map((char, i) => (
                  <span key={`l1-${i}`} className={char === " " ? "space" : ""}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span className="line second-line">
                {`Visit Website`.split("").map((char, i) => (
                  <span key={`l2-${i}`} className={char === " " ? "space" : ""}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </a>
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
      </div>
    </Section>
  );
}

export default RecentWork;
