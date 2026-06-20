/* =========================================================
   Renders the contact buttons based on CONTACT_INFO from
   config.js. You do not need to edit this file — just edit
   config.js with your real details.
   ========================================================= */
(function () {
  const grid = document.getElementById("contact-grid");
  if (!grid || typeof CONTACT_INFO === "undefined") return;

  const icons = {
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    calendly: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.94L2 22l5.29-1.39a9.86 9.86 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.44 9.9-9.9s-4.45-9.92-9.91-9.92zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.36c.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.16.31-.31.48-.16.17-.33.38-.47.51-.16.15-.32.31-.14.62.18.31.81 1.34 1.74 2.17 1.2 1.07 2.21 1.41 2.53 1.57.32.16.5.13.69-.08.19-.21.78-.92.99-1.23.21-.31.42-.26.7-.16.28.1 1.79.85 2.1 1 .31.16.51.24.59.37.08.13.08.74-.16 1.42z"/></svg>'
  };

  function addButton({ href, label, icon, primary }) {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "contact-btn" + (primary ? " primary" : "");
    a.innerHTML = icons[icon] + "<span>" + label + "</span>";
    grid.appendChild(a);
  }

  if (CONTACT_INFO.email) {
    addButton({
      href: "mailto:" + CONTACT_INFO.email,
      label: "Email Us",
      icon: "email"
    });
  }

  if (CONTACT_INFO.calendlyUrl) {
    addButton({
      href: CONTACT_INFO.calendlyUrl,
      label: "Book a Consultation",
      icon: "calendly",
      primary: true
    });
  }

  if (CONTACT_INFO.whatsappNumber) {
    const msg = encodeURIComponent(CONTACT_INFO.whatsappMessage || "Hello");
    addButton({
      href: "https://wa.me/" + CONTACT_INFO.whatsappNumber + "?text=" + msg,
      label: "WhatsApp Us",
      icon: "whatsapp"
    });
  }

  if (grid.children.length === 0) {
    grid.innerHTML =
      '<p style="color:var(--ink-soft);font-size:14px;">Contact details coming soon.</p>';
  }
})();
