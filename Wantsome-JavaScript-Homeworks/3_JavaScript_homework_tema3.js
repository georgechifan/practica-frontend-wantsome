//1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
//raporta acest lucru in consola. (exemplu: “2 este numar par”);
//Scrieti functia in doua variante: while si for
//------------------------------

// function verificareParitate(){                       //am declarat functia cu numele verificareParitate iar ca si parametrii nu am setat nimic
//     for (var i=0;i<=20;i++){                         //folosind bucla "for" pentru functia definita anterior am setat valorile de la 0 la 20 conform cerintei si am initiat variabila i, careia i-am alocat valoarea 0
//         if (i%2==0){                                 //conditia if verifica daca restul impartirii la 2 este 0 sau 1 (par sau impar)
//             console.log (i + " este numar par");     // am afisat rezultatul dorit daca prima conditie este indeplinita, in acest caz numarul par
//         }
//         else{                                        //daca prima conditie nu este indeplinita, adica daca numarul este impar
//             console.log (i +  " este numar impar");  //afiseaza rezultatul dorit, in acest caz numarul impar
//         }
//     }
// }

// verificareParitate();                                //apel de functie

//am refacut functia ca atunci cand o apelam sa ne putem alege pana la ce numar dorim sa afisam numerele pare/impare.
//am conditionat variabila i sa mearga exact pana la numarul introdus ca si argument
// function verificareParitate(nr){
//         for (var i=0;i<=nr;i++){
//             if (i%2==0){
//                 console.log (i + " este numar par");
//             }
//             else{
//                 console.log (i +  " este numar impar");
//             }
//         }
//     }
//     verificareParitate(3); //apel de functie cu un argument ales


// function verificareParitate() {                         //am declarat functia cu numele verificareParitate
//     var i = 0;                                          //am definit variabila i careia i-am dat valoarea 0, adica de la ce numar sa porneasca
//     while (i <= 20) {                                   //structura while se repeta pana cand este indeplinita conditia, adica i ajunge la 20
//         if (i % 2 == 0) {                               //la fel ca mai sus, conditia if verifica daca restul impartirii la 2 este 0 sau 1 (par sau impar)
//             console.log(i + " este numar par");         //am afisat rezultatul dorit daca prima conditie este indeplinita, in acest caz numarul par
//         }
//         else {                                          //daca prima conditie nu este indeplinita, adica daca numarul este impar
//             console.log(i + " este numar impar");       //afiseaza rezultatul dorit, in acest caz numarul impar
//         }
//         i+=1;                                           //i este incrementat cu 1
//     }
// }
// verificareParitate();                                   //apel de functie
//_____________________________________________________________________________________________________________________________________________________



//2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
//rezultatul. (exemplu: “3*9=27”).
//Scrieti functia in doua variante: while si for
//------------------------------------

// function iterateMultiplyWithNine(){                 //am declarat functia cu numele iterateMultplyWithNine
//         for (var i=0;i<=10;i++){                    //folosind bucla "for" pentru functia definita anterior am setat valorile de la 0 la 10 conform cerintei si am initiat variabila i, careia i-am alocat valoarea 0
//                 console.log (i + "*9="+i*9);        //am afisat: ex: 3*9=27, prin definirea ca si text a operatiilor de inmultire
//     }
// }
//    iterateMultiplyWithNine();                                //apel de functie




// function iterateMultiplyWithNine(){                   //am declarat functia cu numele iterateMultiplyWhithNine
//     var i=0;                                          //am definit variabila i si i-am dat valoarea 0, adica valoarea de la care sa porneasca
//     while (i<=10){                                    //structura while se repeta pana cand este indeplinita conditia, adica i ajunge la 10
//         console.log (i + " * 9 = " + i*9);            //afiseaza rezultatul sub forma de text si formula
//         i+=1;                                         //i este incrementat cu 1
//     }
// }
// iterateMultiplyWithNine();                            //am apelat functia

//_______________________________________________________________________________________________________________________________________________________


//3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
//(exemplu: 1 * 0 = 0
//    1 * 1 = 1
//    …
//   1 * 10 = 10 )
//    Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.
//-----------------------

// function tablaInmultirii(){                                 //declarare functie
//     var i=1;                                                //variabila i a luat valoarea 1
//     while (i<=10){                                          //cat timp i o sa aiba valoarea maxima 10
//         var j=0;                                            //ii definim si o noua variabila j - adica 1*0, de la care sa porneasca fiecare inmultire
//         while (j<=10){                                      //pentru aceasta variabila j ii punem conditia sa fie maxim 10
//             console.log(i + " * " + j + " = " + i*j);       //afisam operatiunea de inmultire pentru fiecare variabila in parte
//             j+=1;                                           //trece la j-ul urmator
//         }
//         i+=1;                                               //trece la i-ul urmator
//     }
// }
// tablaInmultirii();                                          //apel




//varianta a doua cu while in for....working :)

// function tablaInmultirii(){
//     var i=1;
//     for (i=1;i<=10;i++){
//         var j=0;
//         while(j<=10){
//             console.log(i + " * " + j + " = " + i*j);
//             j+=1;
//         }
//     }
// }
// tablaInmultirii();
//__________________________________________________________________________________________________________________________________________________


//4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
//poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
//calificativul B \n ...samd “). Atentie: Rezultatul calificativul trebuie sa fie obtinut prin utilizarea functiei
//dezvoltate la tema anterioara !
//-----------------------------------------
var calificativPunctaj=function(nota){

if (nota<=3){
    return "Pentru " + nota + ", obtii calificativul E";
} else {
    if (nota>=4 && nota<=6){
    return "Pentru " + nota + ", obtii calificativul D";
} else {
    if(nota===7 || nota===8){
        return "Pentru " + nota + ", obtii calificativul B";
} else {
    if(nota===9){
        return "Pentru " + nota + ", obtii calificativul A";
    }
    else {
        return "Pentru " + nota + ", obtii calificativul A+";
    }
}
}
}
}
function afisareCalificativPunctaje(){      //declarare functie cu numele afisareCalificativPunctaje 
    for(i=1;i<=10;i++){                     //prin bucla for ii atribuim o valoare variabilei i, sa fie maxim 10 si o incrementam
        console.log(calificativPunctaj(i)); //afisam functia definita la exercitiul anterior luand variabila noastra i
    }
}
afisareCalificativPunctaje();               //apelare functie nou creata dar in care este inclusa functia veche