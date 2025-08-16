import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  display: flex;
  align-items: center;
  padding: 0.2vw 0.4vw 0.2vw 0.2vw;
  justify-content: center;
  gap: 0.5vw;
  border-radius: 0.2vw;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: clamp(12px, 1.5vw, 0.8vw);
  line-height: 1;
  font-family: "Play Bold";

  .cursor-icon {
    width: 1.6vw;
    height: 1.6vw;
    background: var(--color-btn);
    padding: 0.4vw;
    border-radius: 0.1vw;
    min-width: 24px;
    min-height: 24px;
  }

  @media (max-width: 768px) {
    padding: 4px 6px 4px 4px;
    border-radius: 3px;
    gap: 8px;

    .cursor-icon {
      padding: 4px;
      border-radius: 2px;
    }
  }
`;

export default function CustomCursor({ selector = "[data-cursor-text]" }) {
  const cursorRef = useRef(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let pos = { x: 0, y: 0 };
    let mouse = { x: 0, y: 0 };
    const OFFSET_X = 0; // left offset for below-left positioning
    const OFFSET_Y = 40; // vertical offset (below the pointer)

    const moveHandler = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // tick fn - reference so we can remove later
    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      if (!cursorRef.current) return;
      gsap.set(cursorRef.current, {
        x: pos.x + OFFSET_X,
        y: pos.y + OFFSET_Y,
      });
    };

    gsap.ticker.add(tick);

    const enterHandler = (e) => {
      // prefer attribute on the element that the listener is attached to
      const attrOnCurrent = e.currentTarget?.getAttribute("data-cursor-text");
      const attrOnTarget = e.target
        ?.closest?.("[data-cursor-text]")
        ?.getAttribute("data-cursor-text");
      const text = attrOnCurrent || attrOnTarget || "";
      if (text) setLabel(text);
      if (cursorRef.current)
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.18,
          overwrite: true,
        });
    };

    const leaveHandler = (e) => {
      setLabel("");
      if (cursorRef.current)
        gsap.to(cursorRef.current, {
          scale: 0,
          duration: 0.18,
          overwrite: true,
        });
    };

    // find all matching sections
    const sectionEls = document.querySelectorAll(selector);

    // attach listeners to each matched element
    sectionEls.forEach((el) => {
      el.addEventListener("mouseenter", enterHandler);
      el.addEventListener("mouseleave", leaveHandler);
    });

    window.addEventListener("mousemove", moveHandler);

    // initial hide
    if (cursorRef.current) gsap.set(cursorRef.current, { scale: 0 });

    return () => {
      // cleanup listeners
      sectionEls.forEach((el) => {
        el.removeEventListener("mouseenter", enterHandler);
        el.removeEventListener("mouseleave", leaveHandler);
      });
      window.removeEventListener("mousemove", moveHandler);

      // remove ticker
      gsap.ticker.remove(tick);
    };
  }, [selector]);

  return (
    <CursorWrapper ref={cursorRef} style={{ transformOrigin: "center center" }}>
      <svg
        className="cursor-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        viewBox="0 0 24.00 24.00"
        fill="none"
        stroke="#ffffff"
        stroke-width="0.00024000000000000003"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />

        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M6 4V12C6 12.663 6.26339 13.2989 6.73223 13.7678C7.20107 14.2366 7.83696 14.5 8.5 14.5H15V12C15 11.5956 15.2436 11.2309 15.6173 11.0761C15.991 10.9214 16.4211 11.0069 16.7071 11.2929L20.7071 15.2929C21.0976 15.6834 21.0976 16.3166 20.7071 16.7071L16.7071 20.7071C16.4211 20.9931 15.991 21.0787 15.6173 20.9239C15.2436 20.7691 15 20.4045 15 20V17.5H8.5C7.04131 17.5 5.64236 16.9205 4.61091 15.8891C3.57946 14.8576 3 13.4587 3 12V4C3 3.44772 3.44772 3 4 3H5C5.55228 3 6 3.44772 6 4Z"
            fill="#ffffff"
          />{" "}
        </g>
      </svg>
      {label}
    </CursorWrapper>
  );
}
