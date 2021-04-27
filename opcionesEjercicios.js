function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
  
  var reverseNum = num.toString().split('').reverse().join('');
  if(num === reverseNum){
    return true;
  }else {
    return false;
  }
  }


  var num = 56948;
function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
  
  //OPCION 2 RESOLUCION:
  var numArray= num.toString().split('');
  var reverseNum = [];
  for(var i = numArray.length-1; i>=0; i--){
  reverseNum += numArray[i];
  reverseNum = reverseNum.join('');
  }
  return reverseNum;
  }