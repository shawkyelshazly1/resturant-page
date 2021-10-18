function headerLogoComponent() {
  let logo = document.createElement("h1");
  let logoLink = document.createElement("a");
  logoLink.setAttribute("href", "#");
  logoLink.textContent = "Bon Appétit";
  logo.appendChild(logoLink);
  logo.classList.add("logo");

  return logo;
}

function headerLinksComponent() {
  let headerLinks = document.createElement("ul");
  headerLinks.classList.add("header_links");
  let homeLink = document.createElement("li");
  homeLink.classList.add("home_link", "link", 'active_link');
  homeLink.setAttribute("data-link", "home");
  homeLink.textContent = "Home";

  let menuLink = document.createElement("li");
  menuLink.classList.add("menu_link", "link");
  menuLink.setAttribute("data-link", "menu");
  menuLink.textContent = "Menu";

  let contactLink = document.createElement("li");
  contactLink.classList.add("contact_link", "link");
  contactLink.setAttribute("data-link", "contact");
  contactLink.textContent = "Contact Us";

  headerLinks.appendChild(homeLink);
  headerLinks.appendChild(menuLink);
  headerLinks.appendChild(contactLink);

  let links = [homeLink, menuLink, contactLink];
  links.forEach((link) => {
    link.addEventListener("click", () => {
      console.log(link.dataset);
    });
  });

  return headerLinks;
}

function otherHeaderComponent() {
  let aboutLink = document.createElement("h3");
  aboutLink.classList.add("about_link");
  aboutLink.textContent = "About Us";
  return aboutLink;
}

function navbarComponent() {
  let header = document.createElement("div");
  header.classList.add("header");

  header.appendChild(headerLogoComponent());
  header.appendChild(headerLinksComponent());
  header.appendChild(otherHeaderComponent());

  return header;
}

export default navbarComponent;
