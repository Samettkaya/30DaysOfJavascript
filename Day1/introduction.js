let fullName
console.log(fullName) // undefined, çünkü henüz bir değere atanmamış

let emptyValue=null


console.log(typeof 'Samet kaya') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined


// Farklı veri türlerinin farklı değişkenlerini bildirme

let firstName = 'Samet' // first name of a person
let lastName = 'Kaya' // last name of a person
let country = 'Türkiye' // country
let city = 'İstanbul' // capital city
let age = 22 // age in years
let isMarried = false

console.log(firstName, lastName, country, city, age, isMarried)


// Değişkenleri sayı değerleriyle bildirme
let ages = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)


// Değişkenler ayrıca virgülle ayrılmış bir satırda bildirilebilir.
let names = 'Samet', // name of a person
    job = 'Developer',
    live = 'İstanbul'

console.log(names, job, live)
