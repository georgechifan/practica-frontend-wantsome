// // // //1. Scrieti o functie care verifica daca un input este sau nu de tip string. 
// function string(a){
// return typeof a==="string";
// }
// //console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));

// // // //2. Scrieti o functie care verifica daca un string este gol sau nu.
// // function checkStringEmpty(a){
// //  return !a||a.length===0;
// // }
// // console.log(checkStringEmpty(''));
// // console.log(checkStringEmpty('abc'));




// // // //3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
// // // //console.log(string_to_array("Robin Singh"));
// // // //["Robin", "Singh"]
// // //   function string_to_array(a) {
// // // 	var string_to_array = a.split(',');
// // //  	return string_to_array;
// // // }
// // //   console.log(string_to_array('Robin,Singh'));


// // // //4. Scrieti o functie care transforma un string in forma abreviata:
// // // //console.log(abbrev_name("Robin Singh"));
// // // //"Robin S."

// // // function abbrev_name(name,prenume){
// // // var abbrev_name=name.abbrev(name);
// // // return abbrev_name;
// // // }
// // // console.log(abbrev_name("Robin Singh"));

// // // //nu afiseaza



// // // //5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
// // // function capitalizare(a){
// // //   var capitalizare=a.charAt(0).toUpperCase()+a.slice(1);
// // //   return capitalizare;
// // // }
// // // console.log(capitalize('js string exercises'));


// // // //6.  Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
// // // //console.log(truncate_string("Robin Singh",4));
// // // //"Robi"
// // // //var truncate="Robin Singh";
// // // //var result=truncate.split().slice("Robin Singh",4);
// // // //console.log(result);

// // // function truncate(nume){
// // //   var truncate=nume.truncate().slice();
// // // }
// // // console.log(truncate("Robin Singh",4));




//7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau
//nu:

//function isUpperCaseAt(a,b){
//  return a.charAt(b).toUpperCase()===a.charAt(b);
//}
//console.log(isUpperCaseAt('Js STRING EXERCISES', //1));



//8  Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
function insert(a,b,c){
  return a.slice()+b+a.slice(c);
console.log(insert('We are doing some exercises.','JavaScript ',18));
  
//"We are doing some exercises."
//"JavaScript We are doing some exercises."
//"We are doing some JavaScript exercises."


//9. Scrieti o functie care elimina prima aparitie // unui string dintr-un alt string:
function remove_first_occurrence(a,b){
  var result=a.indexOf(b);
  return a.slice(0,result)+a.slice(result+b.length);
}
  console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
 
//"The quick brown fox jumps over lazy dog"

  
  
//10. Scrieti o functie care compara doua string-uri case-insensitive:
  
  function compare_strings(a,b){
    return a.toUpperCase()===b.toUpperCase();
  }
console.log(compare_strings('abcd', 'AbcD'));
  
//true


// // // //11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
// // // //var string="Js string exercises"
// // // //var result=string.charAt(0).toLowerCase() + string.slice(1);
// // // //console.log(result);
// // // //.....





