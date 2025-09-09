/* 

    Variables

    Las Variables son contenedores que almacenan datos. En JS, se pueden declarar variables utilizando las palabras clave "var", "let" o "const".

    1. Declaración de Vraibles

    👉🏼 var: Es la forma más antigua de declarar variables. Tiene un alcance global o de función y puede ser redeclarada y actualizada.

    👉🏼 let: Introducida en ES6, tiene un alcance de bloque y puede ser actualizada pero no redeclararse dentro del mismo alcance.

    👉🏼 const: También introducida en ES6, tiene un alcance de bloque y no puede ser ni redeclarada ni actualizada. Se utiliza para valores que no deben cambiar.

*/

/* Declaración con var */

var nombre = "Steb";
console.log(nombre);

nombre = "Gatico";

/* Declaración con let */

let edad = 23;
console.log(edad);

edad = 30;  //  Actualización
console.log(edad);

/* Declaración con const */

const PI = 3.1416;
console.log(PI);

PI = 4.6701;  //  Error de tipo no se puede actualizar una constante.