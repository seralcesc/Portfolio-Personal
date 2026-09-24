/* =========================
   Mobile menu
   Close dialog on navigation
   ========================= */

const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.close();
  });
});
