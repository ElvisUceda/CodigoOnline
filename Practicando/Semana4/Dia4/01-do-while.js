// do-while
// Hacer un programa en el que se ingresen N notas
// para calcular el promedio de todas ellas.

// El usuario ingresa las notas una a una hasta que
// ingresa el número -1, el cual es el indicador del fin de
// ingreso.


/* let semaforo = true;
let notas =[];
let suma = 0;
do {
    let nota = +prompt("Ingrese una nueva nota");
    if (nota === -1) {
        semaforo = false;
    } else {
        notas.push(nota);
        suma += nota;
    }
} while (semaforo === true);
console.log(`Promedio de notas ${suma / notas.length}`); */


// Ciclo FOR
let numeros = [5, 7, 8, 6, 5, 12, 10];

console.log(numeros);

let i = 500;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i] * numeros[i];
}

console.log(numeros);
console.log(i);