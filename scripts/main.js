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

/* =========================
   Project galleries
   ========================= */

const projectGalleries = document.querySelectorAll(".project");

projectGalleries.forEach((project) => {
  const images = project.querySelectorAll(".project__media img");
  const controls = project.querySelector(".project__gallery-controls");
  const previousButton = project.querySelector(
    ".project__gallery-button--prev",
  );
  const nextButton = project.querySelector(".project__gallery-button--next");
  const currentCounter = project.querySelector(
    ".project__gallery-counter span:first-child",
  );
  const totalCounter = project.querySelector(
    ".project__gallery-counter span:last-child",
  );

  if (images.length <= 1) {
    return;
  }

  let currentIndex = 0;

  controls.hidden = false;
  totalCounter.textContent = String(images.length).padStart(2, "0");

  const showImage = (index) => {
    images[currentIndex].hidden = true;

    currentIndex = index;

    images[currentIndex].hidden = false;

    currentCounter.textContent = String(currentIndex + 1).padStart(2, "0");
  };

  previousButton.addEventListener("click", () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;

    showImage(previousIndex);
  });

  nextButton.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % images.length;

    showImage(nextIndex);
  });
});

/* =========================
   Education tabs
   ========================= */

const educationTabs = document.querySelectorAll(".education__tab");
const educationPanels = document.querySelectorAll(".education-group");

educationTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activateEducationTab(index);
  });

  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();

    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex =
      (index + direction + educationTabs.length) % educationTabs.length;

    activateEducationTab(nextIndex);
    educationTabs[nextIndex].focus();
  });
});

function activateEducationTab(activeIndex) {
  educationTabs.forEach((tab, index) => {
    const isActive = index === activeIndex;

    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive);
    tab.tabIndex = isActive ? 0 : -1;

    educationPanels[index].classList.toggle("is-active", isActive);
  });
}
