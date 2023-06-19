function titulo(titulo) {
    if(titulo===" ") return false;
    return titulo;
  }
  function contenido(contenido) {
    if(contenido===" ") return false;
    return contenido;
  }
function posts(post) {
    return post;
}
 
function contarLetras(frase) {
    // Eliminar los puntos y las comas de la frase
    var fraseSinPuntuacion = frase.replace(/[.,]/g, '');
  
    // Obtener la cantidad de letras de la frase sin puntuación
    var cantidadLetras = fraseSinPuntuacion.replace(/\s/g, '').length;
  
    // Devolver la cantidad de letras
    return cantidadLetras;
  }
  
  // Ejemplo de uso:
  var frase = prompt("Ingresa una frase:");
  var resultado = contarLetras(frase);
  console.log("La frase tiene " + resultado + " letras (sin contar puntos ni comas).");
  
  module.exports = {titulo,contenido,posts};