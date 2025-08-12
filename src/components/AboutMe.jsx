import styled from "styled-components";
import ScrollReveal from "./About.jsx";
import CustomCursor from "./CustomCursor.jsx";

const Section = styled.section`
  padding: 1.5vw 3vw 1vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 6vw;


  .scroll-reveal-text,
  .about_me {
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }
  p {
    font-size: clamp(14px, 4vw, 20px);
  }
  strong {
    font-family: "Switzer Semibold";
  }
`;

function AboutMe() {
  return (
    <Section
      className="about"
      id="about"
      data-cursor-text="About Saurabh Rawat"
    >
      <CustomCursor />
      <h2 className="sec_heading">A bit about me</h2>
      <div className="about_me">
        <ScrollReveal>
          <p>
            I create digital solutions that combine design, technology, and
            practical functionality. I’m always learning and keeping up with the
            latest tools and trends to improve my work.
          </p>

          <p>
            My academic qualifications include a bachelor’s degree in
            Information Technology (2018–2021), a Web Designing Certificate
            (2021), and a master’s degree (MCA) completed in 2024. These studies
            have improved my technical knowledge and design skills.
          </p>
          <p>
            Outside of work, I like exploring new ideas, building my skills, and
            taking on projects that help me grow and deliver real results.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}

export default AboutMe;
