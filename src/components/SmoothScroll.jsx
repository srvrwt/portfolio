// slow-scroll.js
let scrollPos = 0;
let ticking = false;

window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault(); // stop default fast scroll

    scrollPos += e.deltaY * 0.3; // 0.3 = slower, lower = slower
    scrollPos = Math.max(
      0,
      Math.min(scrollPos, document.body.scrollHeight - window.innerHeight)
    );

    if (!ticking) {
      window.requestAnimationFrame(function () {
        window.scrollTo({
          top: scrollPos,
          behavior: "smooth",
        });
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: false }
);
