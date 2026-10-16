// URBN LAB Co — Storefront scripts

document.addEventListener("DOMContentLoaded", () => {
  console.log("URBN LAB Co website loaded.");

  // Smooth scrolling for internal navigation links.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Update the copyright year automatically.
  const copyrightYear = document.querySelector("[data-copyright-year]");

  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});
