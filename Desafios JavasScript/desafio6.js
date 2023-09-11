/*Escreva uma função que calcule a média dos números em um array.*/

let total = 0;
let media = 0;

const aluno1 = [8, 9, 10, 8]

function calcularMedia(notas){

    for(i = 0; i < notas.length; i++) {
        total += notas[i]
    }

    media = total / notas.length;


    console.log("A média do aluno é ", media)
    return media

}

calcularMedia(aluno1)