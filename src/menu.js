import { menuItemComponent1, menuItemComponent2 } from "./menuItems";

function menuComponent() {
  let container = document.createElement("div");
  container.classList.add("menu");

  container.appendChild(menuItemComponent1());
  container.appendChild(menuItemComponent2());

  return container;
}

export default menuComponent;
