import initLoad from "./load.js";
import initContact from "./load_contact.js";
import initMenu from "./load_menu.js";
import "./style.css";

const content = document.getElementById("content");

content.className = "flex-container full-screen";

const header = document.createElement("h1");
header.setAttribute("id", "restaurant-name");
header.textContent = "Puurfect Plate";

const navigation = document.createElement("ul");
navigation.className = "flex-container navigation";
const homeItem = document.createElement("li");
const menuItem = document.createElement("li");
const contactItem = document.createElement("li");
homeItem.textContent = "HOME";
menuItem.textContent = "MENU";
contactItem.textContent = "CONTACT";

content.appendChild(header);
navigation.append(homeItem, menuItem, contactItem);
content.appendChild(navigation);

initLoad();
//initMenu();
//initContact();
