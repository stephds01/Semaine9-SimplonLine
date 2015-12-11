
//Je récupère les id et les transforme en variable
var liste = document.getElementById("liste");
var texte = document.getElementById("texte");
var ajouter = document.getElementById("ajouter");


//Crée un tableau de contact
var contacts = ["stéphanie", "Fred", "Alain"];



//Créer une fonction afficher mon tableau de contact
function afficherListe(){

    //J'initialise un element vide
    var element = " ";

        for(var i = 0; i < contacts.length; i++) {

            //Je boucle le tableau dans l'element
            element += "<li>" + contacts[i] + "</li>";

        }
        liste.innerHTML = element;
}
afficherListe();



//Créer un fonction qui ajoute un prénom au tableau
function ajouterElement() {
    contacts.push(texte.value);
    afficherListe();
}

//Je supprime le dernier element du tableau
function supprimerElement() {
    contacts.pop();
    afficherListe();
}


