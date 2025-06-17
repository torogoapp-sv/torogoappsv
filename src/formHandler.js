import { saveUserData } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Mostrar estado de carga
    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    // Obtener datos del formulario
    const userData = {
      name: form.querySelector('[name="fullname"]').value,
      email: form.querySelector('[name="email"]').value,
      phone: form.querySelector('[name="phone"]').value,
      roles: [],
      timestamp: new Date().toISOString(),
    };

    // Obtener roles seleccionados
    form
      .querySelectorAll('input[name="userType"]:checked')
      .forEach((checkbox) => {
        userData.roles.push(checkbox.value);
      });

    try {
      // Guardar en Firebase
      const result = await saveUserData(userData);

      if (result.success) {
        alert("¡Registro exitoso! Te notificaremos pronto.");
        form.reset();
      } else {
        throw new Error("Error en Firebase");
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      // Restaurar botón
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
});
