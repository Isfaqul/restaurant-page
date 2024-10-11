import "./Home.scss";

export default function Home(onClick) {
  const container = document.createElement("div");
  container.classList.add("home-tab-container");

  const subHeading = document.createElement("h4");
  subHeading.classList.add("sub-heading");
  subHeading.innerText = "Welcome to";
  container.append(subHeading);

  const hero = document.createElement("h1");
  hero.classList.add("hero");
  hero.innerText = "DessertKing";
  container.append(hero);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add(...["btn", "menu-btn"]);
  menuBtn.id = "menu-btn";
  menuBtn.type = "button";
  menuBtn.innerText = "Menu";
  menuBtn.addEventListener("click", onClick);
  container.append(menuBtn);

  return container;
}
