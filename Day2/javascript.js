// Değiştirilemez veri türü
let word ="JavaScript"

word[0]="Y"

console.log(word)


let numOne= 3
let numTwo =3

console.log(numOne==numTwo) // true

let js ='Javascript'
let py = 'Python'

console.log(js==py) // false


let ligthOn = true
let ligthOff= false

console.log(ligthOff==ligthOn)  // false



// Değiştirilebilir veri türü 

// --> Dizi <--

let nums =[1,2,3]

nums[0] //1
nums[1] //2
nums[2] //3 

console.log(nums) //  [1, 2, 3]

nums[0]=10

console.log(nums) // [10, 2, 3]

// Dizileri karşılaştırınca false döner çünkü refarans değer alır 

let number=[1,2,3]
let numbers=[1,2,3]

console.log(number== numbers) // false 


// --> Object <--

let userOne={
    name:"Samet",
    roles:"Front-end developer",
    country:"Turkey"
}

let userTwo={
    name:"Samet",
    roles:"Front-end developer",
    country:"Turkey"
}
// objeler karşılatırmınca false döner çünkü referans değer alırlar
console.log(userOne==userTwo) // false 



let nums1=[1,2,3] // referance =1 
let number1=nums1 // referance = 1 

console.log(number1==nums1) // true console.log(referance = 1 == referance = 1 )


//  --->  Numbers  <---


let age =35  // Değişen değişken 
const gravity=9.81 // Değişmeyen değişken 
let mass =72
const PI = 3.14 

const boilingPoint = 100
const bodyTemp = 37

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)



// ---> Math Object <---

// JavaScript'te Math Object, sayılarla çalışmak için birçok yöntem sağlar.


console.log(Math.PI) // 3.141592653589793

// round --> en yakın sayıya döndürmeye yarar

console.log(Math.round(PI)) // 3

console.log(Math.round(9.81)) // 10 

console.log(Math.floor(PI)) // Aşağıya yuvarlar cevap  3 

console.log(Math.ceil(PI)) // Yukarıya yuvarlar cevap  4 

console.log(Math.min(-5,3,20,4,5,10))  // Minimum sayıyı döndürür  -5

console.log(Math.max(-5,3,20,4,5,10)) // Maximum değer döndürür  20

// random ---> 0 ile 0.999999 arası rastgele sayı üretir
const randNum = Math.random()
console.log(randNum) 


// 0 ile 10 arasında rastgele bir sayı oluşturalım

const num = Math.floor( Math.random() +10)
console.log(num) 

// Mutlak Değer
console.log(Math.abs(-10))  

// Karekök bulma
console.log(Math.sqrt(81))
 
// Üssü bulma
console.log(Math.pow(3,4))

// Logaritma bulma
console.log(Math.log(2))

// Trigonometri 
console.log(Math.sin(60))





//  ---> Strings <---   

let space = ' '
let firstName = 'Samet'
let lastName = 'Kaya'
let city = 'İstanbul'


// String değişkenleri birleştirme

let fullName= firstName+space+lastName;
console.log(fullName) 


const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)


/*  
    \n: yeni satır 
    \t: Sekme, 8 boşluk anlamına gelir
    \\: Ters eğik çizgi 
    \': Tek alıntı (') 
    \": Çift tırnak (")
*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


// verileri dinamik olarak enjekte etme

let a = 2
let b = 3
console.log(`${a} ve ${b} toplamı ${a + b}`)




// ---> String Metodları <---

// 1 Length

let j ='Javascript'
console.log(j.length)
let fullNames = 'Samet Kaya'
console.log(fullNames.length)


// 2 Bir dizedeki karakterlere erişme

let string='Javascript'
console.log(string[0]) // J
console.log(string[string.length-1]) // t


// 3 toUpperCase()

 let string1='Kodhanem'
console.log(string1.toUpperCase())

// 4 toLowerCase()

console.log(string1.toLowerCase())


// 5 substr()  alınan indexe göre arama yapar ve alınan iki index değeride dahildir

let string2 ="JavaScript"
console.log(string2.substr(4,6)) // Javascript

// 6 substring() indexe göre arama ama son index dahil değil

let name1='samet kaya'
console.log(name1.substring(0,5)) // samet
console.log(name1.substring(0,4)) // same
console.log(name1.substring(6, 10)) // kaya

// 7 split() ayırma işlemi

let name2="30 Günlük Javascript"
console.log(name2.split(' ')) // ['30', 'günlük', 'javascript']
console.log(name2.split('')) // ['3', '0', ' ', 'g', 'ü', 'n', 'l', 'ü', 'k', ' ', 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

let countries='Turkiye, Almanya, Amerika, Avusturya'
console.log(countries.split(', ')) //  ['Turkiye', 'Almanya', 'Amerika', 'Avusturya']


// 8 trim() başındave sonunda ki boşlukları siler 

let string4="  30 Günlük Javascript   "
console.log(string4.trim())
console.log(string4.trim(' '))


// 9 includes() arama

let string3="30 Günlük Javascript"
console.log(string3.includes('30')) // true
console.log(string3.includes('günlük')) // false
console.log(string3.includes('Gün')) //true 


// 10 replace()  değiştirme 
 
let string5 = '30 Günlük Javascript'
console.log(string5.replace('Javascript','React'))

// 11 replacaAll() değiştirmek istenilen değeri bulduğu tüm değerleri değiştirir

let string6 = 'merhaba samet, nasılsın samet?'
console.log(string6.replace('samet','ahmet'))
console.log(string6.replaceAll('samet','ahmet'))


// 12 charAt() verilen dizini döndürür

let names="samet kaya"
console.log(names.charAt(0)) // s

let lastIndex = names.length-1
console.log(names.charAt(lastIndex)) // a

// 13 charCodeAt() girilen indexe göre Adcıı kodu döndürür

let lastNames = 'samet kaya'
console.log(lastNames.charCodeAt(0)) // s -> 115
let lastIndexs=names.length-1
console.log(lastNames.charCodeAt(lastIndexs)) // a -> 97

// 14 indexOf() alınan metin değerine göre ilk bulduğu dizini döndürür bulamazsa  -1 döndürür

let live = 'ümraniye istanbul'
console.log(live.indexOf('bul')) // 15
console.log(live.indexOf('İstanbul')) // -1


// 15 lastIndexOf()  aldığı string değere göre en son eşleştiğini döndürür ve bulamazsa -1 döndürür

let paragrap= 'hayat sevince güzel hemde çok güzel'
console.log(paragrap.lastIndexOf('güzel')) // 30
console.log(paragrap.lastIndexOf('Güzel')) // -1


// 16 concat() birden falzla metni birleştirmeye yarar

let day='30'
console.log(day.concat(' Days', ' Of', ' Javascirpt')) // 30 Days Of Javascirpt


// 17 startWith()  alınan string değere göre onunla başlıyorsa true yanlış ise false döndrürür

let famly = 'aile herşeydir'
console.log(famly.startsWith('aile')) // true
console.log(famly.startsWith('herşeydir')) // false
console.log(famly.startsWith('Aile')) // false
console.log(famly.startsWith('ai')) // true


// 18 endWith() alınan string değere göre belirtilen dizinde en sonda bitiyorsa true yoksa false döner

let freeDay = 'boş zamanlar ne yapıyorsun?'
console.log(freeDay.endsWith('?')) // true
console.log(freeDay.endsWith('boş')) // false
console.log(freeDay.endsWith('sun?')) // true


// 19 search() alınan string değere göre bulmak istediğimiz dizini belirleyip ilk eşleşen index numarasını döndürür

let string7 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string7.search('I')) // 0
console.log(string7.search('love')) // 2
console.log(string7.search('If')) // 19
console.log(string7.search(/javascript/gi)) // 7 

// 20 match()   argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür.

let string8 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string8.match('love'))      // ['love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined]
console.log(string8.match(/love/))      // ['love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined]
console.log(string8.match(/love/))      // ['love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined]
console.log(string8.match(/love/gi))    // ['love', 'love', 'love']
console.log(string8.match(/If/gi))      // ['If']


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/ 

console.log(txt.match(regEx))
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]



// 21 repeat()  verilen string değeri istenilen sayıda tekrarlanır

let txt1 ='love'
console.log(txt1.repeat(10)) //lovelovelovelovelovelovelovelovelovelove


// ---> veri türünü değiştirme <---


// 1 parseInt()

let nu='10'
console.log( typeof(nu), nu)  // string 10
console.log( typeof(+nu), nu)  // number 10
let numInt = parseInt(nu)
console.log(typeof(numInt), numInt) // number 10 


// 2 parseFloar()

let numstr='9.10'
console.log(typeof(numstr),numstr)  // string 9.10
console.log(typeof(+numstr),numstr) // number 9.10
console.log(typeof(parseFloat( numstr)),parseFloat( numstr)) // number 9.1
