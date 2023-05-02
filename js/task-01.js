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

//
// class item {
//     h2:
// }
// use strict;
const listWithId = document.querySelector("#categories");
const listWithClass = document.querySelector(".item");
console.log(listWithId);
console.log(listWithClass);

let numberOfCategories = 0;

// ul.forEach() {
// numberOfCategories += 1

// }
// console.log(`Number of categories: ${numberOfCategories}`);
// console.log(`Category: ${category}`);
// console.log(`Elements: ${elements}`);
