let anio = +prompt("Ingrese el año a evaluar");
debugger;
if ((anio % 4 === 0 && anio % 100 !==0) || anio % 400 ===0) {
    console.log(`El anio ${anio} SI es bisiesto`);
} else {
    console.log(`El año ${anio} NO es bisiesto`);
}