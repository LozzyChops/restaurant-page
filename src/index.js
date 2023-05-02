import initLoad from "./load.js";
import initContact from "./load_contact.js";
import initMenu from "./load_menu.js";
import pic from './hungry_cat.jpg';
import "./style.css";

const content = document.getElementById("content");
content.className = "flex-container full-screen";

const header = document.createElement("h1");
header.setAttribute("id", "restaurant-name");
header.textContent = "Puurfect Plate";

const navigation = document.createElement("ul");
navigation.className = "flex-container";
navigation.setAttribute('id', 'navigation');
const homeItem = document.createElement("li");
const menuItem = document.createElement("li");
const contactItem = document.createElement("li");
homeItem.textContent = "HOME";
menuItem.textContent = "MENU";
contactItem.textContent = "CONTACT";
homeItem.setAttribute('id', 'homeItem');
menuItem.setAttribute('id', 'menuItem');
contactItem.setAttribute('id', 'contactItem');

homeItem.addEventListener("click", function() {initLoad()});
menuItem.addEventListener("click", function() {initMenu()});
contactItem.addEventListener("click", function() {initContact()});

const main = document.createElement('div');
main.setAttribute('id', 'main');
main.className = 'flex-container';

const myImage = new Image();
myImage.src = pic;
myImage.setAttribute("alt", "A hungry cat");

const text = document.createElement("p");
const quote = document.createElement("q");
quote.textContent = "Fur real, it's the cat's meow!";

content.appendChild(header);
navigation.append(homeItem, menuItem, contactItem);
content.appendChild(navigation);
content.appendChild(main);
main.appendChild(myImage);
text.appendChild(quote);
text.append(" - Caterday Magazine");
main.appendChild(text);