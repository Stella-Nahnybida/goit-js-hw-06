let counterValue = 0;
const divCounter = document.querySelector("#counter");

const spanValue = document.querySelector("#value");
counterValue = Number(spanValue.textContent);

const decBtn = document.querySelector('button[data-action="decrement"]');
console.log(decBtn.dataset.action); // "decrement"

const incBtn = document.querySelector('button[data-action="increment"]');
console.log(incBtn.dataset.action); // "increment"

decBtn.addEventListener("click", () => {
  counterValue--;
  console.log("counterValue--", counterValue);
  spanValue.textContent = `${counterValue}`;
});

incBtn.addEventListener("click", () => {
  counterValue++;
  console.log("counterValue++", counterValue);
  spanValue.textContent = `${counterValue}`;
});

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
