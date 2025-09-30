/* 

  Concatenacion de cadenas de texto es el proceso de unir dos o mas cadenas de texto en una sola.
  Esto se hace utilizando el operador  + o las plantillas literales (tample strings) se usan con backticks ( acent invertido o comillas agudas) ``

*/

let miNombre ="Esteban"
let miApellido ="Castillo"

//Usando el operador

let nombreCompleto = miNombre +" " + miApellido;
console.log(nombreCompleto);

// Usando plantillas literles

let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} y tengo ${14+10} años`;


/* 

  Si se utilizan el operador + con valores nmericos se suman. pero i se usa con cadenas de caracter se concatenan.

*/

let resultado = 4 + 10;
console.log(resultado);15

let resultaDos = "4" + 10;
console.log(resultaDos); // 510