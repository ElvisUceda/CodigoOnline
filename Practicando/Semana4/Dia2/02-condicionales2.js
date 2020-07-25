let edad = +prompt("Ingrese su edad");
let peso = +prompt("¿Cuanto pesa joven (Kgs.)?");
let altura = +prompt("¿Cuánto mide joven (mts.)?");

let imc = 0;
imc = peso / (altura * altura);

if (edad > 17 && imc <=30)  {
    console.log(`Si hay pase laboral`);
} else {

    console.log(`No, no hay pase laboral #quedateEnCasa`);
    console.log(`Es usted muy moco 😢 o el IMC excede el valor de 30`);
}
console.log(`Su indice de masa corporal (IMC) es: ${indiceMasaCorporal}`);
console.log("Fin del programa, hasta pronto! 😷");
    
    