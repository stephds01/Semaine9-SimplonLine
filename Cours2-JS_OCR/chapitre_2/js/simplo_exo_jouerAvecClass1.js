/**
 * Created by Stéphanie on 23/11/2015.
 */
////Pointer un ID particulier
//$liste = document.getElementById("liste");
//
////e.target  => au <li> qui a été cliqué ds le <ul>
//function selectionne (e){
//    e.target.classList.toggle("selected");
//}
//// Qd je clique sur id =liste, je deroule la fonction selectionne()
//$liste.onclick = selectionne;
//
//$active = document.getElementById("active");
//
//$active.classList.add("border");          //Ajouter
//$active.classList.remove("border");       // Effacer
//$active.classList.toggle('lol');          //Cumuler une class de +  class="lol lol1 "
//$active.classList.toggle('lol1');
//$active.classList.contains('lol1');       //test la présence de la classe demandé


/*************  EXO   ***********/
    //Demande d'une saisie
var prenom = prompt("Entrer un prénom");

//Création du tab
var tabs = [];

//Je push le prnom dsTab
tabs.push(prenom);


//Pointer l'element selectionné !
$liste = document.getElementById("liste");
$disparaitre = document.getElementById("disparaitre");
$apparaitre = document.getElementById("apparaitre");



//J'affiche le mon tableau ds le <li>
function afficher (prenom) {
    var liElement = document.getElementsByTagName('li');
    tabs.forEach(function(item){
        console.log(item);

    });
}



//e.target  => au <li> qui a été cliqué ds le <ul>
function selectionne (e){
    e.target.classList.toggle("selected");
}

// Faire disparaitre les <li> grace au button Effacer
function effacer(){
    for(var i = 0; i < $liste.children.length; i++){
        if($liste.children[i].classList.contains("selected")) {

            $liste.children[i].style.display = 'none';}
    }
}
// Faire apparaitre les <li> grace au button
function reapparaitre() {

    for(var i = 0; i < $liste.children.length; i++) {
        $liste.children[i].style.display= "block";
    }
}

// Qd je clique sur id ="?", je déroule la fonction selectionne()
(afficher());
$liste.onclick = selectionne;
$disparaitre.onclick = effacer;
$apparaitre.onclick = reapparaitre;

