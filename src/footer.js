function footerComponent() {
  let footer = document.createElement("div");
  let footerText = document.createElement("p");
  footerText.innerHTML = `Copyright &copy; 2021 Shawky Elshazly`;
  footer.appendChild(footerText);

  footer.classList.add("footer");

  return footer;
}

export default footerComponent;
