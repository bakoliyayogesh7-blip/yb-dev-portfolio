const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.getElementById("copy-handle");
const copyFeedback = document.getElementById("copy-feedback");
if (copyButton && copyFeedback) {
  copyButton.addEventListener("click", async () => {
    const handle = copyButton.dataset.copy || "yb_dev";
    try {
      await navigator.clipboard.writeText(handle);
      copyFeedback.textContent = `Copied: ${handle}`;
    } catch {
      copyFeedback.textContent = `Handle: ${handle} (copy it manually)`;
    }
  });
}
