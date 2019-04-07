// function valNum (nr){
// var i;
//     for (i=0;i<nr;i++){
//         console.log("sunt la iteratia " + i);
//     }
// }
// valNum(4);


// var studs=["Alin", "George"];

// function iterateOverArray(arrayToIterate){
//     var i;
//    // console.log('asdas') ////pentru a vedea daca iti intra in functie
//     for(i=0;i<arrayToIterate.length; i++) {
//         console.log(arrayToIterate[i]);
//     }
// }
// iterateOverArray(studs);

// var car={name:"Mustang",type:"550D", year: "1970"};
// var x;
// function ElementObject(){
//     for (y in car){
//        text+=car[x]+ "";
//     }
// }
// ElementObject();
// console.log(ElementObject(y));



// var userDetails={  //declar obiect
//     "name":"andrei",
//     "surname":"unknown",
//     "age":59
// }
// function printObjectData(obj){ //declar functie
//     for(key in obj){
//         console.log(obj[key]); //afiseaza in consola
//     }
// }
// printObjectData(userDetails);


// var text="";
// function numberObj(){
// for(var i=0;i<1001;i+=100){
//     text+=i + " ";
// }
// console.log(text);}
// numberObj();



// var text="";
// function numberObj(){
// for(var i=1;i<=128;i*=2){
//     text+=i + " ";
// }
// console.log(text);}
// numberObj();



var text="";
function numberObj(){
for(var i=3;i<=16;i+=3){
    text+=i + " ";
}
console.log(text);}
numberObj();


// var text="";
// function numberObj(){
//     for(var i=9;i>=0;i-=1) {
//         text+=i + " ";
//     }
//     console.log(text);
// }
// numberObj();

// var text="";
// function numberObj(){
//     for(var i=1;i<=4;i+=1) {
//         text+=i + " ";
//     }
//     console.log(text);
// }
// numberObj();



// var text="";
// function numberObj(){
//     for(var i=0;i<=10;i+=1) {
//         text+=i + " ";
//     }
//     console.log(text);
// }
// numberObj();



//i*=2 (i=i*2)

//3. i+=2

//4.

//for (i=3,i<=15);   i+=3
//(i=9,i>=0);   i-=1
//(i=1,i<=4)       i+=1
//(i=0,i<=10) sau for in for   i+=1


// actionFn=function(){
//     console.log("vreau sa ies la tabla");
// }

// counter=10;
// conditionalFn=function(){
//     counter--;
//     return counter>=0;
// };
// stream=function (cond, action){
//     while(cond()){
//         action();
//     }
// }
// stream(conditionalFn, actionFn);



computeSumOfArrayElements =function (arr){
    var arrLength=arr.length;
    var sum=0;
    while (arrLength>=1){
        sum+=arr[arrLength];
        arrLength--;
    }
    return sum;
}
    console.log(computeSumOfArrayElements[1,2,3,4]);

