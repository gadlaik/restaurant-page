const nav = function () {
  const nav = document.createElement("ul");
  const online = document.createElement("li");
  online.textContent = "Order Online";
  const menu = document.createElement("li");
  menu.textContent = "Menu";
  const location = document.createElement("li");
  location.textContent = "Locations";
  const about = document.createElement("li");
  about.textContent = "About";
  nav.appendChild(online);
  nav.appendChild(menu);
  nav.appendChild(location);
  nav.appendChild(about);
  document.querySelector("#content").appendChild(nav);

  const foodMenu = document.createElement("ul");
  foodMenu.classList.add("foodMenu");
  foodMenu.style.display = "none";
  const margarita = document.createElement("li");
  margarita.textContent = "MARGARITA 5KM";
  const pepperoni = document.createElement("li");
  pepperoni.textContent = "PEPPERONI 6KM";
  const salami = document.createElement("li");
  salami.textContent = "SALAMI 6KM";
  const calzone = document.createElement("li");
  calzone.textContent = "CALZONE 6KM";
  foodMenu.appendChild(margarita);
  foodMenu.appendChild(pepperoni);
  foodMenu.appendChild(salami);
  foodMenu.appendChild(calzone);
  document.querySelector("div#content").appendChild(foodMenu);

  nav.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.textContent == "Menu") {
      document.querySelector(".main").style.display = "none";

      foodMenu.style.display = "flex";
    }
  });
};

export { nav };
