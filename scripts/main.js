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
   Header — Active section
   ========================= */

const headerNavigationLinks = document.querySelectorAll(
  '.site-nav a[href^="#"], .mobile-menu__list a[href^="#"]',
);

const pageSections = document.querySelectorAll("main > section[id]");

let activeSectionObserver;

function observeActiveSections() {
  activeSectionObserver?.disconnect();

  const topMargin = Math.round(window.innerHeight * 0.2);
  const bottomMargin = Math.round(window.innerHeight * 0.35);

  activeSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const activeHash = `#${entry.target.id}`;

        headerNavigationLinks.forEach((link) => {
          if (link.hash === activeHash) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px`,
      threshold: 0,
    },
  );

  pageSections.forEach((section) => {
    activeSectionObserver.observe(section);
  });
}

observeActiveSections();

window.addEventListener("resize", observeActiveSections);

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
  let isAnimating = false;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  controls.hidden = false;
  totalCounter.textContent = String(images.length).padStart(2, "0");

  const showImage = async (index) => {
    if (isAnimating || index === currentIndex) {
      return;
    }

    const currentImage = images[currentIndex];
    const nextImage = images[index];

    if (reducedMotion.matches) {
      currentImage.hidden = true;
      nextImage.hidden = false;
    } else {
      isAnimating = true;

      // Mostrar la siguiente imagen debajo de la actual.
      nextImage.hidden = false;

      // Mantener la imagen actual por encima durante el fundido.
      currentImage.style.zIndex = "2";
      nextImage.style.zIndex = "1";

      await currentImage.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 400,
        easing: "ease-in-out",
      }).finished;

      currentImage.hidden = true;
      currentImage.style.zIndex = "";
      nextImage.style.zIndex = "";

      isAnimating = false;
    }

    currentIndex = index;
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
