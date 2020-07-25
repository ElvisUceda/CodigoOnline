// PAGINA 169 - 5.13
// Se tiene en un arreglo cien elementos representando calificaciones de
// los estudiantes de una escuela. Realice un algoritmo que lea el arreglo
// y calcule la calificación promedio del grupo, además, que cuente los estudiantes
// que obtuvieron calificaciones arriba del promedio del grupo.

let calificaciones = [12, 14, 19, 10, 05, 15, 19, 18, 09, 11, 20, 16, 17, 08, 05];
let suma =0;

for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
    
}

let calPromedio = suma /calificaciones.length;
console.log(`La calificación promedio del grupo es: ${calPromedio}`);
let contador = 0;
let mayorPromedio = 0;
 while (contador < calificaciones.length){
    if (calificaciones[contador] > calPromedio){
        mayorPromedio++;
        }
   contador += 1;
}
console.log(`Las calificaciones que son mayores a la calificacion promedio del grupo son: ${mayorPromedio}`); 