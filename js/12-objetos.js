/* 

Objetos

Son colecciones de propiedades. Una propiedad es una asociación entre nombre (clave o key) y un valor (value).

Los valores puede ser de distintos tipos de números, cadenas de texto, boleanos, arreglos, funciones...

Sintaxis:

nombreObjeto {
    // Propiedades
    clave1: valor,
    clave2: valor,
    clave3: valor
    }
    
*/

const persona = {
    nombre: "Steb",
    apellido: "Castillo",
    edad: 24,
    esInvitado: false,
    artistasFavoritos: ["Twenty One Pilots", "Skillet", "Aurora"],


    /* This es una palabra reservada que autoreferencia al objeto. */
    saludar: function() {
        console.log("Hola mi nombre es " + this.nombre + " y me gusta " + this.artistasFavoritos[0]);
    }
}

console.log(persona)

/* 

    Acceder a las propiedades de un objeto utilizamos la notación de puntos o corchetes.

    objeto.clave 👉🏼 notación de punto
    objeto[clave] 👉🏼 notación de corchetes

*/

console.log(persona.nombre);
console.log(persona['apellido']);

console.log("Hola mi nombre es " +persona.nombre, "" +persona.apellido, "y tengo " +persona.edad, "años!");  // Mi ejemplo
console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años! 🤟🏼`); //  Ejemplo del profe

// Acceder al boleano

console.log(persona.esInvitado);

if(persona.esInvitado == true) {
    console.log("Puede pasar y disfrutar del Halloween de Enfoco 😊");
} else {
    console.log("No puedes pasar, regresate a tu casita 😈");
}

// Acceder al array

console.log(persona.artistasFavoritos[2]);

console.log(`Hola soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} e iré al halloweeen disfrazado de ${persona.artistasFavoritos[0]}`);

/* 

    Metodos de los objetos.

    Los métodos son funciones ques están asociadas a un objeto. Se pueden llamar utilizando la notación de punto.

    objeto.metodo()

*/

persona.saludar();