/**
 * Created by St�phanie on 23/11/2015.
 */
////Pointer un ID particulier
//$liste = document.getElementById("liste");
//
////e.target  => au <li> qui a �t� cliqu� ds le <ul>
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
//$active.classList.contains('lol1');       //test la pr�sence de la classe demand�


/*************  EXO   ***********/
    //Demande d'une saisie
var prenom = prompt("Entrer un pr�nom");

//Cr�ation du tab
var tabs = [];

//Je push le prnom dsTab
tabs.push(prenom);


//Pointer l'element selectionn� !
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



//e.target  => au <li> qui a �t� cliqu� ds le <ul>
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

// Qd je clique sur id ="?", je d�roule la fonction selectionne()
(afficher());
$liste.onclick = selectionne;
$disparaitre.onclick = effacer;
$apparaitre.onclick = reapparaitre;

