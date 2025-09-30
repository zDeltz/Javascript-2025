/* 

    Switch

    Es una sentencia que se utiliza para realizar diferentes acciones según distintas condiciones.

    Se suele usar como forma alternativa alternativa a múltiples sentencias if-else cuando se tiene una sola variable que puede tomar distintos valores.

    Sintaxis

    switch (expresión variable) {
        // Casos según se comparen
        break;

        case valor1:
            // El código a ejecutar
            break;

        case valor2:
            // El código a ejecutar
            break;
        
        case valor3:
            // El código a ejecutar
            break;

        default:
            // Este código se ejecuta si la expresión no coincide con ningún caso.
            break; // Esto es opcional

    }

*/

const  licenciatura = prompt("Escribe la licenciatura que te interesa: televisión, diseño o consultoria. 😋"); // televisión, diseño, consultoria 

switch (licenciatura) {

    case "televisión":
        console.log("📺 Has elegido la licenciatura de Televisión. Que mal por ti :c");
        break;

    case "consultoria":
        console.log("👗 Has elegido la licenciatura de Consultoria. Estas a la moda :3");
        break;

    case "diseño":
        console.log("🎨 Has elegido la licenciatura de Diseño. Eres muy chido ;D");
        break;

    default:
        console.log("Estas loquito :l");
}   