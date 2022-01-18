// Koşullar  

// ---> İf <---

if(true){
    // çalışacak kodlar
}

let num =3
if(num>0){
    console.log(`${num} positif sayı`)
}

isRaining=true

if(isRaining){
    console.log("şemsiyeyi unutma")
}


// ---> if else <---

if(true){
    // doğruysa çalışacak kod
}
else{
    // yanlış saçalışacak kod
}
let nums = -5 
if (num>0){
    console.log(`${nums} positif`)
}else{
    console.log(`${nums} negatif`)
}


// ---> if else if else <---

let x = -5
if(x>0){
    console.log(`${x} positif sayı`)
}
else if (x<0) {
    console.log(`${x} negatif sayı`)
} else {
    console.log(`${x} sıfıra eşit `)
}


// ---> Switch <---

// switch (key) {
//     case value:
//         // code
//         break;

//     default:
//         // code
// }



let day=5

switch (day) {
    case 1:
        console.log("pazartesi")
        break;
    case 2:
        console.log("salı")
        break;
    case 3:
        console.log("çarşamba")
        break;
    case 4:
        console.log("perşembe")
        break;
    case 5:
        console.log("cuma")
        break;
    case 6:
        console.log("cumartesi")
        break;
    case 7:
        console.log("pazar")
        break;
   
    default:
        console.log("sayı 1 7 arasında değil")
}



// ---> Ternary Operatörü <---

let age=18
age<18 
? console.log("Ehliyet alamassın")
:console.log("ehliyet alabilirsin")


