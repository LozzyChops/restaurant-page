import pic from './hungry_cat.jpg';

function initLoad() {
    //get the div
    const content = document.getElementById('content');

    //make a list of classes for the content div and add them
    const list = content.classList;
    list.add('flex-container', 'full-screen');

    //make the h1 in memory
    const header = document.createElement('h1');

    //give the header in memory it's characteristics
    header.setAttribute('id', 'restaurant-name');
    header.textContent = 'Puurfect Plate';

    //make the ul in memory
    const navigation = document.createElement('ul');

    //give the navigation in memory it's characteristics
    navigation.className = 'flex-container';

    //create the list items in memory
    const homeItem = document.createElement('li');
    const menuItem = document.createElement('li');
    const contactItem = document.createElement('li');

    homeItem.textContent = 'HOME';
    menuItem.textContent = 'MENU';
    contactItem.textContent = 'CONTACT';

    //create the image in memory
    const myImage = new Image();
    myImage.src = pic;

    //make the p in memory
    const text = document.createElement('p');

    //make the q in memory
    const quote = document.createElement('q');
    quote.textContent = "Fur real, it's the cat's meow!";
        
    //add the h1 to the content
    content.appendChild(header);

    //add the items to the ul
    navigation.append(homeItem, menuItem, contactItem);

    //add the ul to the content
    content.appendChild(navigation);

    //add the image to the content
    content.appendChild(myImage);

    //add the q to the p
    text.appendChild(quote);

    //add the additional text to text, specifically after the quote 
    text.append('- Caterday Magazine');

    //add the p to the content
    content.appendChild(text);
};

export default initLoad;