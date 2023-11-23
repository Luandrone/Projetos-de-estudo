/*Escreva uma função que calcule a soma de todos os elementos em um array de números. */

let resultado = 0;

const numeros = [10, 10, 8]

function somar(lista){

    for(let i = 0; i < lista.length; i++){
        resultado += lista[i] 
    }
    console.log(resultado)
    return resultado

}

somar(numeros)

