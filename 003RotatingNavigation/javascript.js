/*
javascript.js
PURPOSE: Rotating Navigation project
AUTHOR: Lavon Marquise Edwards
DATE: December 14 2020
NOTES: There is still some functionality here that I would like to add
    Namely, the circle doesn't stay in position when scrolling.
*/ 

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const body = document.getElementsByTagName('body');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
})

close.addEventListener('click',() => {
    container.classList.remove('show-nav');
})