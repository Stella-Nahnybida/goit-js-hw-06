function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.querySelector('#controls');
const divBoxes = document.querySelector('#boxes');
const inputEl = divControls.firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

let boxAmount;
inputEl.addEventListener('input', event => {
  boxAmount = Number(event.currentTarget.value);
  console.log(boxAmount);
});

createBtn.addEventListener('click', event => createBoxes(boxAmount));
destroyBtn.addEventListener('click', event => destroyBoxes());

function createBoxes(amount) {
  console.log(`c{reate ${amount} boxes`);
  let newDivs = [];

  for (let i = 0; i < amount; i++) {
    newDivs[i] = document.createElement('div');
    newDivs[i].style.width = `${30 + i * 10}px`;
    newDivs[i].style.height = `${30 + i * 10}px`;
    newDivs[i].style.backgroundColor = `${getRandomHexColor()}`;
    console.log(newDivs[i]);
  }

  divBoxes.append(...newDivs);
  console.log(divBoxes);
}

// function createBoxes(amount) {
//   console.log(`create ${amount} boxes`);
//   for (let i = 0; i < amount; i++) {
//     const newDiv = document.createElement('div');

//     newDiv.style = `width: ${30 + i * 10}px;
//       height: ${30 + i * 10}px;
//       background-color: ${getRandomHexColor()}`;

//     divBoxes.appendChild(newDiv);
//   }
//   console.log(divBoxes);
// }

function destroyBoxes() {
  const boxes = divBoxes.querySelectorAll('div');
  boxes.forEach(box => {
    box.remove();
  });
  console.log(divBoxes);
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
