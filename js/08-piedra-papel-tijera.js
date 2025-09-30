/* 

    
    Juego Piedra, Papel o Tijera

    Crear un juego interactivo donde el usuario puede jugar contra la computadora.

    Reglas:

    - Piedra vence Tijera
    - Papel vence Piedra
    - Tijera vence Papel
    - Si ambos escojen lo mismo es empate.

    
    Pasos para Implementar:

    - Definir las opciones del jugador
    - Generar una opción aleatoria para la computadora.
    - Comparar estas opciones y determinar el ganador.
    - Mostrar el resultado.


    Estructuras a utilizar:
    
    - Variables
    - Condicionales
    - Gemeración de un número aleatorio (Math.random)
    - Operadores lógicos y de comparación
    - Concatenacion de cadenas (strings)
    - Plantillas laterales (template strings)
    - Comentarios

*/

//  1. Variables - Opciones del Jugador
const  opcionJugador = prompt("¡Para jugar escribe: piedra, papel o tijera!"); 
//  piedra, papel o tijera

// 2. Opción de la computadora
const numeroAleatorio = Math.random();  //  Genera un número aleatorio entre 0 y 1

let opcionComputadora;

// 3. Condicional - Asignamos opción según número aleatorio

if (numeroAleatorio < 0.33) {
    opcionComputadora = "piedra";
} else if (numeroAleatorio < 0.66) {
    opcionComputadora = "papel";
} else {
    opcionComputadora = "tijera";
}

// 4. Mostrar las elecciones
console.log("🗿 Piedra, 🧻 Papel o ✂ Tijera");
console.log("Tu elección es: " + opcionJugador);
console.log("La compu eligió: " + opcionComputadora);
console.log("----------------------------------------");

// 5. Determinar el genador a partir de condicional
let resultado;

if (opcionJugador === opcionComputadora) {
    resultado =`🤝🏼 ¡EMPATE! Ambos jugando eligieron ${opcionJugador}`;
} else if (opcionJugador === "piedra" && opcionComputadora === "tijera") {
    resultado = `🎉 ¡Ganaste! Piedra vence a Tijera`;
} else if (opcionJugador === "papel" && opcionComputadora === "piedra") {
    resultado = `🎉 ¡Ganaste! Papel vence a Piedra`;
} else if (opcionJugador === "tijera" && opcionComputadora === "papel") {
    resultado = `🎉 ¡Ganaste! Tijera vence a Papel`;
} else {
    resultado = `😥 Perdiste, la compu te ganó`
}

// 6. Mostrar el Resultado

console.log(resultado);