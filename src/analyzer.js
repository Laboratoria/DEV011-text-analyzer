const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const numPalabras = text.trim().split(" ").length;
    if(text === ""){
      return numPalabras - 1;
    }
    else return numPalabras;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //removiendo los espacios y signos
    const textoSinEspaciosYSignos = text.replace(/[^\w\s]|_/g,'').replace(/\s+/g,'');
    //contabilizando los caracterest restantes
    const numCaracteres = textoSinEspaciosYSignos.length;
    return numCaracteres;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    /*removemos los simbolos y signos del texto (si es que los hay)
    y usamos .split para obtener un array con strings separados por un
    espacio (palabras)*/
    const Palabras = text.trim().replace(/(?![.,])[^a-zA-Z0-9\s]|_/g,'').split(" ");
    let sumaLongitudPalabras = 0;
    
    if(Palabras){
      for(let i = 0; i < Palabras.length; i++){
      //hacemos una suma iterativa con el valor .length de cada elemento y lo almacenamos en la variable 'sumaLongitudPalabras'
        sumaLongitudPalabras += Palabras[i].length;
      }
      //creamos variable para hallar y almacenar la longitud promedio
      const longitudPromedio = sumaLongitudPalabras/Palabras.length;
      return parseFloat(longitudPromedio.toFixed(2));
    }
    else return 0;
    //bucle 'for' para recorrer los elementos del array 'Palabras'
    
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //matching los numeros que se encuentran en el text input
    const regex = /\b\d+(\.\d+)?(?![A-Za-z])\b/g ;
    const Numeros = text.match(regex);

    if (Numeros){
      return Numeros.length
    }
    else return 0;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const regex = /\b\d+(\.\d+)?(?![A-Za-z])\b/g ;
    const Numeros = text.match(regex);
    let suma = 0;

    if (Numeros){
      for(let i = 0; i < Numeros.length; i++){
        suma += parseFloat(Numeros[i]);
      }
      return suma;
    }
    else return 0;
  },
};

export default analyzer;
