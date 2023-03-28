// operador ternario

const activo = true;

//let mensaje = '';

// if(activo){
//     mensaje = 'activo';
// } else {
//     mensaje = 'inactivo';
// }

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//const mensaje = (activo) ? 'Activo' : null; cuando queremos que en el caso contrario no haga nada.

const mensaje = activo && 'Activo'; //es el mismo resultado.

console.log(mensaje);