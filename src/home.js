import foodImage1 from "./images/food_1.png";
import foodImage2 from "./images/food_2.png";

function featuredItemComponent1() {
  let featuredItem = document.createElement("div");
  featuredItem.classList.add("featured_1");

  let imageItem = new Image();
  imageItem.src = foodImage1;

  let featuredTextDiv = document.createElement("div");
  featuredTextDiv.classList.add("text");

  let featuredItemHeader = document.createElement("h3");
  featuredItemHeader.textContent = "Main Cusine";

  let featuredItemBody = document.createElement("span");
  featuredItemBody.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nihil, harum autem laudantium tempora ipsa error voluptatem reiciendis modi voluptates hic quisquam corporis quo quibusdam delectus fugiat, voluptas nulla quas!";

  featuredTextDiv.appendChild(featuredItemHeader);
  featuredTextDiv.appendChild(featuredItemBody);

  featuredItem.appendChild(imageItem);
  featuredItem.appendChild(featuredTextDiv);

  return featuredItem;
}

function featuredItemComponent2() {
  let featuredItem = document.createElement("div");
  featuredItem.classList.add("featured_2");

  let imageItem = new Image();
  imageItem.src = foodImage2;

  let featuredTextDiv = document.createElement("div");
  featuredTextDiv.classList.add("text");

  let featuredItemHeader = document.createElement("h3");
  featuredItemHeader.textContent = "Main Cusine";

  let featuredItemBody = document.createElement("span");
  featuredItemBody.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nihil, harum autem laudantium tempora ipsa error voluptatem reiciendis modi voluptates hic quisquam corporis quo quibusdam delectus fugiat, voluptas nulla quas!";

  featuredTextDiv.appendChild(featuredItemHeader);
  featuredTextDiv.appendChild(featuredItemBody);

  featuredItem.appendChild(featuredTextDiv);
  featuredItem.appendChild(imageItem);

  return featuredItem;
}

function homeComponent() {
  let homeHeader = document.createElement("h3");
  homeHeader.textContent = "Featured Menu Items";
  homeHeader.classList.add("featured_header");

  let featuredContainer = document.createElement("div");
  featuredContainer.classList.add("featured_items");

  featuredContainer.appendChild(featuredItemComponent1());
  featuredContainer.appendChild(featuredItemComponent2());

  let mainContainer = document.createElement("div");

  mainContainer.appendChild(homeHeader);
  mainContainer.appendChild(featuredContainer);

  return mainContainer;
}

export default homeComponent;
