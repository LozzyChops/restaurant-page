function initContact() {
  const content = document.getElementById("content");
 
  const remove = document.querySelector('div:last-child');
  remove.parentElement.removeChild(remove);

  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.className = "flex-container";

  const contactHeader = document.createElement("h2");
  contactHeader.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: (987) 654-3210";

  const email = document.createElement("p");
  email.textContent = "Email: contact@puurfect.com";

  const address = document.createElement("p");
  address.textContent = "Address:  987 Empty Box Street, Catton, 98765";

  contact.appendChild(contactHeader);
  contact.appendChild(phone);
  contact.appendChild(email);
  contact.appendChild(address);
  content.appendChild(contact);
}

export default initContact;
