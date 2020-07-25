// PAGINA 169 - 5.10
// Realice un algoritmo que lea dos vectores de cien elementos y que calcule
// la suma de éstos guardando su resultado en otro vector, el cual se
// debe presentar en forma impresa.

let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let arraySuma = [];
for(var i = 0; i < array1.length; i++)
{
arraySuma[i] = array1[i] + array2[i];
}
console.log(` La suma de los elementos de los Arrays es: ${arraySuma}`);

