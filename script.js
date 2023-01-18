console.log("aprendiendo arrays!")



let string = "holaaaa";

for (let i = 0; i < string.length; i++) {
  console.log("ejecucion for loop", i, string[i])
}


// for in y for of


for (let posicion in string) {
  console.log("ejecutando for in loop", posicion, string[posicion])
}


for (let character of string) {
  console.log("ejecutando for of loop", character)
}


// CONTINUE Y BREAK (funcionan en todos los bucles basicos. for, for in, for of, etc)

// ejemplo

let weirdString = "32540003800054000X4456055500000448";

// queremos unicamente los numeros que no sean 0
// que si el string llega a la letra X, no agregue más numeros

let newStr = "";

for (let character of weirdString) {

  // continue y break
  if (character === "0") {
    continue; // continue significa, salta esta iteracion del bucle
  } else if (character === "X") {
    break; // break significa, deten todo el bucle si se encuentra con esta palabra
  }

  // console.log(character)
  // newStr = newStr + character
  newStr += character 
}

console.log(newStr)


// ARRAYS


let nuevoArr = [45, "hola", true, undefined, {}, ["adios", 424]]


let cities = ["Valencia", "Madrid", "Roma", "Barcelona", "Zaragoza", "Málaga"]
//                0           1       2   ...

console.log(cities.length) // 6

console.log(cities[0])

console.log(cities[cities.length - 1])

// primer caracter de la primera ciudad
console.log( cities[0][0] )

// la primera letra de la ultima ciudad
console.log( cities[cities.length - 1][0] )

console.log( cities[cities.length - 1][cities[cities.length - 1].length - 1] )

let lastCity = cities[cities.length - 1]
let posLastLetter = lastCity.length - 1
console.log( lastCity[posLastLetter] )



// Metodos de array

let countries = ["España", "Italia", "Sudafrica", "Francia", "Venezuela", "Peru"]


// let firstTwoCountries = [countries[0], countries[1]]
let firstTwoCountries = countries.slice(0, 2)
console.log(firstTwoCountries)


let allCountriesFromPosTwo = countries.slice(2)
console.log(allCountriesFromPosTwo)

// let lastTwoCountries = countries.slice(countries.length - 2)
let lastTwoCountries = countries.slice(-2)
console.log(lastTwoCountries)


let firstAndLastCountry = [ countries[0], countries[countries.length - 1] ]
console.log(firstAndLastCountry)


// indexOf => determinar la posicion de un elemento
// includes => determina si un elemento existe o no dentro de el array


let indexOfDenmark = countries.indexOf("Dinamarca") // -1 es, no existe
console.log(indexOfDenmark)

let indexOfSpain = countries.indexOf("España") // posicion del elemento
console.log(indexOfSpain)

let includesBrasil = countries.includes("Brasil")
console.log(includesBrasil)

let includesFrance = countries.includes("Francia")
console.log(includesFrance)



// mutabilidad en strings

let word = "bananarama";

console.log(word[0])
word[0] = "B"; // los strings no son mutables

console.log(word);


// mutabilidad en arrays

let friends = ["Ross", "Phoebe", "Chandler", "Monica", "Rachel", "Joey"];

friends[0] = "Mike"; // los arrays SON mutables

console.log(friends)

let twoFriends = friends.slice(0, 2);

console.log(friends)

// aunque los arrays son mutables, no todos los metodos mutan el array


let removedFriend = friends.pop() // remover el ultimo elemento
console.log("despues del pop", friends)
console.log("amigo removido", removedFriend)

let removedFriendStart = friends.shift() // remover el primer elemento
console.log("despues del shift", friends)
console.log("amigo removido", removedFriendStart)



friends.push("Gunther") // añadir al final del array
console.log("despues del push", friends)

friends.unshift("Janice") // añadir al inicio del array
console.log("despues del unshift", friends)


// SPLICE (3 argumentos)

// 1. indice inicial donde hará la modificacion
// 2. cantidad de elementos a eliminar
// 3.4.5.6 Elementos a agregar desde la posición indicada

let removedFriends = friends.splice(2, 2, "Emily", "Robert")
console.log("despues del splice", friends)
console.log(removedFriends)



// REFERENCIAS EN JS


let age1 = 42;
let age2 = 42;

console.log(age1 === age2)
console.log("hola" === "hola")


let arr1 = [20, 24, 32]; // ref. 1234
let arr2 = [20, 24, 32]; // ref. abcd

console.log( arr1 === arr2 ) // .? // false

// cuando comparamos objetos en JS, se comparan las referencias.
// cuando comparamos data primitiva, se compara el valor.

console.log( arr1[0] === arr2[0] ) // true


let arr3 = arr1; // SUPER MALA PRACTICA. pero js lo realiza tras camaras en algunos casos.
// JS esta asignando la misma referencia que arr1 a arr3



// arr3.pop() // remueve el ultimo elemento

console.log(arr3)
console.log(arr1)

console.log(arr3 === arr1) // true, tienen la misma referencia




// Diferentes formas de copiar elementos de un arr

// quiero que arr4 tenga los mismos elementos que arr1 pero que sea un nuevo arr (nueva referencia)


//1. slice()
let arr4 = arr1.slice(0)
console.log(arr4)

console.log(arr4 === arr1) // false. tienen diferentes referencias.

let arr5 = [];

// 2. con loops
for (let i = 0; i < arr1.length; i++) {
  arr5.push(arr1[i])
  // arr5 += arr1[i] // concatenar convertiria el arr en string
}

console.log(arr5)

console.log(arr5 === arr1) // false. tienen diferentes referencias.


// 3. otra forma es con el metodo .map() // lo veremos el lunes

// 4. structuredClone()

let arr6 = structuredClone(arr1) // pasamos el array a clonar

console.log(arr6)
console.log(arr6 === arr1) // false. tienen diferentes referencias


// 5. otra forma es usando un conjunto de metodos llamados JSON.parse() y JSON.stringify.



// como verificar valores internos de un arr

let array1 = [5, "hola", true];
let array2 = [5, "adios", true];

let check = true;

for (let index = 0; index < array1.length; index++) {
  // console.log(index)
  // console.log(array1[index])
  // console.log(array1[index] === array2[index])
  console.log(index)
  if (array1[index] !== array2[index]) {
    check = false
  }
}

console.log("los arrays tienen los mismos valores? ", check)
