import pic from './happy_cat.jpg';
import pic2 from './cat_paw.jpg';

function initMenu() {
    const content = document.getElementById('content');

    content.className = 'flex-container full-screen';

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

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const leftTop = document.createElement('div');
    leftTop.className = 'left top';
    const foodHeader = document.createElement('h2');
    foodHeader.textContent = 'FOOD';
    const foodList = document.createElement('ul');
    const foodOne = document.createElement('li');
    foodOne.textContent = 'Tiny Creature';
    const foodOneDetail = document.createElement('p');
    foodOneDetail.className = 'detail';
    foodOneDetail.textContent = 'Special daily. Ask staff.';
    const foodTwo = document.createElement('li');
    foodTwo.textContent = 'Assorted House Plants';
    const foodTwoDetail = document.createElement('p');
    foodTwoDetail.className = 'detail';
    foodTwoDetail.textContent = 'Non-toxic and placed in precarious positions.';
    const foodThree = document.createElement('li');
    foodThree.textContent = 'Grass';
    const foodThreeDetail = document.createElement('p');
    foodThreeDetail.className = 'detail';
    foodThreeDetail.textContent = 'Fresh cut.';

    const rightTop = document.createElement('div');
    rightTop.className = 'right top';
    const happyCatImage = new Image();
    happyCatImage.src = pic;
    happyCatImage.setAttribute('alt', 'A happy cat.');


    const leftBottom = document.createElement('div');
    leftBottom.className = 'left bottom';
    const catPawImage = new Image();
    catPawImage.src = pic2;
    catPawImage.setAttribute('alt', 'A cat paw.');

    const rightBottom = document.createElement('div');
    rightBottom.className = 'right bottom';
    const drinkHeader = document.createElement('h2');
    drinkHeader.textContent = 'DRINK';
    const drinkList = document.createElement('ul');
    const drinkOne = document.createElement('li');
    drinkOne.textContent = 'Catmint Tea';
    const drinkTwo = document.createElement('li');
    drinkTwo.textContent = 'Warm Milk';
    const desertHeader = document.createElement('h2');
    desertHeader.textContent = 'DESERT';
    const desertList = document.createElement('ul');
    const desertOne = document.createElement('li');
    desertOne.textContent = 'Ice Cream';
    const desertOneDetail = document.createElement('p');
    desertOneDetail.textContent = 'Choice of two toppings:';
    desertOneDetail.className = 'detail';
    const innerList = document.createElement('ul');
    innerList.className = 'inner-ul';
    const toppingOne = document.createElement('li');
    toppingOne.textContent = 'Tuna';
    const toppingTwo = document.createElement('li');
    toppingTwo.textContent = 'Banana';
    const toppingThree = document.createElement('li');
    toppingThree.textContent = 'Stick of Butter';
    const toppingFour = document.createElement('li');
    toppingFour.textContent = 'Prawns';
    
        
    content.appendChild(header);
    navigation.append(homeItem, menuItem, contactItem);
    content.appendChild(navigation);
    leftTop.appendChild(foodHeader);
    foodList.appendChild(foodOne);
    foodList.appendChild(foodOneDetail);
    foodList.appendChild(foodTwo);
    foodList.appendChild(foodTwoDetail);
    foodList.appendChild(foodThree);
    foodList.appendChild(foodThreeDetail);
    leftTop.appendChild(foodList);
    menu.appendChild(leftTop);
    rightTop.appendChild(happyCatImage);
    menu.appendChild(rightTop);
    leftBottom.appendChild(catPawImage);
    menu.appendChild(leftBottom);
    rightBottom.appendChild(drinkHeader);
    drinkList.appendChild(drinkOne);
    drinkList.appendChild(drinkTwo);
    rightBottom.appendChild(drinkList);
    rightBottom.appendChild(desertHeader);
    desertList.appendChild(desertOne);
    desertList.appendChild(desertOneDetail);
    innerList.appendChild(toppingOne);
    innerList.appendChild(toppingTwo);
    innerList.appendChild(toppingThree);
    innerList.appendChild(toppingFour);
    desertList.appendChild(innerList);
    rightBottom.appendChild(desertList);
    menu.appendChild(rightBottom);
    content.appendChild(menu);
};

export default initMenu;