/*Escreva uma função que inverta uma string (por exemplo, "hello" se tornaria "olleh").*/

let nome = "luan";


function inverterLetras(palavra){

  

   /* let letras = palavra.split('')
    let letrasInvertida = letras.reverse()*/
    let palavraInvertida = palavra.split('').reverse().join('');

    console.log(palavraInvertida)
}

inverterLetras(nome)
