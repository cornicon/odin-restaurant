export const menuContent = function() {
    const container = document.getElementById('content');

    const titleElement = document.createElement('h1');
    titleElement.textContent = "Menu";

    const menuItemNameElement = document.createElement('h2');
    menuItemNameElement.textContent = "Thunder Burger";

    const infoDiv = document.createElement('div');
    const paragraph = document.createElement('p');
    infoDiv.textContent = "1/3 lbs burger patty seasoned to perfection, served with lettuce, onion, tomato, pickles";
    paragraph.textContent = "and a side of crispy potatoes"

    container.appendChild(titleElement);
    container.appendChild(menuItemNameElement);
    container.appendChild(infoDiv);
    container.appendChild(paragraph);
}