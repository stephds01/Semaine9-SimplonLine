/**
 * Created by Stéphanie on 13/12/2015.
 */

//Je crée l'element de base
var mainDiv = document.createElement('div');
mainDiv.id = "divTP";

//On crée les éléments
var elementP = document.createElement('p');
var elementUl = document.createElement('ul');
var elementLi0 = document.createElement('li');
var elementLi1 = document.createElement('li');
var elementLi2 = document.createElement('li');
var elementLi3 = document.createElement('li');


//Je crée les noeud de texte
var texteP = document.createTextNode("Langages basés sur ECMAScript : ")
var texteLi = [
    document.createTextNode('Javascript'),
    document.createTextNode('JScript'),
    document.createTextNode('ActionScript'),
    document.createTextNode('EX4')
];


//On crée le paragraphe

elementP.appendChild(texteP);
mainDiv.appendChild(elementP);





//crée la liste

//elementUl.appendChild(elementLi0);
//elementLi0.appendChild(texteLi[0]);
//
//elementUl.appendChild(elementLi1);
//elementLi1.appendChild(texteLi[1]);
//
//elementUl.appendChild(elementLi2);
//elementLi2.appendChild(texteLi[2]);
//
//elementUl.appendChild(elementLi3);
//elementLi3.appendChild(texteLi[3]);
//
//mainDiv.appendChild(elementUl);


//Autre posibilité
var uList = document.createElement('ul'),
    uItem;

for(var i = 0, c = texteLi.length; i < c; i++ ) {
    uItem = document.createElement('li');

    uItem.appendChild(texteLi[i]);
    uList.appendChild(uItem);
}
mainDiv.appendChild(uList);



//Affiche ds le document
document.body.appendChild(mainDiv);
