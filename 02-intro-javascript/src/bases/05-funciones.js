//funciones en JS

const  saludar = function(nombre) {
    return `hola, ${nombre}`;
}
//usar función flecha así : 
const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}
// si no usamos más q un return, podemos precindir del mismo.
const saludar3 = (nombre) => `hola, ${nombre}`;

console.log(saludar("liza"));
console.log(saludar2("daneris"));
console.log(saludar3("liz"));


const getUser = ()=>{
    return{
        uid: 'ABC123',
        userName: 'el_papi1402',
    }
}
//también podríamos reemplazazr el return por parentesis ()

// const getUser = ()=>
//     ({
//         uid: 'ABC123',
//         userName: 'el_papi1402',
//     });

console.log(getUser());


//TAREA
// 1-convertirlo a función fecha
// 2- debe retornar un obj implicito
// 3- pruebas 

const getUsuarioActivo =  (nombre) => ({
        uid: 'ABC4556',
        userName: nombre,
    });



const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);