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
    const signosPunt = /[.,/#!$%^&*;:{}=\-_`~()""'...¿?¡!+<>¬|]/g;
    const textoSinEspacio = text.replace(signosPunt, "").replace(/\s/g, "");
  
    return textoSinEspacio.length;
  },
  getAverageWordLength: (text) => {
    const cifras = /\b\d+(\.\d+)?\b/g;
    const signosPunt = /[.,/#!$%^&*;:{}=\-_`~()""'...¿?¡!+<>¬|]/g;
    const palabrasSinCifras = text.replace(cifras, "").replace(signosPunt, "");
    const textoSinEspacios = palabrasSinCifras.trim();
    const palabras = textoSinEspacios.split(" ");
          
    const longitudes = [];

    for (let indice = 0; indice < palabras.length; indice++) {
      const palabra = palabras[indice];
      const longitudPalabra = palabra.length;
      longitudes.push(longitudPalabra);
    }

    const sumaLongitudes = longitudes.reduce((total, longitud) => total + longitud, 0);
    const media = sumaLongitudes / longitudes.length;
    
    return media.toFixed(2);
  },
  getNumberCount: (text) => {
    const cifras = text.match(/\b\d+(\.\d+)?\b/g);
    return cifras ? cifras.length: 0;
  },
  getNumberSum: (text) => {
    const cifras = text.match(/\b\d+(\.\d+)?\b/g);
    
    let sumaNumeros = 0;
    if (cifras) {
      for (let indice = 0; indice < cifras.length; indice++) {
        sumaNumeros += parseFloat(cifras[indice]);
      }
    }
    return sumaNumeros;
  },
}
export default analyzer;
