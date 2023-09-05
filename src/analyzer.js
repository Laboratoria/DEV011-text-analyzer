const analyzer = {  
  getWordCount: (text) => {
  /*
  En ésta función se define una variable llamada vari; la cual contiene un regex que selecciona todos los espacios y saltos de línea
  Luego se define una variable llamada palabras, en la que se utiliza la función replace() para eliminar los caracteres de puntuación y números del texto, utilizando otro regex. 
  Después, se utiliza trim() para eliminar los espacios en blanco al principio y al final del texto.
  Finalmente, se utiliza split() con el regex puesto en la variable vari, para dividir el texto en palabras.
  Luego utilizamos una condicional if, que nos dice que si la longitudo de la variable palabras es mayor a 0, se retorna la longitud del array, lo cual seria el numero de palabras.
  */
    const vari = /[\s\n]+/g
    const palabras = text.replace(/[.,;?¿!¡{}:'"/-1234567890]/gi,"").trim().split(vari); 
    if (palabras.length>0){
      return palabras.length
    }
  },
  getCharacterCount: (text) => {
    /*
    Se define una variable llamada caracter, en la que se utiliza el metodo split("") para separar cada caracter del texto ingresado.
    Luego usamos la condiciona if; que nos dice que si el primer caracter de la variable "caracter" esta vacio, retorne 0.
    Si esta condicion no se cumple, se retorna la longitud del array qque creamos.
    */
    const caracter = text.split("");
    if (caracter[0]==="") {
      return 0
    }
    else { 
      return caracter.length
    }  
  },
  getCharacterCountExcludingSpaces: (text) => {
    //Esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    /*
    En este código, se define una variable llamada caraSig, en la que se utiliza el método replace() para eliminar los espacios y signos de puntuación del texto ingresado. 
    Luego, se utiliza el método split() para convertir el texto en un array de caracteres. 
    Si el primer elemento de ese array es vacío, la función retorna 0. 
    De lo contrario, retorna la longitud del array de caracteres resultante, lo cual sería el recuento de caracteres excluyendo espacios y caracteres especiales.
    */ 
    const caraSig = text.replace(/[.,; ?¿!¡{}:'"-]/gi,"").split("");
    if (caraSig[0]==="") {
      return 0
    }
    else { 
      return caraSig.length
    }
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    /*
    Este código calcula la longitud promedio de las palabras en el texto. 
    Primero, se define un regex de espacios en una variable llamada "espacios"
    Luego, se inicializa una variable "sum" en 0. 
    Se define una variable llamada arrPalabras, en la que el texto se recorta y se divide en un array de palabras utilizando el regex "espacios". 
    Luego, se itera sobre cada palabra del array y se suma su longitud a la variable "sum". 
    Finalmente, se calcula el promedio dividiendo la suma por la cantidad de palabras y se redondea a 2 decimales antes de retornarlo.
    */
    const espacios = /[\s]+/
    let sum = 0
    const arrPalabras = text.trim().split(espacios)
    
    for(let i=0; i<arrPalabras.length ; i++) {
      sum = sum + arrPalabras[i].length
      
    }
    const prom = sum/arrPalabras.length
  
    return parseFloat(prom.toFixed(2))
 
  },
  getNumberCount: (text) => {
    //Esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    /*
    Este código cuenta cuántos números hay en el texto. 
    Primero, se utiliza el método match junto con una expresión regular para encontrar todos los números en el texto. 
    Luego, se verifica si la longitud del array resultante es mayor a cero. Si es así, se retorna esa longitud como resultado, es decir, la cantidad de números encontrados en el texto, es decir, la cantidad de numero que se encontraron. 
    De lo contrario, se retorna cero.
    */ 
    const num = text.match(/\b\d+(\.\d+)\b|\b\d+\b/g);
    if(num.length >0) {
      return num.length
    }
    else {
      return 0
    } 
  },
  
  getNumberSum: (text) => {
    //Esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    /*
    Este código calcula la suma de todos los números que se encuentran en el parámetro text.
    Primero, se inicializa la variable suma en cero. 
    Luego, se define la variable Number y se utiliza el método match junto con una expresión regular para encontrar todos los números en el texto. 
    Después, se recorre cada elemento del array Number y se va sumando su valor a la variable suma. 
    Finalmente, se retorna el valor de suma, que es la suma total de los números encontrados en el texto. 
    Si no se encuentra ningún número, se retorna cero.
    */
   
    let suma = 0
    const Number = text.match(/\b\d+(\.\d+)\b|\b\d+\b/g)
   
    for(let i=0; i<Number.length; i++) {
      
      if (Number.length===0){
      return 0
      }
      else {
      suma = suma + parseFloat(Number[i])
      return suma
      }
    }
    
  },

};
export default analyzer;