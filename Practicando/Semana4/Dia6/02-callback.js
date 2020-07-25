const buscarPorDni = (dni, callback) => {
  // conecto a la BD
  // hago la consulta del DNI
  // RETORNO LA INFORMACION DE LA PERSONA
  let nombreEncontrado = "-----------";
  setTimeout(function () {
    console.log("Buscando en la base de datos");
    nombreEncontrado = "Elvis Uceda Mostacero";
    callback(nombreEncontrado);
  }, 2000);
  
};


let encontrado = buscarPorDni("12345678", (nombre) => {console.log(nombre);});




