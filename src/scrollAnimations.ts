const TARGETS_IDS: string[] = [
  "#subhero-1-texts",
  "#subhero-1-card-1",
  "#subhero-1-card-2",
  "#subhero-1-card-3",
  "#subhero-1-button",
  "#subhero-3-card-1",
  "#subhero-3-card-2",
  "#subhero-3-card-3",
  "#subhero-4-card-1",
]; // INSIRA AQUI OS IDS DESEJADOS PARA AS ANIMAÇÕES DE SCROLL

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("display-element");
      } else {
        entry.target.classList.remove("display-element");
      }
    });
  },
  {
    threshold: 0.3,
    //rootMargin: "0px 0px -100px 0px", // margem negativa no BOTTOM, exige mais scroll
  }
);

TARGETS_IDS.forEach((targetId) => {
  const target = document.querySelector(targetId);
  if (target) {
    observer.observe(target);
  }
});
