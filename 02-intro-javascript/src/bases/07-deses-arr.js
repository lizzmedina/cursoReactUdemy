// desestructuracción de arreglos

const personajes = ['goku', 'vegeta', 'trunks'];

const [, ,p3] = personajes;

console.log(p3);

const retornaArreglo = ()=> {
    return['ABC', 123];
}

// const arr = retornaArreglo();
// console.log (arr); //aquí lo veo como un arreglo

//desestructuracción 

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros); //aquí lo veo como constantes independientes

//TAREA
// 1- el primer valor del arr se llamará nombre
//2- el 2° se llamará cambiarNombre

const usarEstado = (valor) => {
    return [valor, () => {console.log('hola mundo')} ];
}

const arr = usarEstado ( 'goku' );
// console.log(arr);
// arr[1]();


//arreglo desestructurado - MEJOR OPCIÓN

const [nombre, setNombre] = usarEstado ( 'goku' );

console.log(nombre);
setNombre();