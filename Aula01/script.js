//Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
//Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.

function somarElementos(arraySoma) {


  let soma = 0;

  arraySoma.forEach( i => {

      soma = soma + i

      console.log(soma)
  });


};


const array = [2,4,6,8]


somarElementos(array)


