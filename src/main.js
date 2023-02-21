import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".headline_animation", () => {
  animate(".headline_animation", { y: [+2000, 0] }, { duration: 2.5 });
});

inView(".pierre", () => {
  animate(".facts_animation", { y: [+2000, -650] }, { duration: 3.5 });
});

// inView(".spotlight_1", () => {
//   animate(".light", { opacity: 1 }, { duration: 10 });
// });

document.querySelectorAll("article > div").forEach((light) => {
  scroll(animate(light, { opacity: [0, 1, 1, 0] }), {
    target: light,
    offset: ["start end", "end end", "start start", "end start"],
  });
});
