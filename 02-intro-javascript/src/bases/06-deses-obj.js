//desestructuración 
//asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad : 45,
    clave: 'iroman',
};

//const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornarPersona = (usuario)=> {
    const {nombre, edad, clave} = usuario;
    console.log(edad,clave, nombre);
}

retornarPersona(persona);

//se puede hacer así también
//ej con una propiedad que no tiene el obj (rango)
// en caso de que si la tenga, mostrará la del obj y no la del parametro.

const retornarUsuario = ({nombre, edad, rango = 'capitán'})=>{
    console.log(nombre, edad, rango);
};
retornarUsuario(persona);

const retornarUser = ({clave, edad, rango = 'capitán'})=>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 54.45041,
            lng: -32.263,
        }
    }
};
// const avenger = retornarUser(persona);
// console.log(avenger);

//asignación desesestructurante 
const {nombreClave, anios, latlng} = retornarUser(persona);
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);