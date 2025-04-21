const includeHTML = async (id: string, filePath: string) => {
  const element = document.getElementById(id);
  const res = await fetch(filePath);
  if (element) {
    element.innerHTML = await res.text();
  }
};

Promise.all([
  includeHTML("header", "./partials/header.html"),
  includeHTML("hero", "./partials/hero.html"),
  includeHTML("strips-texts-1", "./partials/strips-texts.html"),
  includeHTML("subhero-1", "./partials/subhero-1.html"),
  includeHTML("subhero-2", "./partials/subhero-2.html"),
  includeHTML("subhero-3", "./partials/subhero-3.html"),
  includeHTML("subhero-4", "./partials/subhero-4.html"),
  includeHTML("strips-texts-2", "./partials/strips-texts.html"),
  includeHTML("faq", "./partials/faq.html"),
])
  .then(() => {
    const scrollAnimationScript = document.createElement("script");
    const faqAnimationScript = document.createElement("script");

    scrollAnimationScript.src = "./scrollAnimations.js";
    faqAnimationScript.src = "./faqAnimation.js";

    document.body.insertAdjacentElement("beforeend", scrollAnimationScript);
    document.body.insertAdjacentElement("beforeend", faqAnimationScript);
  })
  .catch(() => {
    console.error("Erro ao inserir HTMLs");
  });
