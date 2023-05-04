const idCategories = document.querySelector("#categories");
// console.log("idCategories: ", idCategories);

const categories = idCategories.querySelectorAll(".item");
// console.log("categories: ", categories);

console.log("Number cf categories: ", categories.length);

categories.forEach((category, index) => {
  const nameOfCategory = category.querySelector("h2").textContent;
  console.log("Category: ", nameOfCategory);
  console.log("Elements: ", category.querySelectorAll("li").length);
  // const elementsInCategory = category.querySelectorAll("li");
  // elementsInCategory.forEach((element, index) => {
  //   console.log(`${index + 1}: `, element.textContent);
  // });
});
