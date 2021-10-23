// EJERCICIO 1

const ejercicio1 = () => {
  
  // Se muestra un "Hola mundo" en consola. 
  console.log("Hola mundo");

  // Se muestra un mensaje por consola que dice "Soy el primer script". 
  console.log("Soy el primer script");
  
}



// EJERCICIO 2

const ejercicio2 = () => {

  let mensaje = `Hola mundo!
  Que facil es incluir 'comillas simples' 
  y "comillas dobles"`;

  alert(mensaje);

}




// EJERCICIO 3
const ejercicio3 = () => {

  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  for (let index = 0; index < meses.length; index++) {
    const mes = meses[index];
    console.log(mes)
  }

}

// EJERCICIO 4
const ejercicio4 = () => {

  var valores = ["parangaricutirimicuaro",true,5, false, "1", "javascript", 6, true, 2];
  var a = 0;
  var index;
  var numeros = [];
  var suma = 0;
  var resta = 0;
  var multiplicacion = 1;
  var division = 1;
  var modulo = 1;

  for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] == 'string' || valores[i] instanceof String) {
      var b = valores[i].length;
      if (b > a) {
        a=b;
        index=i;
      }  
    }

    if(typeof valores[i] == 'boolean') {
      if(valores[i] === true) {
        console.log('El valor encontrado es true');
      } else {
        console.log('El valor encontrado es false');
      }
    }

    if(typeof valores[i] == 'number') {
      // Con el método push insertas los valores que quieras dentro de tu array
      // Es un operador específico de Arrays
      numeros.push(valores[i]);
    }
  }
  
  for(let j = 0; j < numeros.length; j++) {
    suma            = suma + numeros[j];
    resta           = resta - numeros[j];
    multiplicacion  = multiplicacion * numeros[j];
    division        = division / numeros[j];
    modulo          = modulo % numeros[j];
  }

  console.log('Suma: ' + suma);
  console.log('Resta: ' + resta);
  console.log('Multiplicacion: ' + multiplicacion);
  console.log('Division: ' + division);
  console.log('Modulo: ' + modulo);
  console.log(valores[index]);
  
}

// EJERCICIO 5
const ejercicio5 = () => {

  var numero1 = 5;
  var numero2 = 8;
    
  if(numero1 <= numero2) {
    alert("numero1 no es mayor que numero2");
  }

  if(numero2 >= 0) {
    alert("numero2 es positivo");
  }

  if(numero1 < 0 || numero1 != 0) {
    alert("numero1 es negativo o distinto de cero");
  }

  if(++numero1 < numero2) {
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
  }

}

// EJERCICIO 6
const ejercicio6 = () => {

  const calculoDNI = (numeroDNI, letraDNI) => {
    let mensaje = "";
    let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    let calculo = 0;


    if (numeroDNI < 0 || numeroDNI > 99999999) {
      mensaje = "El numero proporcionado no es valido!"; 
    } else {

      calculo = numeroDNI % 23;

      if (letras[calculo] !== letraDNI) {
        mensaje = "La letra que ha indicado no es correcta.";
      } else {
        mensaje = "El numero y la letra DNI son correctos.";
      }
    }

    return mensaje;
  }

  let numeroDNI = Number(prompt("Introduce el numero DNI: "));
  let letraDNI = prompt("Introduce la letra DNI: ");

  const respuesta = calculoDNI(numeroDNI, letraDNI);
  console.log(respuesta);
  alert(respuesta);
  

}

//Ejercicio 7 factorial
//Para sacar el factorial de un número hay que multiplicar los número que hay entre ese número hasta el uno.

const ejercicio7 = () => {

  var numero = prompt("Introduce un número entero y se mostrará su factorial");
  var res = 1;

  for(var i=1; i<=numero; i++) {
    res *= i;
  }
  alert(res);

  

}

//Ejercicio 8

const ejercicio8 = () => { 
  var numero = prompt("Introduce un número entero");
 
  var resultado = parImpar(numero);
  alert("El número "+numero+" es "+resultado);
 
  function parImpar(numero) {
    if(numero % 2 == 0) {
      return "par";
    }
    else {
      return "impar";
    }
  }
  
}

// Ejercicio 9  
const ejercicio9 = () => {
  const infoCadenaTexto = (cadena) => {
    let resp = "";

    let cadenaSinEspacios = cadena.replace(/\s/g,"");
    let cadenaSplit = cadenaSinEspacios.split("");

    let mayus = 0;
    let minus = 0;

    for (let index = 0; index < cadenaSplit.length; index++) {
      if (cadenaSplit[index] == cadenaSplit[index].toUpperCase()) {
        mayus = mayus + 1;
      } else {
        minus = minus + 1;
      }
    }

    if( mayus > 0 && minus > 0) {
      resp = "La frase tiene mayusculas y minusculas";
    } else if ( mayus > 0 && minus <= 0 ) {
      resp = "La frase solamente tiene mayusculas";
    } else if ( mayus <= 0 && minus > 0 ) {
      resp = "La frase solamente tiene minusculas";
    } else {
      resp = "Escribe una frase para evaluarla";
    }
  
    return resp;
  }
  
  
  let cadena = prompt("Introduce una cadena de texto: ");
  
  const respuesta = infoCadenaTexto(cadena);
  console.log(respuesta);
  alert(respuesta);
}


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