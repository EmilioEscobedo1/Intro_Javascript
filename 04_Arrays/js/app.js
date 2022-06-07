//variables
let miArray = [];

//mostrar cantidad de elementos en el array
console.log(miArray.length);

//agregamos valores al array
miArray.push(prompt('Ingresa el nombre de una fruta'));
console.log(miArray);
miArray.push(prompt('Ingresa el nombre de otra fruta'));
console.log(miArray)

//agregar elemento al principio del array
miArray.unshift('mandarina');
console.log(miArray)

//eliminar el ultimo elemento del array
miArray.pop();