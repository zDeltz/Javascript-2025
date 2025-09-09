/* 

    Tipos de Datos

    Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de programación.

    En JS, esxisten varios tipos que se pueden agrupar en dos categorias principales: primitivos y complejos u objetos.

    Cada tipo de dato tiene sus propias caracteristicas y usos especificos en la programación.

    1. Primitivos

    Datos básicos que no se consideran "objetos" y no tienen "metadatos".

    👉🏼 Number o Número

    Representan valores numéricos ya sean enteros o decimales (punto flotante).

    👉🏼 String o Cadenas de Caracteres

    Representan texto. El texto se coloca entre comillas dobles o comillas simples: "text" o 'text'. Se valen las dos, pero hay que ser consistentes.

    👉🏼 Booleans o Boleanos

    Representan un valor lógico que puede ser '"true" o "false". 

    👉🏼 Undefined o Indefinido

    Es el valor que se asigna a una variable que ha sido declarada pero no inicializada.

    👉🏼 Null o nulo

    Representa la ausencia intencional de cualquier valor u objeto. Es un valor indica que una variable no tienen ningún valor asignado.

*/

/* Numbers */

let miNumero = 5;
let miNumeroDecimal = 7.7;

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = "Esteban";
let miApellido = "Castillo";

console.log(miNombre);
console.log(miApellido);

/* Boolean */

let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);

/* Undefined */

let aprobareDesarrolloApps;  //  Inicializar una variable sin valor
console.log(aprobareDesarrolloApps);

/* Null */

let meQuiere = null;
console.log(meQuiere);

/* 

    2. Complejos o de Objetos

    👉🏼 Arrays o Arreglo

    Es un conjunto de datos que se almacenan en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y están separados por comas , 

    👉🏼 Object o Objeto

    Es un conjunto de múltiples datos en pares "clave" - "valor".
    Se escriben entre {} y separados por comas ,

    👉🏼 Functions o Funciones

    Es un tipo de dato que puede ser "invocado". Se declaran con la palabra reservada "function" y el código que se ejecuta va entre {"código"}

*/

let misSeries = [ "Arcane" , "Un Show Más" , "Hora de Aventura" ];
let misNumeros = [ 5 , 10 , 8 , 13 , 88 ];
let tutifruti = [ "Voja el lobo" , 21 , true ];

console.log( misSeries[0] );  // Arcane
console.log( misNumeros[4] );  // 88
console.log( tutifruti[1] );

/*  Object  */

let perro = {
    nombre: "Firulais",
    edad: 5,
    color: "negro",
    ladra: true,
    muerde: false
}

console.log( perro.nombre );
console.log( perro.edad );
console.log( perro.muerde );

/*  Functions  */

function saludar() {
    //Código a ejecutar
    console.log("¡Hola mamá! Estoy aprendiendo JS 😊"); 
}

//  Llamamos a la función

saludar();