/*Escreva uma função que conte quantas vezes um determinado elemento ocorre em um array */

function contarElementosRepetidos(array) {
    let contador = {};
    
    for (let i = 0; i < array.length; i++) {
      const elemento = array[i];
      
      if (contador[elemento]) {
        contador[elemento]++;
      } else {
        contador[elemento] = 1;
      }
    }
    
    for (let elemento in contador) {
      console.log("O elemento", elemento, "apareceu", contador[elemento], "vezes.");
    }
    
    return contador;
  }
  
  const nome = "ana";
  const numeros = [1, 1, 1, 2, 2, 3];
  const numeros2 = [2, 2, 2, 4, 4, 4];
  
  contarElementosRepetidos(nome);
  contarElementosRepetidos(numeros);
  contarElementosRepetidos(numeros2);
  