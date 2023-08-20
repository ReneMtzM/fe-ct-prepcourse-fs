/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.shift();
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map( (numero) =>  { return numero + 1 } );
   return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var cadena = palabras.join(" ");
   return cadena;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let sumaNumeros = 0;
   arrayOfNums.forEach(elemento => {
      sumaNumeros = sumaNumeros + elemento;
   });
   return sumaNumeros;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let promedio = 0;
   let suma = 0;
   for(var i=0; i<resultadosTest.length; i++){
      suma = suma + resultadosTest[i];
   }
   promedio = suma / i;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numeroMasGrande = 0;
   arrayOfNums.forEach(numero => {
      if (numero > numeroMasGrande) numeroMasGrande = numero;
   });
   return numeroMasGrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
    var producto = 1;
    if (arguments.length == 0) {
       return 0;
    } else {
         for(var i=0; i<arguments.length; i++){
            producto = producto * arguments[i];
         }
         return producto;
       }
 
   }

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   // Recorrer el arreglo, si el elmento consultado es mayor a 18 entonces se suma uno a cantidad de elementos que cumplen la condicion
   mayorDeEdad = 0;
   array.forEach(elemento => {
      if (elemento > 18) mayorDeEdad = mayorDeEdad+1;
   })
   return mayorDeEdad;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia){
      case 1:
      case 7:
         return ("Es fin de semana");
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         return ("Es dia laboral");
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   cadenaDeNumeros = num.toString();
   var arregloDeNumeros = cadenaDeNumeros.split("");
   var primerCaracter = arregloDeNumeros.shift();

   if (primerCaracter == 9) return true; 
   else return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var primerElemento = array[0];
   const sonIguales = (elementoActual) => elementoActual === primerElemento;

   return (array.every(sonIguales));
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var banderaEnero = 0;
   var banderaMarzo = 0;
   var banderaNoviembre = 0;
   var nuevoArreglo = [];

   array.forEach(elementoActual => {
      switch (elementoActual){
         case "Enero":
            banderaEnero = 1;
            nuevoArreglo.push(elementoActual);
            break;
         case "Marzo":
            banderaMarzo = 1;
            nuevoArreglo.push(elementoActual);
            break;
         case "Noviembre":
            banderaNoviembre = 1;
            nuevoArreglo.push(elementoActual);
            break;
      }
   });

   if (banderaEnero == 1 && banderaMarzo == 1 && banderaNoviembre ==1 ){
      return nuevoArreglo;
   } else return ("No se encontraron los meses pedidos");

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaDelSeis = [];
   for (var i=0; i <= 10; i++){
      tablaDelSeis.push(6*i);
   }
   return (tablaDelSeis);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresACien = [];
   array.forEach(elementoActual => {
      if (elementoActual > 100) mayoresACien.push(elementoActual);
   });

   return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var suma = num;
   var nuevoArreglo = [];
   for (var i=1; i<=10; i++){
      suma = suma + 2;
      if (suma == i) {
         return ("Se interrumpió la ejecución");
         break;
      } else nuevoArreglo.push(suma);
   }
   return nuevoArreglo;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var suma = num;
   var nuevoArreglo=[];
   for (var i=1; i<=10; i++){
      if (i === 5) continue;
      suma = suma + 2;
      nuevoArreglo.push(suma);
   }
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
