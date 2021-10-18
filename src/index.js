import "./style.css";
import homeComponent from "./home";
import navbarComponent from "./navbar";
import footerComponent from "./footer";
import menuComponent from "./menu";

function containerComponent() {
  let container = document.querySelector(".content");
  let main = document.createElement("div");
  main.classList.add("main");

  main.appendChild(homeComponent());

  let navbar = navbarComponent();

  let links = navbar.querySelectorAll(".link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      switch (link.dataset.link) {
        case "home":
          main.textContent = "";
          main.appendChild(homeComponent());
          break;
        case "menu":
          main.textContent = "";
          main.appendChild(menuComponent());
          break;
        case "contact":
          main.textContent = "";
          break;
      }
      link.classList.add("active_link");
      links.forEach((item) => {
        if (item != link) {
          item.classList.remove("active_link");
        }
      });
    });
  });
  container.appendChild(navbar);
  container.appendChild(main);
  container.appendChild(footerComponent());
}

containerComponent();
