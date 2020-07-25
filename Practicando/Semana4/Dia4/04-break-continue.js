let nombres =["jorge", "teresa", "javier", "leonor", "daniel", "francisca"];
let edades =[20, 15, 75, 68, 45, 25];

// que el usuario busque un nombre, y cuando el algoritmo lo encuentre
// se imprima su edad y la posicion en la que se encuentra

let buscar = prompt("Ingrese el nombre a buscar en la BD");
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    console.log(`i = ${i}`);
    if (nombres[i] === buscar) {
        console.log(`Encontrado ${buscar}`);
        console.log(`Edad: ${edades[i]}`);
        encontrado = true;
        break;
    } 
}

if (!encontrado){
    console.log("No se ha encontrado al usuario");
} 

//------------------------uso del continue
// De los arreglos anteriores, imprimir la edad y nombre 
// de las personas menores de 60 años.

for (let i = 0; i < edades.length; i++) {
    if(edades[i] > 60){
        continue;
    }
    console.log(`${nombres[i]} tiene ${edades[i]} años`);
}
    
    

