const inputEl = document.querySelector("#validation-input");
const dataLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
  inputEl.value.length === dataLength
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
});
