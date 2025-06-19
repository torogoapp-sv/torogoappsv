import './main.css';
import './firebase';
import './formHandler'
// Función para inicializar cuando el DOM esté listo
function initPage() {
  try {
    // 1. Botón de scroll to top con verificación
    const scrollTopButton = document.getElementById("scrollTop");
    if (scrollTopButton) {
      window.addEventListener("scroll", () => {
        scrollTopButton.classList.toggle("active", window.pageYOffset > 300);
      });

      scrollTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // 2. Acordeón FAQ con verificación
    const faqItems = document.querySelectorAll(".faq-item");
    if (faqItems.length > 0) {
      faqItems.forEach((item) => {
        const button = item.querySelector("button");
        const content = item.querySelector("div");
        const icon = button?.querySelector("i");

        if (button && content) {
          button.addEventListener("click", () => {
            content.classList.toggle("hidden");
            if (icon) {
              icon.classList.toggle("fa-chevron-down");
              icon.classList.toggle("fa-chevron-up");
            }
            item.classList.toggle("bg-toro-light");
            item.classList.toggle("bg-white");
          });
        }
      });
    }

    // 3. Navegación suave con verificación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    if (navLinks.length > 0) {
      navLinks.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });
    }

    // 4. Menú móvil mejorado con animación suave
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
      });

      // Cerrar menú al hacer clic en enlaces
      const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
      if (mobileMenuLinks.length > 0) {
        mobileMenuLinks.forEach((link) => {
          link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
          });
        });
      }
    }
  } catch (error) {
    console.error("Error inicializando la página:", error);
  }
}

// Inicializar cuando el documento esté listo
document.addEventListener("DOMContentLoaded", initPage);
