const nombre = 'Fernando';
const apellido = "Herrera";

const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
const nombreCompleto2 = `${nombre} ${apellido} ${1+1}`;
console.log(nombreCompleto2);

function getSaludo(){
    return "hola mundo";
}

console.log(`este es un texto: ${ getSaludo() } `);