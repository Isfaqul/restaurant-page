import "./styles.scss";
import ItemCard from "./components/ItemCard";
import data from "./data.json";

const itemContainer = document.querySelector(".items-container");

function displayItems() {
  data.forEach((item) => {
    const newItem = ItemCard(item);
    itemContainer.append(newItem);
  });
}

displayItems();
