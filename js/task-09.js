function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const divWidget = document.querySelector('.widget');
// console.log(divWidget);

const spanEl = document.querySelector('.widget .color');
const changeColorBtn = document.querySelector('.widget .change-color');

changeColorBtn.addEventListener('click', onClick);

function onClick(event) {
  let newBgColor = getRandomHexColor();
  console.log(newBgColor);

  spanEl.textContent = `${newBgColor}`;
  document.body.style = `background-color : ${newBgColor}`;
  // ??? Чому в style колір записується у форматі rgb ???
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
