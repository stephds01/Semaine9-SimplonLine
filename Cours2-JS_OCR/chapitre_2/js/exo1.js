/**
 * Created by Stéphanie on 13/12/2015.
 */

//On recrée l'élémént de base avec l'id d'origine
var mainDiv = document.createElement('div');
    mainDiv.id = 'divTP1';


//1er element texte
var text1 = document.createTextNode('Le ');
mainDiv.appendChild(text1);


//1er element strong
var strongElement1 = document.createElement('strong');

var strong1 = document.createTextNode(" World Wide Web Consortium ");

strongElement1.appendChild(strong1);
mainDiv.appendChild(strongElement1);

//2eme element texte
var text2 = document.createTextNode(' abrégé par le sigle ');
mainDiv.appendChild(text2);

//2eme element strong

var strongElement2 = document.createElement('strong');
var strong2= document.createTextNode('W3C');
strongElement2.appendChild(strong2);
mainDiv.appendChild(strongElement2);

//3eme element texte
var text3 = document.createTextNode(' , est un ');
mainDiv.appendChild(text3);


//1er element 'a'
var elementA = document.createElement('a');
elementA.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
elementA.title = "Organisme de normalisation";

aText1 = document.createTextNode('organisme de standardisation');
elementA.appendChild(aText1);
mainDiv.appendChild(elementA);



//4eme element texte
var text4 = document.createTextNode('à but non-lucratif chargé de promouvoir la compatibilité des technologies du ');
mainDiv.appendChild(text4);

//2eme element 'a'
var elementA2 = document.createElement('a');
elementA2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
elementA2.title = "World Wide Web";

var textA2 = document.createTextNode('World Wide Web');

elementA2.appendChild(textA2);
mainDiv.appendChild(elementA2);





//Afficher ds le document
document.body.appendChild(mainDiv);





