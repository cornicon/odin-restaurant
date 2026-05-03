export const aboutContent = function() {
    const container = document.getElementById('content');

    const titleElement = document.createElement('h1');
    titleElement.textContent = "About Us";

    const infoDiv = document.createElement('div');
    const paragraph = document.createElement('p');
    infoDiv.textContent = "Contact us any day 6am - 4pm";
    paragraph.textContent = "555-555-5555"

    container.appendChild(titleElement);
    container.appendChild(infoDiv);
    container.appendChild(paragraph);
}