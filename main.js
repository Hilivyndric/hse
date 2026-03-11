const CONSENT_KEY = "hse_consent_given";

const consentOverlay = document.querySelector("#consent-overlay");
const consentCheckbox = document.querySelector("#consent-checkbox");
const consentAccept = document.querySelector("#consent-accept");

if (consentOverlay) {
  if (localStorage.getItem(CONSENT_KEY) === "true") {
    consentOverlay.classList.add("is-hidden");
  } else {
    consentOverlay.classList.remove("is-hidden");
  }

  function updateButtonState() {
    if (consentAccept) consentAccept.disabled = !consentCheckbox.checked;
  }

  if (consentCheckbox) {
    consentCheckbox.addEventListener("change", updateButtonState);
    consentCheckbox.addEventListener("input", updateButtonState);
  }

  if (consentAccept) {
    consentAccept.addEventListener("click", () => {
      if (!consentCheckbox || !consentCheckbox.checked) return;
      localStorage.setItem(CONSENT_KEY, "true");
      consentOverlay.classList.add("is-hidden");
    });
  }
}

const form = document.querySelector("#lead-form");
const formNote = document.querySelector("#form-note");
const faqItems = document.querySelectorAll(".faq-item");

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() || "абитуриент";

    form.reset();
    formNote.textContent = `${name}, заявка принята. Мы свяжемся с вами и пришлем подходящую программу обучения.`;
    formNote.classList.add("is-success");
  });
}

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});
