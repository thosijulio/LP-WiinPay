const includeHTML = async (id: string, filePath: string) => {
  const element = document.getElementById(id);
  const res = await fetch(filePath);
  if (element) {
    element.innerHTML = await res.text();
  }
};

Promise.all([
  includeHTML("header", "/partials/header.html"),
  includeHTML("hero", "/partials/hero.html"),
  includeHTML("strips-texts", "/partials/strips-texts.html"),
  includeHTML("subhero-1", "/partials/subhero-1.html"),
  includeHTML("subhero-2", "/partials/subhero-2.html"),
])
  .then(() => {
    const animationScript = document.createElement("script");
    animationScript.src = "/dist/scrollAnimations.js";

    document.body.insertAdjacentElement("beforeend", animationScript);
  })
  .catch(() => {
    console.error("Erro ao inserir HTMLs");
  });
