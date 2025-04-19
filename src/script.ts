const includeHTML = async (id: string, filePath: string) => {
  const element = document.getElementById(id);
  const res = await fetch(filePath);
  if (element) {
    element.innerHTML = await res.text();
  }
};

includeHTML("header", "/partials/header.html");
