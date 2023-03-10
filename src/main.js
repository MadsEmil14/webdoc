import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";
import { info } from "autoprefixer";

inView(".headline", () => {
  animate(".headline", { opacity: [0, 1] }, { duration: 3 });
});

inView(".pierres_berømmelse", () => {
  animate(".pierres_berømmelse", { opacity: [0, 1] }, { duration: 5 });
});

inView(".pierre", () => {
  animate(".facts_animation", { y: [+2000, -650] }, { duration: 3.5 });
});

document.querySelectorAll("article > div").forEach((light) => {
  scroll(animate(light, { opacity: [0, 1, 1, 0] }), {
    target: light,
    offset: ["start end", "end end", "start start", "end start"],
  });
});

inView(".filmrulle_tekst_mobil", () => {
  animate(".filmrulle_tekst_mobil", { y: [+2000, 0] }, { duration: 2.5 });
});

inView(".filmrulle_stock_web", () => {
  animate(".filmrulle_tekst_web", { x: [+2000, 0] }, { duration: 3.5 });
});

inView(".filmrulle_analog", () => {
  animate(".filmrulle_tekst_analog_web", { x: [-2000, 0] }, { duration: 3.5 });
});

// Progress Bar

scroll(animate(".progress-bar", { scaleX: [0, 1] }));

// parallaxscrolling

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("h3");
  scroll(animate(elementderskalparallaxes, { y: [-200, 200] }), {
    target: elementderskalparallaxes,
  });
});
