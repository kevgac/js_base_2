/*
    Décomposition : Fusion d'objets 
    Écrivez une fonction prenant deux objets en argument et fusionnez-les pour former un nouvel objet, en utilisant la décomposition d'objets.
*/

function fusionObjets(obj1, obj2){
    return {...obj1, ...obj2};
}
const obj3 = fusionObjets("toto", "tutu");
console.log(obj3)

console.log("-------------------");
const doubler = x => x+x;
const carre = x => x*x;

const appliquer = x => carre(doubler(x));
console.log(appliquer(5));

console.log("-------------------");

function createdObject(prop1, prop2, prop3){
    return {prop1,prop2,prop3};
}
function curryCreatedObject(prop1){
    return function(prop2){
        return function(prop3){
            return {prop1, prop2, prop3};
        };
    };
};
const objCurry = curryCreatedObject("toto")("tutu")("titi");
console.log(objCurry);

console.log("-------------------");
function extraireInfos(objet) {
    const { propriete1, propriete2: { sousProp1, sousProp2 } } = objet;
    return { propriete1, sousProp1, sousProp2 };
}
  
  // Exemple d'utilisation
  const objetImbrique = {
    propriete1: 'valeur1',
    propriete2: {
      sousProp1: 'valeur2',
      sousProp2: 'valeur3'
    }
  };
  
  const infosExtraites = extraireInfos(objetImbrique);
  console.log(infosExtraites);
  