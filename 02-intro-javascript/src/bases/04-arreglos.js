// arreglos en JS

const arreglo = new Array(100); // si necesito una cantidad de elementos determinado
// pero puedo agregarr más si lo necesito así:
arreglo.push(1);

console.log(arreglo);

//pero debería usarlo con []
const arreglo2 = [1,2,3,4];

//arreglo2.push(1);
//arreglo2.push(2);
//arreglo2.push(1);

let arrelgo3 = [...arreglo2, 5];
const arreglo4 = arrelgo3.map(function (number) {
    return number *2;
    
});
//const arreglo4 = arrelgo3.map();

console.log(arreglo2);
console.log(arrelgo3);
console.log(arreglo4);