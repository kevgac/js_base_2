/* Programmation fonctionnelle
  
    Fonction comme élément de premier ordre
*/
//es5
const add_ = function(a, b) {
    return a + b;
}


//es6
// Assigner une fonction à une variable
const add = (a, b) => a + b;

// Passer une fonction comme arguument
function applyOperation(a, b, operration) {
    return operration(a, b);
}

const result = applyOperation(5, 3, add);
console.log(result);

  

// Fonction pure car elle ne modifie pas l'état global
const multyply = (a,b) => a * b;

// Ex de fonction impure
function impureAdd(a){
    result += a;
    return result;
}
// car result existe en dehors de la fonction


let age = 18;
function  addOneYear(){
    age++;
}
// impure car elle modifie l'état global

console.log(age);
addOneYear();
addOneYear();
addOneYear();
addOneYear();
console.log(age);

const userAge = 18;
function addOneYear2(userAge){
   return (userAge += 1);
}
console.log("-------------------");
console.log(userAge);
console.log(addOneYear2(userAge));
console.log(addOneYear2(userAge));
console.log(addOneYear2(userAge));
console.log(userAge);
// pure car elle ne modifie pas l'état global et retourne une valeur
// on peut l'appeler plusieurs fois avec le même argument et on aura toujours le même résultat != de la fonction impure


console.log("-------------------");
// Une fonction pure à ce qu'on appelle la transparence référentielle. 
// Donc peu importe l'entrée elle retourne la meme sortie sans effet secondaire

function canGoToClub(userAge){
    if(userAge >= 18) return true;
    return false;
}

if (canGoToClub(userAge)){
    console.log("Super, je peux aller en boite !!");
}

// Immutabilité
const eleves = ["Jean", "Bob", "Toto"];
eleves.push("Sam");
console.log(eleves);

const sam = {
    name : "sam",
    prenom : "Samy",
    age : 19,
}
const toto = {
    name : "toto",
    prenom : "toto",
    age : 25,
}

sam.age = 25;
console.log(sam);

const mergedStudent = Object.assign({}, sam, toto);
console.log(mergedStudent);

// Fonction d'ordre supérieur (HOF)
// Une fonction qui prend une fonction en argument ou qui retourne une fonction

function createMultplier(multiplier){
    return function(x){
        return x * multiplier;
    }
}
const double = createMultplier(2);
const resultMul = double(5);
console.log(resultMul);

console.log("-------------------");
// Fonctions recursives
// Une fonction qui s'appelle elle-même
function sommeJusqua(n){
    if(n==1) return 1
    return n + sommeJusqua(n-1);
}
console.log(sommeJusqua(5));

