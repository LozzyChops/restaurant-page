import pic from './hungry_cat.jpg';

function initLoad() {
    const content = document.getElementById('content');

    const list = content.classList;
    list.add('flex-container', 'full-screen');

    const header = document.createElement('h1');
    header.setAttribute('id', 'restaurant-name');
    header.textContent = 'Puurfect Plate';

    const navigation = document.createElement('ul');
    navigation.className = 'flex-container navigation';
    const homeItem = document.createElement('li');
    const menuItem = document.createElement('li');
    const contactItem = document.createElement('li');
    homeItem.textContent = 'HOME';
    menuItem.textContent = 'MENU';
    contactItem.textContent = 'CONTACT';

    const myImage = new Image();
    myImage.src = pic;
    myImage.setAttribute('alt', 'A hungry cat');

    const text = document.createElement('p');
    const quote = document.createElement('q');
    quote.textContent = "Fur real, it's the cat's meow!";
        
    content.appendChild(header);
    navigation.append(homeItem, menuItem, contactItem);
    content.appendChild(navigation);
    content.appendChild(myImage);
    text.appendChild(quote);
    text.append(' - Caterday Magazine');
    content.appendChild(text);
};

export default initLoad;