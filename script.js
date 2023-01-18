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