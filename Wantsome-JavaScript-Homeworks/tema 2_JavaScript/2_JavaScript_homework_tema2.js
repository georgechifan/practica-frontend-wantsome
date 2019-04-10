

//WORK
// 1. Scrieti o functie de tip named function care 
// accepta ca argument un CNP si verifica sexul unei persoane. 
// In urma apelului acestei functii, se va returna un text de 
// forma "Persoana verificata este de sexul M/F".

// function namedFunctionCNP(CNP) {
//     if (CNP.charAt(0) === "1"|| CNP.charAt(0) === "5" ) {
//         return "Persoana verificata este de sex M";
//     } else {
//         if (CNP.charAt(0) === "2"|| CNP.charAt(0) === "6" ){
//         return "Persoana verificata este de sex F";
//     }else {
//         return "CNP invalid"}
//     }
// }
// console.log(namedFunctionCNP("2900421330521"));


// 2. Scrieti o functie de tip function expression 
// care accepta ca argument o valoare numerica cuprinsa 
// intre 1 si 10 si decide calificativul punctajului. 
// Criteriile sunt urmatoarele:
// - 1-3 = E
// - 4-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma 
// "Calificatul corespunzator punctajului [punctaj] este [calificativ]".


//WORKS
// var calificativPunctaj=function(nota){

// if (nota<=3){
//     return "Calificativul corespunzator punctajului " + nota + " este E";
// } else {
//     if (nota>=4 && nota<=6){
//     return "Calificativul corespunzator punctajului " + nota + " este D";
// } else {
//     if(nota===7 & nota===8){
//         return "Calificativul corespunzator punctajului " + nota + " este B";
// } else {
//     if(nota===9){
//         return "Calificativul corespunzator punctajului " + nota + " este A";
//     }
//     else {
//         return "Calificativul corespunzator punctajului " + nota + " este A+";
//     }
// }

// }
// }}
// console.log(calificativPunctaj(10));


// 3. Scrieti o functie care accepta ca argument numele 
// marcii unei masini si returneaza un text de forma: 
// "Marca [marca] se produce in [tara]". Trebuie sa aveti 
// macar 6 cazuri. In cazul in care functia nu recunoaste 
// marca, va returna "Marca este necunoscuta. " Scrieti 
// codul in 3 variante diferite.


//WORKS-VAR 1
// var CarType=function(brandName){
//     switch(brandName){
//         case "volkswagen": return "Marca volkswagen se produce in Germania";
//         break;

//         case "Dacia": return "Marca Dacia se produce in Romania";
//         break;

//         case "Renault": return "Marca Renault se produce in Franta";
//         break;

//         case "Tesla": return "Marca Tesla se produce in California";
//         break;

//         case "Mustang": return "Marca Mustang se produce in USA";
//         break;

//         case "Mazda": return "Marca Mazda se produce in Japonia";
//         break;

//         default: return "Marca este necunoscuta";
//     }
// }
// console.log(CarType("toyota"));



//VAR 2-WORKS
// var dacia ={
//     model: "Dacia",
//     make: "Romania",
//     CarType: function() {
//         console.log(this.model+ ' se produce in ' + this.make)
//     }
// };
// var Mazda ={
//     model: "mazda",
//     make: "Japonia",
//     CarType: function() {
//         console.log(this.model+ ' se produce in ' + this.make)
//     }
// };
// var volkswagen ={
//     model: "volkswagen",
//     make: "Germania",
//     CarType: function() {
//         console.log(this.model+ ' se produce in ' + this.make)
//     }
// };
// var Mustang ={
//     model: "mustang",
//     make: "SUA",
//     CarType: function() {
//         console.log(this.model+ ' se produce in ' + this.make)
//     }
// };
// var Tesla ={
//     model: "tesla",
//     make: "California",
//     CarType: function() {
//         console.log(this.model+ ' se produce in ' + this.make)
//     }
// };
// var Renault ={
//     model: "renault",
//     make: "Franta",
//     CarType: function() {
//         console.log(this.model+ ' se produce in ' + this.make)
//     }
// };
// Tesla.CarType();

// VAR 3 

// function brandName(numeMarca){
//     if(numeMarca=="Tesla"){
//         return "Marca " + numeMarca + " se produce in California";
//     }

//     else if(numeMarca=="Renault"){
//         return "Marca " + numeMarca + " se produce in Franta";
//     }

//     else if(numeMarca=="Mustang"){
//         return "Marca " + numeMarca + " se produce in SUA";
//     }
//     else if(numeMarca=="Volkswagen"){
//         return "Marca " + numeMarca + " se produce in Germania";
//     }
//     else if(numeMarca=="Mazda"){
//         return "Marca " + numeMarca + " se produce in Japonia";
//     }
//     else if(numeMarca=="Dacia"){
//         return "Marca " + numeMarca + " se produce in Romania";
//     }
//     else{
//         return "Marca este necunoscuta";
//     } 
// }
// console.log(brandName("Tesla"));

//WORKS
// 4. Scrieti o functie de tip IIFE care afiseaza in consola:
//  "Afisez, deci ma autoapelez". Veti crea un fisier 
//  javascript separat pe care il veti include intr-un 
//  fisier html. Verificarea se va face prin deschiderea 
//  paginii html in browser.
// var result=(function(){
//     var IIFEFunc="Afisez, deci ma autoapelez";
//     return IIFEFunc;
// })()---se autoapeleaza
// console.log(result);