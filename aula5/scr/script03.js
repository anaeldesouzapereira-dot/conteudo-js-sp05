//Exxemplos de If em estrutura condicional

let minhaIdade = 18;

if (minhaIdade > 17) {
    console.log("Eu sou maior de idade.");
}

console.log("");

//Exemplo de If aninhado

let idade = 18;
let pais = "EUA";
let aviso = "Voce não pode dirigir!";

// if (país == "EUA") {
//     if (idade >= 17) {
//         aviso = "Voce pode dirigir!";
//     }
// }

if (pais == "EUA" && idade >= 17) {
    aviso = "Voce pode dirigir!";
}

console.log(aviso);