/* 

    Funciones

    Las funciones son bloques de código reutilizables, que realizan una tarea específica.

    1. Función Declarada

    Es la forma más común de definir funciones, se puede llamar a la función antes de su definición debido al hoisting, es decir que se "elevan" en el contexto de ejecución.

    Sintaxis:

    function nombreFunción() {
        //cuerpo de la función
        ..
    }

    Llamada:

    nombreFunción();

*/


saludar();

function saludar() {
    console.log("Hola nariz de bola! 😋");
}

/* 

    2. Función expresada (Anónimas)

    Este tipo de funciones se asignan a una variable.
    No puede ser llamada antes de su definición.

    Sintaxis:

    const nombreConstante = function() {
        //Cuerpo de la función
        ...
    }

    Llamada:

    nombreConstante(); 

*/

const despedir = function() {
    console.log("Adios, te voy a extrañar! 😥");
}

despedir();


/* 

    3. Funciones Flecha (Arrow Function)

    Tienen una sintaxis más consisa, son útiles para ejecuciones cortas.

    Sintaxis:

    const nombreConstante = () => {
            // Cuerpo de la función
            ...
        }

*/

const mensaje = () => {
    console.log("SOS, ya muero de hambre! 😵");
}

mensaje();


/* 

    Las funciones puede aceptar parámetros para recibir datos cuando son llamadas.

    Sintaxis:

        function nombreFuncion(parametro1 , parametro2){
        //Cuerpo de la funcion
    }

    Llamada:

    nombreFuncion(argumento1, argumento2);

*/

function sumar(num1 , num2) {
    console.log(`El resultado de la suma es: ${num1 + num2}`);
}

sumar(2,3);
sumar(223,311);
sumar(.45,.76);
sumar(2842843117,3971136811);

//    ------------------

function nombres(alumno) {
    console.log(`Hola ${alumno}! 😎`);
}

nombres(`Esteban`);
nombres(`Julio`);
nombres(`Yukio`);
nombres(`Erwyn`);

/* 

    Parametros por defecto

    En las funciones podemos tener valores por defecto si no se proporcionan argumentos al llamar a la función.

    Sintaxis:

    function nombreFuncion(parametro1 = valorDefault) {
        // Cuerpo de la función
        ..
    }

    Llamada:

    nombreFuncion();  // Usa los valores por defecto
    nombreFuncion(argumento1)  // Usa valor del argumento

*/

const multiplicar = function(num1, num2 = 2) {
    console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${num1*num2}`);
}

multiplicar();
multiplicar(8,5);
multiplicar(10,46);
multiplicar();

/* 

    Crear una función que de la Bienvenida a un usuario personalizado su nombre y que muestre un mensaje de invitado si no tiene el nombre de usuario.

*/

const bienvenida = (usuario = "Invitado") => {
    if(usuario == "Invitado") {
        console.log("Registrate o continúa como invitado 🧐");
    } else {
        console.log(`¡Bienvenido ${usuario}! 😏`);
    }
}

bienvenida();
bienvenida(`Steb`);
bienvenida(`Julio`);
bienvenida(`Erwyn`);
bienvenida(`Yukio`);

/* 

    Valor de Retorno

    Las funciones pueden devolver un valor utilizando la palabra "return"

    Sintaxis:

    function nombreFuncion() {
        // Cuerpo de la función
        ..
    }

    Llamada:

    const nombreConstante = nombreFuncion():

*/

function despedida(nombre = "Steb") {
    return `Adios ${nombre}! ✋🏼`
}

const resultado = despedida();

console.log(resultado);


/* 

    Return Implicito

    Las funciones flecha no necesita la palabra return, en su estructura más simple (una sola línea)

    Sintaxis:

    const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;

console.log(restar(1,1));