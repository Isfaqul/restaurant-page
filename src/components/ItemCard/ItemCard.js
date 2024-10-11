import "./ItemCard.scss";

export default function ItemCard(item) {
  const card = document.createElement("article");
  card.classList.add("item-card");

  const itemImage = document.createElement("img");
  itemImage.classList.add("item-image");
  itemImage.src = item.src;
  itemImage.alt = item.title;

  card.append(itemImage);

  const title = document.createElement("h2");
  title.classList.add("item-title");
  title.innerText = item.title;
  card.append(title);

  const info = document.createElement("p");
  info.classList.add("item-info");
  info.innerText = item.info;
  card.append(info);

  const price = document.createElement("p");
  price.classList.add("item-price");
  price.innerText = "$ " + item.price.toFixed(2);
  card.append(price);

  return card;
}

export function ItemGrid() {
  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("items-container");

  return itemsContainer;
}
