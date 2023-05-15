const idCategories = document.querySelector("#categories");
const categories = idCategories.querySelectorAll("#categories .item");

console.log("Number of categories: ", categories.length);

categories.forEach((category) => {
  const nameOfCategory = category.querySelector("h2").textContent;
  const elementsInCategory = category.querySelectorAll("li");

  console.log("Category: ", nameOfCategory);
  console.log("Elements: ", elementsInCategory.length);

  // elementsInCategory.forEach((element, index) => {
  //   console.log(`${index + 1}: `, element.textContent);
  // });
});
