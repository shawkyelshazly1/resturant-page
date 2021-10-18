import Image1 from "./images/food_1.png";
import Image2 from "./images/food_2.png";

function ingredientsComponent() {
  let container = document.createElement("div");
  container.classList.add("ingredients");

  let header = document.createElement("h3");
  header.textContent = `Ingredients`;

  let list = document.createElement("ul");
  let listItem1 = document.createElement("li");
  listItem1.textContent = `1 pound dry short pasta, such as penne`;
  let listItem2 = document.createElement("li");
  listItem2.textContent = `2 tablespoons olive oil`;
  let listItem3 = document.createElement("li");
  listItem3.textContent = `1 small yellow onion, finely chopped`;
  let listItem4 = document.createElement("li");
  listItem4.textContent = `2 cloves garlic, minced`;
  let listItem5 = document.createElement("li");
  listItem5.textContent = `Pinch red pepper flakes (optional)`;
  let listItem6 = document.createElement("li");
  listItem6.textContent = `1/2 teaspoon kosher salt, plus more as needed`;
  let listItem7 = document.createElement("li");
  listItem7.textContent = `1/4 teaspoon freshly ground black pepper, plus more as needed`;
  let listItem8 = document.createElement("li");
  listItem8.textContent = `1 (28-ounce) can crushed tomatoes`;
  let listItem9 = document.createElement("li");
  listItem9.textContent = `1/2 cup heavy cream`;
  let listItem10 = document.createElement("li");
  listItem10.textContent = `1/2 cup chopped fresh basil leaves`;
  let listItem11 = document.createElement("li");
  listItem11.textContent = `Grated Parmesan cheese, for serving`;

  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);
  list.appendChild(listItem4);
  list.appendChild(listItem5);
  list.appendChild(listItem6);
  list.appendChild(listItem7);
  list.appendChild(listItem8);
  list.appendChild(listItem9);
  list.appendChild(listItem10);
  list.appendChild(listItem11);

  container.appendChild(header);
  container.appendChild(list);

  return container;
}
function instructionsComponent() {}

function menuItemComponent1() {
  let menuItem = document.createElement("div");
  menuItem.classList.add("menu_item");

  let itemHeader = document.createElement("h3");
  itemHeader.classList.add("item_header");
  itemHeader.textContent = `Pasta De Mariano`;

  let itemImage1 = new Image();
  itemImage1.src = Image1;

  menuItem.appendChild(itemHeader);
  menuItem.appendChild(itemImage1);
  menuItem.appendChild(ingredientsComponent());

  return menuItem;
}
function menuItemComponent2() {
  let menuItem = document.createElement("div");
  menuItem.classList.add("menu_item");

  let itemHeader = document.createElement("h3");
  itemHeader.classList.add("item_header");
  itemHeader.textContent = `Pasta De Mariano`;

  let itemImage1 = new Image();
  itemImage1.src = Image2;

  menuItem.appendChild(itemHeader);
  menuItem.appendChild(itemImage1);
  menuItem.appendChild(ingredientsComponent());

  return menuItem;
}

export { menuItemComponent1, menuItemComponent2 };
