


import { courses } from "./courses.js";
import { myData }  from "./data.js";
import { scrollFn } from "./scrollFn.js";
import { search } from "./search.js";

const ourArray = myData;
console.log(ourArray);


let itemContainerOne = document.getElementById('item-container-one');
let itemContainerTwo = document.getElementById('item-container-two');
let itemContainerThree = document.getElementById('item-container-three');

let largeOverlayOne = document.getElementById('large-overlay-one');
let largeOverlayTwo = document.getElementById('large-overlay-two');
let largeOverlayThree = document.getElementById('large-overlay-three');

let smallOverlayOne = document.getElementById('small-overlay-one');
let smallOverlayTwo = document.getElementById('small-overlay-two');
let smallOverlayThree = document.getElementById('small-overlay-three');

let groupOne = document.getElementById('item-container-group-one');
let groupTwo = document.getElementById('item-container-group-two');

itemContainerTwo.addEventListener('mouseenter', () => {

    groupTwo.style.width = "84.509%";
    itemContainerTwo.style.flex = 1;
    itemContainerThree.style.width = "16.916%";

 

    largeOverlayOne.classList.remove('large-overlay-one');
    largeOverlayOne.classList.add('large-overlay-one-hide');
    smallOverlayOne.classList.remove('small-overlay-one-hide');
    smallOverlayOne.classList.add('small-overlay-one');

    smallOverlayTwo.classList.remove('small-overlay-two');
    smallOverlayTwo.classList.add('small-overlay-one-hide');
    largeOverlayTwo.classList.remove('large-overlay-one-hide');
    largeOverlayTwo.classList.add('large-overlay-two');

    largeOverlayThree.classList.remove('large-overlay-two');
    largeOverlayThree.classList.add('large-overlay-one-hide');
    smallOverlayThree.classList.remove('small-overlay-one-hide');
    smallOverlayThree.classList.add('small-overlay-three');


});
itemContainerTwo.addEventListener('mouseleave', () => {

    groupTwo.style.width = "";
    itemContainerTwo.style.flex = '';
    itemContainerThree.style.width = "";

    largeOverlayOne.classList.remove('large-overlay-one-hide');
    largeOverlayOne.classList.add('large-overlay-one');
    smallOverlayOne.classList.remove('small-overlay-one');
    smallOverlayOne.classList.add('small-overlay-one-hide');

    smallOverlayTwo.classList.remove('small-overlay-one-hide');
    smallOverlayTwo.classList.add('small-overlay-two');
    largeOverlayTwo.classList.remove('large-overlay-two');
    largeOverlayTwo.classList.add('large-overlay-one-hide');

    largeOverlayThree.classList.remove('large-overlay-two');
    largeOverlayThree.classList.add('large-overlay-one-hide');
    smallOverlayThree.classList.remove('small-overlay-one-hide');
    smallOverlayThree.classList.add('small-overlay-three');


});

itemContainerThree.addEventListener('mouseenter', () => {


    groupTwo.style.width = "84.509%";
    itemContainerThree.style.flex = 1;
    itemContainerTwo.style.width = "16.916%";

    largeOverlayOne.classList.remove('large-overlay-one');
    largeOverlayOne.classList.add('large-overlay-one-hide');
    smallOverlayOne.classList.remove('small-overlay-one-hide');
    smallOverlayOne.classList.add('small-overlay-one');

    smallOverlayTwo.classList.remove('small-overlay-one-hide');
    smallOverlayTwo.classList.add('small-overlay-two');
    largeOverlayTwo.classList.remove('large-overlay-two');
    largeOverlayTwo.classList.add('large-overlay-one-hide');

    largeOverlayThree.classList.remove('large-overlay-one-hide');
    largeOverlayThree.classList.add('large-overlay-three');

    smallOverlayThree.classList.remove('small-overlay-three');
    smallOverlayThree.classList.add('small-overlay-one-hide');


});
itemContainerThree.addEventListener('mouseleave', () => {


    groupTwo.style.width = "";
    itemContainerThree.style.flex = "";
    itemContainerTwo.style.width = "";

    groupTwo.style.width = "84.509%";
    itemContainerTwo.style.flex = 1;
    itemContainerThree.style.width = "16.916%";


 

    largeOverlayOne.classList.remove('large-overlay-one-hide');
    largeOverlayOne.classList.add('large-overlay-one');
    smallOverlayOne.classList.remove('small-overlay-one');
    smallOverlayOne.classList.add('small-overlay-one-hide');

    smallOverlayTwo.classList.remove('small-overlay-one-hide');
    smallOverlayTwo.classList.add('small-overlay-two');
    largeOverlayTwo.classList.remove('large-overlay-two');
    largeOverlayTwo.classList.add('large-overlay-one-hide');

    largeOverlayThree.classList.remove('large-overlay-three');
    largeOverlayThree.classList.add('large-overlay-one-hide');
    smallOverlayThree.classList.remove('small-overlay-one-hide');
    smallOverlayThree.classList.add('small-overlay-three');


});

scrollFn();
//
courses(myData);
//
search(myData);