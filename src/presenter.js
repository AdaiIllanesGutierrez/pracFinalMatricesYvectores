import {titulo,contenido,posts}from "./vectores.js";

const palabra = document.querySelector("#titulo");
const form = document.querySelector("#form_Post");
const div = document.querySelector("#publicaciones");
let p=[];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  p.push(palabra.value);
  
    div.innerHTML += titulo(p);
});