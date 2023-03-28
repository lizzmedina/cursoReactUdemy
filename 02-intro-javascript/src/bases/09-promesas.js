// promesas
import { getHeroesById } from "./bases/08-impor-expor";

// const promesa = new Promise((resolve, reject)=>  {
//     setTimeout(() => {
//         //console.log('2 seg después');
//         const heroe = getHeroesById(2);
//         resolve(heroe);
//         reject('no se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe)=> {
//     console.log('heroe',heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=>  {
        setTimeout( () => {
            //console.log('2 seg después');
            const p1 = getHeroesById(id);
            if(p1){
                resolve(p1);
            } else {
                reject('no se pudo encontrar el heroe');
            }    
        }, 2000);
    });
}
getHeroeByIdAsync(10)
    //.then( heroe => console.log('heroe', heroe))
    .then( console.log)
    //.catch(err => console.warn(err));
    .catch(console.warn);