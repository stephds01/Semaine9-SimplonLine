/**
 * Created by Stéphanie on 15/12/2015.
 */
//Evenement  avec DOM 0
//Je récupère l'ID que je transforme en variable
var element = document.getElementById('clickMe');

//je prends la variable suivit de la Methode de l'Evenement et je crée une fonction
element.onclick = function (){

    alert('Vous avez cliqué !');
};

//Supprime simplement un evenement ds DOM1
element.onclick = function() {};



//Evenement  avec DOM 2
//Je récupère mon element via ID
var span = document.getElementById('event1');

span.addEventListener('click',function() {
    alert('Vous avez cliqué avec le DOM 2 ')}, false);



//Evenement Pb a resoudre
var myDiv = document.getElementById('myDiv');
var result = document.getElementById('result');

    myDiv.addEventListener('mouseover', function(){
        result.innerHTML = "Le surseur vient d'entrée ds l'element";
    }, false);

    myDiv.addEventListener('mouseout', function(){
        result.innerHTML = "Le curseur vient de sortir de l'element"
    }, false);


