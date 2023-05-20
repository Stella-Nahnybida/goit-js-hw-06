const listOfCategories = document.body.firstElementChild.nextElementSibling;
const categories = Array.from(listOfCategories.children);
console.log('Number of categories: ', categories.length);

categories.forEach(category => {
  const nameOfCategory = category.firstElementChild.textContent;
  console.log('Category: ', nameOfCategory);

  const listInCategory = category.lastElementChild;
  console.log('Elements: ', listInCategory.children.length);
});
//--Variation without DOM-navigation----------------------------------------
// const listOfCategories = document.querySelector("#categories");
// const categories = listOfCategories.querySelectorAll("#categories .item");
// console.log("Categories: ", categories);
// console.log("Number of categories: ", categories.length);

// categories.forEach((category) => {
//   const nameOfCategory = category.querySelector("h2").textContent;
//   const elementsInCategory = category.querySelectorAll("li");

//   console.log("Category: ", nameOfCategory);
//   console.log("Elements: ", elementsInCategory.length);

//   elementsInCategory.forEach((element, index) => {
//     console.log(`${index + 1}: `, element.textContent);
//   });
// });

//---------------------------------------------
// HTML містить список категорій ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
