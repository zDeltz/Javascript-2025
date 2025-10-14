/* 

    Bucles
    
    Son estructuras de control que permiten repetir un bloque de código varias veces, hasta que se cumpla una condición especifica.

    Los más comúnes en JS son for, while y do...while

    1. Bucle for

    El bucle se utiliza cuando sabemos cuantas veces queremos repetir un bloque de código. La sintaxis es:

    for (inicialización; condición; incremento) {
        // el código que se va a repetir su ejecución.
        ...
    }

    Inicialización 👉🏼 variable con un valor inicial
    Condición 👉🏼 se evalúa una expresión si es true se ejecuta el bucle
    Incremento 👉🏼 aumenta el valor de la variable en cada iteración

*/

for (let i = 0; i < 5; i++) {
    console.log("Repetición: " + i + "  Oye Cucu, papá se fue 😥");
}

/* 

    2. Bucle While

    El bucle while se utiliza cuando no sabemos cuántas veces queremos repetir un bloque de código, pero si queremos que se repita mientras una condición es verdadera. Sintaxis:

    while (condición) {
        // Código que se repita su ejecución
        incremento
    }

*/

let j = 0; // inicialización

while (j < 5) {
    // Código a ejecutar en bucle
    console.log("Otro buclecito");
    j++;  // Incrementar
}

/* 

    3. Bucle do..while

    Este bucle es similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez. Ya que la condición se evalúa después de la ejecución. Sintaxis:

    inicialización

    do{
        // Código que se ejecuta almenos una vez
        incremento
    } while(condición);

*/

let k = 0;

do {
    console.log("HUNTRIX Rules! 🤟🏼");
    k++;
} while (k < 5);