/* 2.1 Dado el siguiente array, crea una copia usando spread operators. */

const pointsList1 = [32, 54, 21, 64, 75, 43]
const newPointsList1 =  [...pointsList1]

console.log()
console.log("Ejercicio 2.1:")

console.log(newPointsList1)


/* 2.2 Dado el siguiente objeto, crea una copia usando spread operators. */

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const newToys1 = {...toy1}

console.log()
console.log("Ejercicio 2.2:")

console.log(newToys1)

/* 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos. */

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const combinedPointsList = [...pointsList, ...pointsLis2]

console.log()
console.log("Ejercicio 2.3:")
console.log(combinedPointsList)

/* 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToys = {...toy,...toyUpdate}

console.log()
console.log("Ejercicio 2.4:")
console.log(newToys)

/* 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

console.log()
console.log("Ejercicio 2.5:")

const newColors = [...colors.slice(0, 1), ...colors.slice(2)]

console.log("Colors Array:", colors)
console.log("New Array: ",newColors)
