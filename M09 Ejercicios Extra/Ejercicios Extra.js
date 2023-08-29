/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   var i=0;
   //recorrer el objeto
   for (const propiedad in objeto){
      arreglo[i]=[propiedad, objeto[propiedad]];
      console.log (arreglo);
      i++
   }

   return arreglo;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   // Convertir string a array
   var stringToArray = string.split('');
   
   // Ordenar Array en orden alfabetico
   stringToArray.sort();
   //console.log(stringToArray);
   //se inicializa el contador seRepite = 1;
   var seRepite = 1;
   var elementoActual='';
   var longitudDelArreglo = stringToArray.length;
   //recorremos el arreglo
   for (let i=0; i < longitudDelArreglo; i++){
      //tomamos y eliminamos el primer elemento del arreglo
      elementoActual=stringToArray.shift();
      
      //Lo comparamos con el siguiente elemento en el arreglo
      if (elementoActual === stringToArray[0]) {
       //si son iguales  
      //se incrementa en uno el contador seRepite
      seRepite++;
    
      } else {
      //si no son iguales se agrega el dato al objeto, clave = elemento actual: valor = seRepite
      objeto[elementoActual]=seRepite;

      //se reinicia el contador seRepite=1
      seRepite=1;
      }

   }

   return(objeto);
 
    
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arregloDeMayusculas = [];
   var arregloDeMinusculas = [];
   var arregloFinal = [];
   var stringOrdenado = '';
   const mayusculas ='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
   //convertir string a arreglo
   var stringToArray = string.split('');
   //Recorrer arreglo
   for (i=0; i< stringToArray.length; i++){
   //si es mayuscula enviar a arreglo de mayusculas
   if (mayusculas.includes(stringToArray[i])) {
       arregloDeMayusculas.push(stringToArray[i]);

   } else {
       arregloDeMinusculas.push(stringToArray[i]);
       //si no es mayuscula enviar a arreglo de minusculas
   }
   }
   //unir ambos arreglos
   //arregloFinal = arregloDeMayusculas + arregloDeMinusculas;
   //convertir a string
   stringOrdenado = arregloDeMayusculas.join('') + arregloDeMinusculas.join('');
  
   //retornar string
   return (stringOrdenado);
   //console.log(stringOrdenado);
}



function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arregloPalabras = [];
   var arregloCaracteres = [];
   var arregloInvertido = [];
   var palabraInvertida = '';
   var fraseInvertida = '';

   //convertir a arreglo separado por espacios, cada elemento será una palabra
   arregloPalabras = frase.split(' ');
   //recorremos el arreglo
   for (let i=0; i<arregloPalabras.length; i++){
      //por cada elemento crear un nuevo arreglo donde cada elemento sea un caracter  
      arregloCaracteres = arregloPalabras[i].split('');
      //recorrer el nuevo arreglo y cada nuevo elemento enviarlo al inicio de un nuevo arreglo
      for (let iter=0; iter<arregloCaracteres.length; iter++){
       arregloInvertido.unshift(arregloCaracteres[iter]);
      }
      //agregar el contenido  arregloInvertido a fraseInvertida
      palabraInvertida = arregloInvertido.join('');
      fraseInvertida = fraseInvertida + palabraInvertida;
      //se limpia el contenido de arreglo invertido
      var arregloInvertido = [];
      //si no hemos llegado al ultimo elemento de arregloPalabras agregar un espacio despues de la palabra completa
      if (i+1 < arregloPalabras.length) fraseInvertida = fraseInvertida + ' ';
   }

   return(fraseInvertida);
 

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var stringdDeNumeros=numero.toString();
   var arregloDeNumeros = stringdDeNumeros.split('');
   var iteraciones = arregloDeNumeros.length / 2;
   var primerElemento = '';
   var ultimoElemento = '';
   var esCapicua = 1;

   for (let i=1; i < iteraciones; i++){
       //eliminar y tomar el primer elemento del arreglo
       primerElemento = arregloDeNumeros.shift();
       console.log('Primer elemento: ',primerElemento);
       //elmiinar y tomar el último elemento del arreglo
       ultimoElemento = arregloDeNumeros.pop();
       console.log('Ultimo elemento: ',ultimoElemento);
       //si son diferentes entonces no es capicua
       if (primerElemento != ultimoElemento) {
           esCapicua = 0;
       } 
   }

   if (esCapicua === 1) {
       return ('Es capicua');
   } else {
        return ('No es capicua');
   }


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const eliminar = 'abc';
   var arregloModificado = [];
   var stringModificado ='';
   //convertir string a arreglo
   var arregloDeCaracteres = string.split('');
   //recorrer arreglo
   for (let i=0; i < arregloDeCaracteres.length; i++){
       //si no es a, b o c entonces se agrega al arreglo modificado
       //if (!arregloDeCaracteres[i].includes(eliminar)) {
       if (!eliminar.includes(arregloDeCaracteres[i])) {
           arregloModificado.push(arregloDeCaracteres[i]);
       }
   }
   //convertir arreglo a string
   stringModificado = arregloModificado.join('');

   return (stringModificado);
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   function comparar(a, b) {
      return a.length - b.length;
    }
    return (arrayOfStrings.sort(comparar));

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo = [];

   //recorrer el arreglo uno 
   for (i=0; i<array1.length; i++){
        //recorrer el arreglo dos
        for(j=0; j<array2.length; j++){
          //comparar el elemento actual del arreglo uno contra todos los elementos del arreglo dos
          //si hay una coincidencia entonces se agrega el elemento actual a un nuevo arreglo 
          if(array1[i] === array2[j]){
             nuevoArreglo.push(array1[i]);
          }
        }
   }
   return (nuevoArreglo);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
