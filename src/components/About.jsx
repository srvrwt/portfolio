import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const About = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.1,
  baseRotation = 3,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  // Split a single text string into span-wrapped words
  const splitTextNode = (text) =>
    text.split(/(\s+)/).map((word, i) =>
      word.match(/^\s+$/) ? (
        word
      ) : (
        <span className="word" key={i}>
          {word}
        </span>
      )
    );

  // Process children and preserve <p> or any other element structure
  const splitChildren = useMemo(() => {
    const processNode = (node) => {
      if (typeof node === "string") return splitTextNode(node);
      if (Array.isArray(node)) return node.map(processNode);
      if (React.isValidElement(node)) {
        return React.cloneElement(node, {
          children: processNode(node.props.children),
        });
      }
      return null;
    };
    return React.Children.map(children, processNode);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    // Rotate container on scroll
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll(".word");

    // Fade in words
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
  ]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <div className={`scroll-reveal-text ${textClassName}`}>
        {splitChildren}
      </div>
    </div>
  );
};

export default About;
