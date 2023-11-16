/*
    Exercice 1 :
*/
console.log("Exercice 1 :");
function multiply (a, b){
    return (a * b);    
}
const result = multiply(4, 6);
console.log(result);
console.log("-------------------");

function divide (a, b){
    return (a / b);    
}
const result2 = divide(10, 2);
console.log(result2);
console.log("-------------------");

function operate (a, b, operation){
    return operation(a, b);
}
const result3 = operate(15, 2, multiply);
console.log(result3);
console.log("-------------------");

/*
    Exercice 2 : 
*/
console.log("Exercice 2 :");
function pureAdd (a, b){
    return (a + b);
}
const result4 = pureAdd(10, 2);
console.log(result4);
console.log("-------------------");

function pureSubstract_ (a, b){
    return (a - b);
}
const result5 = pureSubstract_(10, 2);
console.log(result5);

/*
function pureSubstract (x){

}
const result6 = pureSubstract(10, 2, 3);
console.log(result6);
*/


/*
    Exercice 3 :
*/
console.log("Exercice 3 :");
//écrivez une fonction higherOrderAdd qui prend en paramètre une fonction et qui retourne une fonction qui double le résultat de la fonction donée.

function higherOrderAdd (double){
    return function (x){ 
        return x * x;
    }
}
const double = higherOrderAdd(2);
const resultMul = double(5);
console.log(resultMul);


console.log("-------------------");
//3.2
const mapToUpper = function (tab){
    return tab.map(function (element){
        return element.toString().toUpperCase();
    });   
}

const mapToUpper1 = function (tab){
    return tab.toString().toUpperCase(); 
}

const tab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(mapToUpper(tab));
console.log(tab);
console.log("Affiche en UpperCase mais pas soous forme de tab : " + mapToUpper1(tab));

console.log("-------------------");
//3.3
const word = ["hello"];
console.log(mapToUpper(word));


/*
    Exercice 4 :
*/
console.log("Exercice 4 :");
//4.1
const nombres = [1, 2, 3, 4, 5];
const nombresCarre = function (tab){
    return tab.map(function (x){
        const carre = x * x;
        if (carre %2 === 0){
            return carre;
        }
        return null;
    });
}
const nombresCarre1 = nombresCarre(nombres);
console.log(nombresCarre1);
console.log(nombres);
// manque le reduce pour additionner les nombres pairs

console.log("-------------------");
//4.2 et 4.3
const FilterNombresImpairs = nombres
  .filter(function (x) {
    return x % 2 === 1; // Filtre les nombres impairs
  })
  .reduce(function (acc, rec) {
    return acc + rec; // Additionne les nombres impairs
  }, 0);
console.log("La somme des nombres impaires est de : " + FilterNombresImpairs);


/*
    Exercice 5 :
*/
console.log("Exercice 5 :");
//5.1
const recFactorielle = function(n){
    if(n==0 || n==1){
    return 1;
    }
    return n*recFactorielle(n-1);
}
console.log(recFactorielle(5));

/*
    Exercice 6 :
*/
console.log("Exercice 6 :");
//6.1
const recSommeChiffre = function(n){
    const valeur = n.toString().split('').map(Number);
    if (valeur.length === 1) {
        return valeur[0];
    }
    return valeur[0] + recSommeChiffre(valeur.slice(1).join(''));
}
const nombre = 12;
const chiffres = recSommeChiffre(nombre);
console.log(chiffres);

/*
    Exercice 7 :
*/
console.log("Exercice 7 :");
//7.1
const recFibonacci = function(n){
    if(n===0) return 0;
    if(n===1) return 1;
    return recFibonacci(n-1) + recFibonacci(n-2);
}
const nbFibo = 6;
const fibo = recFibonacci(nbFibo);  
console.log("le nombre de Fibonacci de " + nbFibo + " est : " + fibo);