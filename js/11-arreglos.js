/* 

    Arrelgos

    Un arreglo es una colección de datos, una lista de elementos.

    En JS los arreglos se definen utilizando los corchetes [] y los elementos internos se separan por comas ,

    Pueden conener el mismo tipo de dato o de diferentes tipos, incluso pueden contener arreglos anidados.

*/


let frutas = ["Manzana", "Sandia", "Piña", "Naranja", "Durazno"];
let calificaciones = [10, 8, 4, 10];
let misDatos = ["Steb", "24", true];
let coordenadas = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ];

console.log(frutas);
console.log(calificaciones);
console.log(misDatos);
console.log(coordenadas);

/* 

    Propiedad Lenght 👉🏼 Nos indica la cantidad de los elementos que tenemos dentro del arreglo.

    Indice 👉🏼 Nos indica la "posición" del elemento dentro del arreglo.

    Para acceder a los elementos de un arreglo utilizamos su índice. Los arreglos siempre comienzan con el índice 0.

*/


console.log(frutas.length); // Cantidad de elementos
console.log(calificaciones.length);
console.log(misDatos.length);
console.log(coordenadas.length);

/* 

    Indice 👉🏼 Nos indica la "posición" del elemento dentro del arreglo.

    Para acceder a los elementos de un arreglo utilizamos su indice. Los arreglos siempre comienzan con el indice 0 y se coloca su valor entre corchetes []

*/

console.log("Mi fruta favorita es: "  + frutas[1]);
console.log("Mi calificación con Limón es: " + calificaciones[2]);
console.log("Mi apodo es " + misDatos[0] + " y tengo " + misDatos[1] + " años");
console.log("Este dato está en un arreglo anidado: " + coordenadas[1][2]);

/* 

    Métodos de los arreglos:

    push() 👉🏼 arregla uno o más elementos al final del arreglo.
    pop() 👉🏼 elimina el último elemento del arreglo y lo devuelve.
    shift() 👉🏼 elimina el primer elemento del arreglo y lo devuelve.
    unshift() 👉🏼 agrega uno o más elementos al inicio del arreglo.
    indexOf() 👉🏼 devuelve el indice del primer lemento que coincida con el valor especificado, o regresa -1 si no encuentra ni nanais,

*/

console.log(frutas.length); // 5

frutas.push("Uvas", "Pera");

console.log(frutas.length) // 7


let ultimaFruta = frutas.pop();

console.log(frutas.length); // 6

console.log(ultimaFruta);


let primeraFruta = frutas.shift();

console.log(frutas.length); // 5

console.log(primeraFruta);


frutas.unshift("Maracuyá", "Fresa", "Mango");

console.log(frutas.length); // 8


let indiceFruta = frutas.indexOf("Piña");

console.log(indiceFruta);

/* 

    Iteración por arrays

    Tomamos una lista de datos y accedemos a sus datos, a través 

*/

for (i = 0; i < frutas.length; i++) {
    console.log("Se me antojó una: " + frutas[i]);
}