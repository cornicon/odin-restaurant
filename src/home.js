export const homeContent = function() {
    const container = document.getElementById('content');

    const titleElement = document.createElement('h1');
    titleElement.textContent = "Odin Restaurant";

    const infoDiv = document.createElement('div');
    infoDiv.textContent = "This is some additional information about the restaurant.";

    container.appendChild(titleElement);
    container.appendChild(infoDiv);
}