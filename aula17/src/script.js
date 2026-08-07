//Alterando valor de atributo com  o JvaScript
const elemento = document.querySelector(".ex1");

elemento.src = "main.jpg";

//Exemplo de conteúdo dinamico em elemento do HTML
const elemento2 = document.querySelector(".ex2");

elemento2.innerHTML = "Data de agora: " + Date();