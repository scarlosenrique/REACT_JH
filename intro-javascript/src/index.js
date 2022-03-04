const nombre = "Carlos";
const apellido = "Salinas";

//const nombreCompleto = nombre + " " + apellido;

const nombreCompleto = `${ nombre } ${ apellido }`; 

console.log( nombreCompleto );

function getSaludo(nombre) {
   return "Hola Mundo Carlos"
}

console.log( `este es un texto: ${ getSaludo() } `)
