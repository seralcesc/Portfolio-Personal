// Lógica de UI Interactiva (Minimalista, orientada a eventos puros)
document.addEventListener("DOMContentLoaded", () => {
  const btnOpen = document.getElementById("btnOpenMenu");
  const btnClose = document.getElementById("btnCloseMenu");
  const sidebar = document.getElementById("sidebar");
  const links = document.querySelectorAll(".sidebar__link");

  // Abrir modal
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

  // Lógica de Pestañas (Tabs)
  const tabBtns = document.querySelectorAll(".tab-btn");
  const grids = document.querySelectorAll(".education__grid");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Quitar active de todos
      tabBtns.forEach((b) => b.classList.remove("active"));
      grids.forEach((g) => g.classList.remove("active"));

      // Añadir active al seleccionado
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
