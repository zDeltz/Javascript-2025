/* 

  Condicionales

  Son las estructuras de control que permiten ejecuta diferentes bloques de codigo segun una condicion (Verdadera o Falsa).
  
  1. if

  Evala una condicion y si es verdadera, ejecuta el bloque de codigo dentro de sus llaves.

  Sintaxis:

  if (condicion) {
    // Bloque o codigo que se ejecuta

  }

*/

let edad = 24;

if (edad >= 18){
  //codigo que se ejecuta
    alert("eres mayor de edad, date!")
}

/* 

  2. Else

  Permite ejecutar un bloque de codigo si la condicion es falsa.

  sintaxis

  if (condicion) {
    //condicion que se ejecuta si la condicion es verdadera
  }   else {
    // dodigo que se ejecuta si la condicion es falsa  
    }
*/

let hora = 16;

if (hora < 12) {
  console.log("buenos dias tlacuache aplastado! 🐭🐀")
} else {
  console.log("buenas tardes Jeshejojo! 🦔")
}


/* 

  3.  else if

  Nos va a permitir tener mas de una condicion a ser evaluada, esta evaluacioon es secundaria, si una condicion es verdadera se ejecutara su bloque de codigo.

  Sintaxis

  if (condicion1){ 
    //Codio que si es verdadera la condicion

  } else if (condicion2){
   //codio que se ejecuta si la anterir es falsa y esta condicion es verdadera.
    else{
      //codigo qe se ejecuta si ninguna de las anteriores es verdadera
   }
*/


let calificacion = 10;
if (calificacion >= 9) {
  console.log("eres un exelente programador");
} else if (calificacion >=7) {
  console.log ("ahi la llevas, ya casi te sale! 😎")
} else if (calificacion >=5) {
  console.log("Echale ganitas o nos veremos en extra! 😢")
} else {
  console.log( "ya valio, te veo en extra")
}