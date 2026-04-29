// Lógica de UI Interactiva (Minimalista, orientada a eventos puros)
document.addEventListener("DOMContentLoaded", () => {
  const btnOpen = document.getElementById("btnOpenMenu");
  const btnClose = document.getElementById("btnCloseMenu");
  const sidebar = document.getElementById("sidebar");
  const links = document.querySelectorAll(".sidebar__link");

  // Abrir modal (Accesibilidad manejada por el navegador nativamente)
  btnOpen.addEventListener("click", () => {
    sidebar.showModal();
    btnOpen.setAttribute("aria-expanded", "true");
  });

  // Cerrar modal
  const closeDialog = () => {
    sidebar.close();
    btnOpen.setAttribute("aria-expanded", "false");
  };

  btnClose.addEventListener("click", closeDialog);

  // Cerrar modal al hacer clic fuera del contenido (en el backdrop)
  sidebar.addEventListener("click", (event) => {
    const rect = sidebar.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      closeDialog();
    }
  });

  // Cerrar al pulsar un enlace de navegación interior
  links.forEach((link) => link.addEventListener("click", closeDialog));
});
