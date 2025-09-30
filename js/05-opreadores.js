/* 
Se utilizan las operaciones matematicas basicas como la suma, resta, division  ultiplicacion 

+ 👉 Suma  
- 👉 Resta
* 👉 Multiplicacion
/ 👉 Division
% 👉 Porcentaje
++👉 Incremento
--👉 Decremento

      Expreciones: conjunto de valores variables y péaciones
 */

let a = 10 ;
let b = 5 ;

console.log (a + b);   // 15
console.log (a - b);   // 5
console.log (a * b);   // 50
console.log (a / b);   // 2
console.log (a % b);   // 1
a++;
console.log (a);  // 11
b--;
console.log (b);  // 4

/* 

  2. Operadores de asignacion

  Estos operadores se utilizan para asignar un valor a las variables

  =   👉 asignacion
  +=  👉 suma y asignacion
  -=  👉 resta y asignacion
  *=  👉 multiplicacion y asignacion
  /=  👉 division y asignacion
  %=  👉 porcentaje y asignacion

  */

let c = 20;
console.log(c);

  c += 5;   // 25
  c -= 10;  // 15
  c *= 2;   // 30
  c /= 3;   // 10
  c %= 3;   // 1

  console.log(c)


/* 

  3. Operadires de comparacion

  Estos operadores de utilizan para comparar fos valores y devolver un valor booleano (true o false) 

  ==  👉  igualdad (compara solo el valor)
  === 👉  igualdad estricta (compara el valor y el tipo)
  !=  👉  Desigualdad (comprara solo el valor)
  !== 👉  Desigualdad (compara el valor y el tipo)
  >   👉  Mayor que
  <   👉  menor que
  >=  👉  mayor o igual que 
  <=  👉  menor o igual que 

*/

let d = 10;   // number - numero
let e = "10"; // string - cadena de caracteres
console.log(d == e);  // true
console.log(d === e); // dalse como tu amor
console.log(d != e);  // false
console.log(d > 5);   // true
console.log(d < 15);  // true
console.log(d >= 10); // true
console.log(d <= 5);  // false

/* 

  4. operadores logicos

  Se urilizan para camiar las expreciones boleanas

  &&  👉  AND (y) - Si ambos valores son verdaderos el resultado de esa combinacion es verdadero. Si ambos valores son verdaderops el resltao es falso.

  ||  👉 OR (o) -si almenos un valor es verdadero el resltado es verdadero solo si ambos valores son falsos el resulado es falso 

  ! 👉 NOT (no) -niega el valor. El resultadi el valor contrario al que esta negando

  */

  let f = true;
  let g = true;

  console.log(f && g); // false
  console.log(f || g); // true
  console.log( !f ); // false
  console.log( !g ); // true