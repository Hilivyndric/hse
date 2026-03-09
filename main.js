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
