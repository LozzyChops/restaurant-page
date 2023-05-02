import pic from './hungry_cat.jpg';

function initLoad() {
    const content = document.getElementById('content');

    const myImage = new Image();
    myImage.src = pic;
    myImage.setAttribute('alt', 'A hungry cat');

    const text = document.createElement('p');
    const quote = document.createElement('q');
    quote.textContent = "Fur real, it's the cat's meow!";
    
    content.appendChild(myImage);
    text.appendChild(quote);
    text.append(' - Caterday Magazine');
    content.appendChild(text);
};

export default initLoad;