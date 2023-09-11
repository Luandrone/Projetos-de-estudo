/**Escreva uma função que retorne o maior elemento de um array de números.*/

function retornaValorMaisAlto(lista) {

    let maior = lista[0]
    for (let i = 0; i <= lista.length; i++){
    if (lista[i] > maior) {
        maior = lista[i];
    }
   }
   return maior
}

const listaDeNumneros = [5, 55, 80, 60, 100, 200, 45];
const resultado = retornaValorMaisAlto(listaDeNumneros)

console.log(resultado);