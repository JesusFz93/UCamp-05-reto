// EJERCICIO 1

// Se muestra un "Hola mundo" en consola. 
console.log("Hola mundo");

// Se muestra un mensaje por consola que dice "Soy el primer script". 
console.log("Soy el primer script");


// EJERCICIO 2

let mensaje = `Hola mundo!
Que facil es incluir 'comillas simples' 
y "comillas dobles"`;

alert(mensaje);


// EJERCICIO 3

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log(meses);



//Ejercicio 7 factorial
//Para sacar el factorial de un número hay que multiplicar los número que hay entre ese número hasta el uno.
var numero = prompt("Introduce un número entero y se mostrará su factorial");
var res = 1;

for(var i=1; i<=numero; i++) {
  res *= i;
}
alert(res);


// Ejercicio 10         La ruta nos aporto otro paso natural

const ejercicio10 = () => {
  const esPalindromo = (cadena) => {
    let resp = "";
  
    let cadenaSinEspacios = cadena.replace(/\s/g,"");
    let cadenaSplit = cadenaSinEspacios.split("");
    let cadenaSplitReversa = cadenaSplit.reverse();
    let cadenaSinEspaciosReversa = cadenaSplitReversa.join("");
    
    if (cadenaSinEspacios.toLowerCase() == cadenaSinEspaciosReversa.toLowerCase()) {
      resp = "Es un palíndromo";
    } else {
      resp = "No es un palíndromo";
    }
  
    return resp;
  }
  
  
  let cadena = prompt("Introduce una cadena de texto: ");
  
  const respuesta = esPalindromo(cadena);
  console.log(respuesta);
  alert(respuesta);
}