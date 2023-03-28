// IMPORT, EXPORT Y FUNCINOES COMUNES DE ARREGLOS

import heroes  from '../data/heroes';

// USANDO FIND

export const getHeroesById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroesById(3));

//PARA RETORNAR UN ARREGLO, CON FILTER

export const getHeroesByOwner = (owner) =>{
    return heroes.filter((heroe) => heroe.owner === owner);
}
//console.log(getHeroesByOwner('DC'));

// en caso de tener otro obj o arreglo en el otro archivo, puedo ponerle export en el nombre y poner en el import de este archivo entre corchetes el nombre del otro element   así:      { otro arreglo }
// también se pueden poner todas las exportanciones juntas en el otro archivo export {heroes, owners} y dentro de éste ambos entre corchetes import {heroes, owners} from...
