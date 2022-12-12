import './style.css';
import { generateHome } from './modules/home';
import { generateMenu } from './modules/menu';
import { generateAbout } from './modules/about';

const content = document.getElementById('#content');
const bodyElements = document.getElementById('#body');

let head = document.createElement('div');
head.classList.add("header");

let headContent = document.createElement('h1');
headContent.textContent = "GIORNOS";

let navbar = document.createElement('div');
navbar.classList.add('nav');

generateHome();
console.log(document.getElementById('body').firstChild);

let home = document.createElement('div');
home.classList.add('home');
let homeButton = document.createElement('button')
homeButton.classList.add('home')
homeButton.addEventListener('click', function(){
    
    while (document.getElementById('body').firstChild) {
        document.getElementById('body').removeChild(document.getElementById('body').lastChild);
      }
      generateHome();
});
homeButton.textContent = "HOME"

let menu = document.createElement('div');
menu.classList.add('menu');
let menuButton = document.createElement('button')
menuButton.classList.add('menu');
menuButton.addEventListener('click', function(){
    while (document.getElementById('body').firstChild) {
        document.getElementById('body').removeChild(document.getElementById('body').lastChild);
      }
      generateMenu();
});
menuButton.textContent = "MENU"

let about = document.createElement('div');
about.classList.add('about');
let aboutButton = document.createElement('button')
aboutButton.classList.add('about')
aboutButton.addEventListener('click', function(){
    while (document.getElementById('body').firstChild) {
        document.getElementById('body').removeChild(document.getElementById('body').lastChild);
      }
      generateAbout();
});
aboutButton.textContent = "ABOUT"

menu.appendChild(menuButton);
home.appendChild(homeButton);
about.appendChild(aboutButton);
navbar.appendChild(home);
navbar.appendChild(menu);
navbar.appendChild(about);

head.appendChild(headContent);
head.appendChild(navbar);

document.getElementById('content').appendChild(head);