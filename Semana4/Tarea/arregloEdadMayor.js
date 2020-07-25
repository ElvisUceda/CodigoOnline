// PAGINA 168 
// 5.6 Realice un algoritmo que lea los nombres y las edades 
// de diez alumnos, y que losdatos se almacenen en dos vectores,
// y con base en esto se determine el nombre del alumno con la edad mayor del arreglo.

let alumnos = ["elvis", "juan", "zoila", "rosmery", "nataly", "sebastian", "diego", "sofia", "karla", "mirko"];
let edades = [19, 20, 35, 28, 36, 22, 29, 33, 21, 12];
let edadMayor=20;
let nombreMayor;
let i = 0;

for (let i = 0; i < edades.length; i++) {
    /* console.log(`i = ${i}`); */
        if (edades[i] > edadMayor)
         {
             edadMayor = edades[i];
             nombreMayor = alumnos[i];
            /*  continue; */
            
        }
        
}

console.log(`El alumno con mayor edad es: ${nombreMayor[i]} y tiene ${edadMayor}`);
// no está jalando el nombre correcto



