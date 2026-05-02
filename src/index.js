// console.log("hello restaurant")

import "./styles.css";
import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";


const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

const changeContent = function(event) {
    // console.log(event.target.id);
    switch(event.target.id)
    {
        case "menuBtn":
            content.innerHTML = menuContent
            break;
        case "aboutBtn":
            content.innerHTML = aboutContent;
            break;
        default:
            content.innerHTML = homeContent;
    }
}

homeBtn.addEventListener("click", changeContent);
menuBtn.addEventListener("click", changeContent);
aboutBtn.addEventListener("click", changeContent);

content.innerHTML = homeContent;