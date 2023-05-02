import pic from "./hungry_cat.jpg";

function initLoad() {
  const content = document.getElementById("content");

  const remove = document.querySelector('div:last-child');
  remove.parentElement.removeChild(remove);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  main.className = "flex-container";

  const myImage = new Image();
  myImage.src = pic;
  myImage.setAttribute("alt", "A hungry cat");

  const text = document.createElement("p");
  const quote = document.createElement("q");
  quote.textContent = "Fur real, it's the cat's meow!";

  main.appendChild(myImage);
  text.appendChild(quote);
  text.append(" - Caterday Magazine");
  main.appendChild(text);
  content.appendChild(main);
}

export default initLoad;
