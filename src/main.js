import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";
import { info } from "autoprefixer";

// inView(".headline", () => {
//   animate(".headline", { y: [+2000, 0] }, { duration: 2.5 });
// });

inView(".headline", () => {
  animate(".headline", { opacity: [0, 1] }, { duration: 5 });
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

// inView(".filmrulle_stock", () => {
//   animate(".filmrulle_tekst_mobil", { y: [+2000, 0] }, { duration: 3.5 });
// });

inView(".filmrulle_tekst_mobil", () => {
  animate(
    ".filmrulle_tekst_mobil",
    { opacity: [0, 0.3, 0.5, 0.7, 1] },
    { duration: 5 }
  );
});

inView(".filmrulle_stock_web", () => {
  animate(".filmrulle_tekst_web", { x: [-2000, 0] }, { duration: 3.5 });
});
