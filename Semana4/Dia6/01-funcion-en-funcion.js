// Se pueden crear funciones dentro de otras funciones
/* debugger; */
const areaCirculo = (radio) => {
  const PI = 3.1416;

  const cuadrado = (numero) => {
    return numero * numero;
  };

  return PI * cuadrado(radio);
};

let rpta = areaCirculo(13);
console.log(rpta);

/* const PI = 3.1416;
const areaCirculo = (radio, numero) => {
  
  return PI * (numero * numero);

}

let rpta = areaCirculo(PI, 20);
console.log(rpta); */
 

const sumar = (a, b) => {
  console.log(a + b);
  
};
sumar(1, 8);
sumar(1, 20);
sumar(100, 20);
