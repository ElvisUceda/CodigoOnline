
// Ejercicio 3.2
/* let hTrab = +prompt("Ingrese horas trabajadas en la semana");
let pHora = +prompt("Ingrese pago por hora en soles");
let hExtra = 0;
let hNormales = 0;
let sueldo = 0;
let pHoraExtra = 0; */
/* debugger; 

if (hTrab <=40 && hTrab >=0){
    hNormales = hTrab;
    hExtra = 0;
    pExtra =0;
}
else {
    hNormales = 40;
    hExtra = hTrab - 40;
    pHoraExtra = pHora * 2

}

sueldo = (hNormales * pHora + hExtra * pHoraExtra);
console.log(`Su sueldo semanal es: ${sueldo}`); */



/* let nombre1 = prompt("Ingrese el nombre de la persona 1");
let edad1 = +prompt("Ingrese la edad de la persona 1");

let nombre2 = prompt("Ingrese el nombre de la persona 2");
let edad2 = +prompt("Ingrese la edad de la persona 2");

let nombre3 = prompt("Ingrese el nombre de la persona 3");
let edad3 = +prompt("Ingrese la edad de la persona 3");

let edadMenor;
let nombreMenor;

edadMenor = edad1;
nombreMenor = nombre1;
 if (edad2 < edad1) {
     edadMenor = edad2;
     nombreMenor = nombre2;
 } if (edad3 < edad2) {
     edadMenor = edad3;
     nombreMenor = nombre3;
 }

console.log(`La edad menor es ${edadMenor} y su nombre es ${nombreMenor}`); */

 
/* let precio = +prompt("Ingrese el precio del producto");
let costo;
let dscto;

if (precio >= 200){
    dscto = 0.15*precio;
} else {
    if (precio > 100 && precio < 200) {
        dscto = 0.12 * precio;
    } else {
        dscto = 0.10 * precio;
    }
}

costo = precio - dscto;
console.log(`El costo del producto es: ${costo}`);
console.log(`El descuento aplicado al producto es: ${dscto}`); */


/* let categoria = +prompt(`Ingrese el tipo de cobertura: 
            1 = Cobertura Amplia(A)
            2 = Daños a terceros(B)`);

            let edad = +prompt("Ingrese su edad:");

            
            let costo_total=0;
            let bebida=0;
            let lentes=0;
            let enfermedad=0;
            let costo_edad=0;

            if (categoria == 1) {
                bebida = 0.10*1200;
                lentes = 0.05*1200;
                enferemedad = 0.05*1200;
                if (edad>40) {
                    costo_edad = 0.20*1200;
                }else{
                    costo_edad = 0.10*1200;
                }
                costo_total = 1200 + bebida + lentes + enfermedad + costo_edad;
            } 

             else {
                if (categoria == 2) {
                    bebida = 0.10*950;
                lentes = 0.05*950;
                enferemedad = 0.05*950;

                if (edad>40) {
                    costo_edad = 0.20*950;
                }else{
                    costo_edad = 0.10*950;
                }
                } 
                
                else {
                    console.log("Ingrese una categoria correcta¡");
                }

                costo_total = 950 + bebida + lentes + enfermedad + costo_edad;
            }

            

            console.log(`El costo por esta categoria es : ${costo_total}`); */


let monto = +prompt("Ingrese monto recibido");
let paquete;

if (monto >= 50000) {
    paquete = "Paquete A: Televisor, Un modular, 03 pares de zapatos, 05 camisas y 05 pantalones";
} else  if 
    (monto >= 20000 && monto < 50000) {
        paquete ="Paquete B: Grabadora, 03 pares de zapatos, 05 camisas y 05 pantalones";
    } else if (monto < 20000 && monto >= 10000) {
            paquete = "Paquete C: 02 pares de zapatos, 03 camisas y 03 pantalones";
        } else {
            paquete = "Paquete D: 01 par de zapatos, 02 camisas y 02 pantalones";

        }
         
console.log(`Usted se puede comprar: ${paquete}`);



