/**
 * Created by Stéphanie on 20/11/2015.
 */
//Création du tableau de contact
var contacts = ["Denis", "Alain", "Stephanie"];

//Créer une fonction afficher mon tableau de contact

function afficherListe(){

    for(var i = 0; i < contacts.length; i++) {
        alert( contacts[i]);
    }
}

document.write(afficherListe());


Alors il faut faire une boucle for sur le count de ton array et chaque loop fera un getElementById avec un innerHTML qui ajoutera tes <li>