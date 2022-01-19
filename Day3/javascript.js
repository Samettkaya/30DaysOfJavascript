// ---> Booleans <---

let isLigthOn = true
let truValue = 4 > 3  // true
letfalseValue= 4 < 3 // false

// ---> Undefined <---

let firtsName
console.log(firtsName) // undefined


// ---> Null <---

let empty = null
console.log(empty) // null



// ---> Operators <---

let fullName = 'samet kaya'
let country = 'Turkey'

let a = 5
let b = 7

console.log(a+=b) // 12
console.log(a-=b) // 5
console.log(a*=b) // 35
console.log(a/=b) // 5
console.log(a%=b) // 5
console.log(a**=b) // 78125


// ---> Comparison Operators <---

console.log(3 > 2)              // true 
console.log(3 >= 2)             // true
console.log(3 < 2)              // false
console.log(2 < 3)              // true
console.log(2 <= 3)             // true
console.log(3 == 2)             // false
console.log(3 != 2)             // true
console.log(3 == '3')           // true
console.log(3 === '3')          // false
console.log(3 !== '3')          // true
console.log(3 != 3)             // false
console.log(3 !== 3)            // false
console.log(0 == false)         // true
console.log(0 === false)        // false
console.log(0 == '')            // true
console.log(0 == ' ')           // true
console.log(0 === '')           // false
console.log(1 === true)         // false
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number


console.log('samet'.length == 'melis'.length) // true
console.log('mazlum'.length == 'samet'.length) // false


//  Mantıksal Operatörlar 

// ---> Ve  && <--- 

console.log( 4>3 && 10>5) // true
console.log( 4>3 && 10<5) // false


// ---> Yada || <--- 

console.log( 4>3 || 10>5) // true
console.log( 4<3 || 10<5) // false

// ---> Değilse ! <--- 

console.log( !(4 > 3) )  // false
console.log( !(4 < 3) ) // true


// Arttırma Operatörü

let count = 0
console.log(++count)        // 1
console.log(count) 

console.log(count++)        // 0
console.log(count) 


// Azaltma Operatörü

console.log(--count) // -1
console.log(count)  // -1

console.log(count--) // 0
console.log(count)   // -1


// Ternary Operatörü 
// koşul  ? true : false 
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)


// Window Methodlar

// ---> Alert() <---

// alert("Naber Nasılsınız")


// ---> prompt() <---

// prompt("Bir Sayı Giriniz")

// ---> confirm() <---

// confirm("Bir Sayı Giriniz")


// Date Object

// ---> getFullYear() <---  Yıl bilgisi verir

let date = new Date()
const year=date.getFullYear()

// ---> getMonth() <---  Ay bilgisi verir

const month =date.getMonth()

// ---> getDate() <---  Gün bilgisi verir

const day= date.getDate()

// ---> getHours() <--- Saat bilgisi verir

const hours= date.getHours()

// ---> getMinutes() <---  Dakika bilgisi verir

const minutes =date.getMinutes()

// ---> getSeconds() <---  Saniye bilgisi verir
const seconds = date.getSeconds()

// ---> getMilliSeconds() <---  Millisaniye bilgisi verir

console.log(date.getMilliseconds())

// ---> getTime() <---  Bu yöntem 1 Ocak 1970'den itibaren milisaniye cinsinden süre verir. Unix zamanı olarak da bilinir. Unix zamanını iki şekilde alabiliriz:

console.log(date.getTime()) 

// ---> getDay() <---  Haftanın gününü bilgisi verir

console.log(date.getDay()) 


let months=[
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağostos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
] 

const days=[
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"

]


let mont=months[month]

console.log(`${day}.${mont}.${year} ${days[date.getDay()]} ${hours}:${minutes}:${seconds}`)


var ayKacCekti = new Date(2022, 02, 0).getDate();
alert(ayKacCekti);