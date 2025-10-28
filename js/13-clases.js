/* 

    Las clases en JS son una forma de definir objetos, sus propiedades y métodos, creando un prototipo del cual se generaran varios objetos, heredando su comportamiento.

    Los nombres de las clases comienzan en mayúsculas.

    Sintaxis

    class NombreObjeto {
        //  Utilizamos el método especial para inicializar objetos.

        constructor(prop1, prop2) {
            this.key = prop1;
            this.key = prop2;

        }
    }

*/

class Persona {
    // Metodo Constructor
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Otros Método

    saludar() {
        alert(`Hola soy ${this.nombre} y tengo ${this.edad} años! 🤗`)
    }
}

/* 

    Crear instancias de la clase
    
    Vmos a utilizar una constante y a crear una nueva instancia con la siguiente sintaxis:

        const nombreConstante = new NombreClase(prop1 , prop2)


*/

const persona1 = new Persona('Juanito' , 24);
const persona2 = new Persona('María' , 22);
const persona3 = new Persona('Pablo' , 23);

// Mostramos objetos por consola

console.log(persona1);  
console.log(persona2);
console.log(persona3);

// Accedemos a los datos

console.log(`El es ${persona1.nombre} y tiene ${persona1.edad}.`);
console.log(`Ella es ${persona2.nombre} y tiene ${persona2.edad}.`);
console.log(`El es ${persona3.nombre} y tiene ${persona3.edad}.`);

// Llamamos al metodo saludar de cada objeto

persona1.saludar();
persona2.saludar();
persona3.saludar();