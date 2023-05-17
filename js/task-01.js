const listOfCategories = document.body.firstElementChild.nextElementSibling;
const categories = Array.from(listOfCategories.children);
console.log("Number of categories: ", categories.length);

categories.forEach((category) => {
  const nameOfCategory = category.firstElementChild.textContent;
  console.log("Category: ", nameOfCategory);

  const listInCategory = category.lastElementChild;
  console.log("Elements: ", listInCategory.children.length);
});
//------------------------------------------------------------
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
