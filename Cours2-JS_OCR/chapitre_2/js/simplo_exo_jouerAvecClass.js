/**
 * Created by St�phanie on 23/11/2015.
 */
//
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


//Pointer l'element selectionn� !
$liste = document.getElementById("liste");
$disparaitre = document.getElementById("disparaitre");
$apparaitre = document.getElementById("apparaitre");

//e.target  => au <li> qui a �t� cliqu� ds le <ul>
function selectionne (e){
    e.target.classList.toggle("selected");
}

// Faire disparaitre les <li> grace au button
function effacer(){
    $liste.style.display = 'none';
}

// Faire apparaitre les <li> grace au button
function reapparaitre() {
    $liste.style.display = 'block';
}




// Qd je clique sur id ="?", je d�roule la fonction selectionne()
$liste.onclick = selectionne;
$disparaitre.onmousedown = effacer;
$apparaitre.onclick = reapparaitre;



/*************  Correction  ***********/
////Pointe les �l�ments
//$liste = document.getElementById("liste");
//$disparaitre = document.getElementById("disparaitre");
//$apparaitre = document.getElementById("apparaitre");
//
//
////cr�ation de fonction pour mettre un fond a l'elememnt
// function select (e) {
//     e.target.classList.toggle("selected");
// }
//
////cr�ation de fonction disparaitre
//function effacer (){
//    for(var i = 0; i < $liste.children.length; i++){
//        if($liste.children[i].classList.contains("selected")){
//            $liste.children[i].classList.add("poubelle");
//        }
//    }
//}
//
////cr�ation de fonction pour restaurer
//function reapparaitre(){
//    for(var i=0; i<$liste.children.length; i++) {
//        $liste.children[i].classList.remove("poubelle");
//    }
//}
//
//$liste.onclick = select;
//$disparaitre.onclick = effacer;
//$apparaitre.onclick = reapparaitre;






