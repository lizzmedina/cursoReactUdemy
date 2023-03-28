//Objetos literales

const persona = {
    nombre: "Tony",
    apellido: "stark",
    edad: 45,
    direccion:{
        calle: 7,
        numero: 28,
        ciudad: "tulua",
    }
};

//usamos el  spred operator para hacer una copia de mi objeto y poder modificarlo a mi antojo
const persona2= {...persona};
persona2.nombre = "peter";
//consolo.table(persona);
console.log({persona});
console.log(persona2);