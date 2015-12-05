/**
 * Created by Stéphanie on 03/12/2015.
 */

    /*      --  EXEMPLES  --    */
/*
// On crée un objet
var contactEx = {
    nom : 'DESA',
    prenom : 'Stéphanie',
    tel : '06 75 74 32 01'

};
alert(contactEx.nom);
alert(contactEx.prenom);
alert(contactEx.tel);


//On crée un tableau objet

var contactsTab = [
    {
    nom: 'GOUJON',
    prenom: 'MArie',
    },
    {
    nom: 'DSA',
        prenom: 'Steph'
    }
];

alert(contactsTab[0].nom);
alert(contactsTab[1].prenom);
*/

/*      ---Exercices---     */

//document.addEventListener("DOMContentLoaded", function(){


    //Je crée un tableau Contact
    var contact = [
        {
            prenom: 'Stéphanie',
            nom: 'DESA',
            numero: '06 75 74 32 01'
        },
        {
            prenom: 'Alfredo',
            nom: 'DESA',
            numero: '06 80 46 38 42'
        }
    ];



    /********   Récupération des Id et les transformer en variable   ******/
    var liste = document.getElementById('liste');

    var prenom = document.getElementById('prenom');
    var nom = document.getElementById('nom');
    var numero = document.getElementById('numero');

    var ajouter = document.getElementById('ajouter');
    var supprimer = document.getElementById('supprimer');

    var recherche = document.getElementById('recherche');
    var resultatRecherche = document.getElementById('resultatRecherche');




    /******* Création des functions ******/

     //Je crée une fonction qui affiche les contacts
     function afficheContact() {
        //Je crée un élément vide
        var element = " ";
        //Je boucle le tableau contact ds le <li>
        for (var i = 0; i < contact.length; i++) {
            element += "<li>" + contact[i].prenom + " " + contact[i].nom + " " + contact[i].numero + "</li>";
        }
        //J'affiche dans le HTML l' element
        liste.innerHTML = element;
     }
    afficheContact();

     //Je crée une fonction qui ajoute un contact
    function ajouterContact() {
        contact.push(
            {
                prenom: prenom.value,
                nom: nom.value,
                numero: numero.value

            });
        afficheContact();
    }
    //Je crée un fonction qui supprime le dernier contact
    function supprimerContact() {
        contact.pop();
        afficheContact();
    }

    //fonction qui affiche le texte des valeurs du contact
    function texteContact(contact) {
        console.log('bob');
        //J'affiche la recherche dans une DIV
        resultatRecherche.innerHTML = "Le prénom est : " + contact.nom + " , Le nom est : " + contact.prenom + " , le numéro de téléphone est : " + contact.numero ;
    }

    console.log('resultat',resultatRecherche);

    //Je crée une fonction de recherche de contact
    function rechercheContact () {

        for(var i = 0; i < contact.length; i++) {
            //recherche = recherche.value;
            //var element = " ";
            if (contact[i].prenom === recherche.value) {

                console.log(contact[i].prenom);
                console.log(recherche);
                texteContact(contact[i]);
            } else {
                resultatRecherche.innerHTML = "Désolé, ce membre n'existe pas dans notre annuaire";
            }

        }

    }



// Navigation

//-----Page Inscription






