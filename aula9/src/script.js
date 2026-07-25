//Exercício 7: Calcule a área de um triangulo de acordo com os dados informados pelo usuário.

alert("Área de triangulo");

let baseTriangulo = parseFloat(prompt("Informe o valor da base do triangulo: "));

let alturaTriangulo = parseFloat(prompt("Informe o valor da altura do triangulo: "));

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

alert("A área total do triangulo é: " + areaTriangulo);