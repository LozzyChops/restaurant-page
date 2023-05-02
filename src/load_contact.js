function initContact() {
  const content = document.getElementById("content");

  content.className = 'flex-container full-screen';

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

  const contact = document.createElement('div');
  contact.setAttribute("id", "contact");
  contact.className = 'flex-container';

  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: (987) 654-3210';

  const email = document.createElement('p');
  email.textContent = 'Email: contact@puurfect.com';

  const address = document.createElement('p');
  address.textContent = 'Address:  987 Empty Box Street, Catton, 98765';

  content.appendChild(header);
  navigation.append(homeItem, menuItem, contactItem);
  content.appendChild(navigation);
  contact.appendChild(contactHeader);
  contact.appendChild(phone);
  contact.appendChild(email);
  contact.appendChild(address);
  content.appendChild(contact);
};

export default initContact;
