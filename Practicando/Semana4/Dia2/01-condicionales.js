let edad = +prompt("Ingrese su edad");
let imc = 0;
debugger;
if (edad > 17) {
    let peso = +prompt("¿Cuanto pesa joven (Kgs.)?");
    let altura = +prompt("¿Cuánto mide joven (mts.)?");
	imc = peso / (altura * altura);
    
    if (imc > 30) {
        console.log(`No, no hay pase laboral`);
        console.log(`Usted está en riesgo por exceso de peso`);
    } else {
        console.log(`Si hay pase laboral`);
    }
    console.log(`Su índice de masa corporal es: ${imc}`);
    } else {
        console.log(`No, no hay pase laboral`);
        console.log(`Es usted muy moco`);
    }
    console.log(`Fin del programa, hasta pronto`);