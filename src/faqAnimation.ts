const faqWrappers = document.querySelectorAll(".faq-section-infos-wrapper");

faqWrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
});
