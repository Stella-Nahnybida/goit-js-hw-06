let counterValue = 0;

// const counterBtns = document.querySelectorAll("#counter button");

const spanValue = document.querySelector("#counter #value");
counterValue = Number(spanValue.textContent);

const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

decBtn.addEventListener("click", () => {
  spanValue.textContent = `${--counterValue}`;
});

incBtn.addEventListener("click", () => {
  spanValue.textContent = `${++counterValue}`;
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
