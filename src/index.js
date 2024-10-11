import "./styles.scss";
import ItemCard, { ItemGrid } from "./components/ItemCard/ItemCard";
import Home from "./components/ItemCard/Home/Home";
import data from "./data.json";

const mainContainer = document.querySelector("#content");
const menuButton = document.querySelector("#menu-btn");
const homeButton = document.querySelector("#home-btn");
const AboutButton = document.querySelector("#about-btn");

menuButton.addEventListener("click", () => {
  // empty contents
  emptyContainer(mainContainer);

  // display menuItems
  displayMenu();
});

homeButton.addEventListener("click", () => {
  // empty contents
  emptyContainer(mainContainer);

  // display menuItems
  displayHome();
});

function emptyContainer(container) {
  container.innerHTML = "";
}

// function to display menu
function displayMenu() {
  const itemGrid = ItemGrid();
  console.log(itemGrid);

  data.forEach((item) => {
    const newItem = ItemCard(item);
    itemGrid.append(newItem);
  });

  mainContainer.append(itemGrid);
}

// function to display home page
function displayHome() {
  const onClick = () => {
    // empty contents
    emptyContainer(mainContainer);

    // display menuItems
    displayMenu();
  };

  const homeContent = Home(onClick);
  mainContainer.append(homeContent);
}
