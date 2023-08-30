const analyzer = {
  getWordCount: (text) => {
    const palabras = text.split(" ");
    const palabrasNoNumeros = palabras.filter(element => isNaN(element));
    return palabrasNoNumeros.length;

  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const signosPunt = /[.,/#!$%^&*;:{}=\-_`~()""'...¿?¡!+]/g;
    const textoSinEspacio = text.replace(signosPunt, "").replace(/\s/g, "");
  
    return textoSinEspacio.length;
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(" ");
        
    let longitudes = [];

    for (let indice = 0; indice < palabras.length; indice++) {
      const palabra = palabras[indice];
      const longitudPalabra = palabra.length;
      longitudes.push(longitudPalabra);
    }

    const sumaLongitudes = longitudes.reduce((total, longitud) => total + longitud, 0);
    const media = sumaLongitudes / longitudes.length;
    
    return media.toFixed(1);
  },
  getNumberCount: (text) => {
    const digitos = text.match(/\d/g);
    return digitos ? digitos.length: 0;
  },
  getNumberSum: (text) => {
    let numeros = 0;
    for (let indice = 0; indice < text.length; indice++) {
      if (!isNaN(Number(text[indice]))) {
        numeros += Number(text[indice]);
      }
    }
    return numeros;
  },
}
export default analyzer;
