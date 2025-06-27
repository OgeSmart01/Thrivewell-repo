document.addEventListener("DOMContentLoaded", function () {
    // ✅ WhatsApp form submission
    const sendToWhatsApp = () => {
      const nameEl = document.getElementById("name");
      const emailEl = document.getElementById("email");
      const messageEl = document.getElementById("message");

      // Make sure form exists on the page
      if (nameEl && emailEl && messageEl) {
        const name = nameEl.value.trim();
        const email = emailEl.value.trim();
        const message = messageEl.value.trim();

        if (!name || !email || !message) {
          alert("Please fill out all fields.");
          return;
        }

        const phone = "2349038263001";
        const url =
          `https://wa.me/${phone}?text=` +
          encodeURIComponent(
            `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${message}`
          );

        window.open(url, "_blank");
      }
    };

    // Attach to button if it exists
    const sendBtn = document.getElementById("sendBtn");
    if (sendBtn) {
      sendBtn.addEventListener("click", sendToWhatsApp);
    }

    // ✅ Hamburger toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
    }
  });