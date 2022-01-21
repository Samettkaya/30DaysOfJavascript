// ---> Arrays <---



// . Using Array Constructor

const arr = Array()
console.log(arr) // []


// . Using square brackets([])

const arr1 = []
console.log(arr1) // []


const numbers=[0,1,18,25.4,98,100] // array of numbers
const fruits=["banana","orange","mango"] // array of string
const names=["Samet","kaya","istanbul",22,1999] // array of string


console.log(numbers)
console.log(numbers.length)
console.log(numbers[0]) // 0

console.log(fruits)
console.log(fruits.length)
console.log(fruits[0]) // banana
console.log(names)
console.log(names.length)
console.log(names[2]) // istanbul


// split kullanarak dizi oluşturma

let js ="javascript"
const charInJavascript=js.split('')
console.log(charInJavascript) //  ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

let companiesString='Facebook, Google, Apple, Oracle, Trendyol, Amazon '
const companies= companiesString.split(',')
console.log(companies) // ['Facebook', ' Google', ' Apple', ' Oracle', ' Trendyol', ' Amazon ']


const number =[1,2,3,5,48,10,80]
console.log(number[0]) // 1

number[0]=22
console.log(number[0]) // 22


// fill ile değer atamak

const arr2 = Array(3).fill('x') 
console.log(arr2) // ['x', 'x', 'x']


// concat ile dizi birleştirme

const firstList=[1,2,3]
const secondList=[4,5,6,7]
const thirdList=firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6, 7]

// indexOf dizide ki değeri aramak için kullanılır. değer bulunmadığı zaman -1 döndürür


const number1 =[1,2,3,4,5]
console.log(number1.indexOf(6)) // -1
console.log(number1.indexOf(5)) // 4

// lastIndexOf dizideki değeri aramak için kullanılır ama birden fazla aynı değerden varsa en son bulduğu değerin indexini döndürür

const number2 =[1,2,3,1,54,5,1,2,4,7,8,9,56,8]
console.log(number2.lastIndexOf(1)) // 9
console.log(number2.lastIndexOf(8)) // 13


// includes dizideki değerin olup olmadığğını kontrol eder varsa true yoksa false döndürür

const number3 =[1,2,3,4,5]
console.log(number3.includes(1)) // true
console.log(number3.includes(7)) // false

// Array.isArray type dizi olup olmadığını kontrol eder

console.log(Array.isArray(number3)) // true


// toString diziyi stringe dönüştürür 

const  number4 =[1,2,3,4,5]
console.log(number4.toString()) // 1,2,3,4,5
console.log(Array.isArray(number4.toString())) // false

// join belirlediğimiz karaktere göre birleştirip string döndürür varsayılan , kullanılır

const numbers1 = [1,2,3,4,5,6]
console.log(numbers1.join()) // 1,2,3,4,5,6
console.log(numbers1.join(";")) // 1;2;3;4;5;6
console.log(numbers1.join("")) // 123456
console.log(numbers1.join(" ")) // 1 2 3 4 5 6

// slice belirlediğimiz aralıklarla diziyi döndürme

const numbers2 = [1,2,3,4,5,6]
console.log(numbers2.slice())  // [1, 2, 3, 4, 5, 6]
console.log(numbers2.slice(1,3)) // [2, 3]

// splice ekleme işlemi Üç parametre alır: Başlangıç ​​konumu, kaç kez kaldırılacak ve eklenecek öğe sayısı.
const numbers3 = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers3.splice(2, 4, 25, 26, 42, 75)) // [3, 4, 5, 6]

console.log(numbers3) // [1, 2, 25, 26, 42, 75, 7, 8, 9, 10]


// push ile diziye değer eklemek

const arr3 = ['item1', "item2", "item3"]
console.group(arr3) // ['item1', 'item2', 'item3']
arr3.push('new item')
console.log(arr3) // ['item1', 'item2', 'item3', 'new item']


// pop ile sondaki elemenı silme shift ile baştaki elemeanı silme

const numbers4 =[1,2,3,4,5,6,7]

console.log(numbers4.pop()) // 7
console.log(numbers4) // [1, 2, 3, 4, 5, 6]

console.log(numbers4.shift()) // 1
console.log(numbers4) // [2, 3, 4, 5, 6]


// unshift ile dizinin başına eleman ekleme

const numbers5=[20,54,4,8,77,95,35,48]

console.log(numbers5) // [20,54,4,8,77,95,35,48]
numbers5.unshift(1999)
console.log(numbers5) // [1999, 20, 54, 4, 8, 77, 95, 35, 48]



// reverse  diziyi tersine çevirmeye yarar

const numbers6=[20,54,4,8,77,95,35,48]

console.log(numbers6) // [20,54,4,8,77,95,35,48]
numbers6.reverse()
console.log(numbers6) // [48, 35, 95, 77, 8, 4, 54, 20]




const numbers7=[4, 5, 6, 8, 1,9]
numbers7.sort()
console.log(numbers7) // [1, 4, 5, 6, 8, 9]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  webTechs.sort()
  console.log(webTechs)