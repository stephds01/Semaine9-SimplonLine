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
//document.addEventListener("DOMContentLoaded", function(){
/*********      ---Exercices---     ********/




/****Je crée le prototype de l'objet contact****/
var Contact = {
    //Initialise le contact
    init:function(prenom, nom, numero){
        this.prenom = prenom;
        this.nom = nom;
        this.numero = numero;
    }
};

var contact0 = Object.create(Contact);
contact0.init("Stephanie","DE SA", "06 75 74 32 01");

var contact1 = Object.create(Contact);
contact1.init("Alfredo","DE SA", "06 80 46 38 42");

    //Je crée un tableau Contact
    var contacts = [];

    //je pushe les contacts ds le tab
    contacts.push(contact0);
    contacts.push(contact1);

    ////Je boucle mon tableau d'objet
    //contacts.forEach(function(contact){
    //      console.log(contact);
    //  });






    /********   Récupération des Id et les transformer en variable   ******/
    var liste = document.getElementById('liste');

    var prenom = document.getElementById('prenom');
    var nom = document.getElementById('nom');
    var numero = document.getElementById('numero');


    var ajouter = document.getElementById('ajouter');
    var nvxContact = document.getElementById('nvxContact');
    var supprimer = document.getElementById('supprimer');

    var rechercheNom = document.getElementById('rechercheNom');
    var recherchePrenom = document.getElementById('recherchePrenom');
    var rechercheNumero = document.getElementById('rechercheNumero');
    var resultatRecherche = document.getElementById('resultatRecherche');




    /******* Création des functions ******/


/*****************************************************************/
/*              PAGE ANNUAIRE                                    */
/*****************************************************************/

/*******     //Je crée une fonction qui affiche les contacts    *****/
     function afficheContact() {

        //Je récupère mon id="liste"
        var liste = document.getElementById('liste');

            //Je boucle mon tableau d'objet contacts
            for( var i = 0 ; i < contacts.length; i++) {
                //A l'intérieur de la boucle ce trouve le contenu de la ligne de mon tableau affichage HTML

                //LE PRENOM
                //Je crée un element tr
                var tr = document.createElement('tr');

                //Je crée un element td
                var td = document.createElement('td');
                var prenom = document.createTextNode(contacts[i].prenom);

                //Ajoute le prénom ds le td
                td.appendChild(prenom);

                //J'ajoute td dans mon tr
                tr.appendChild(td);

                //LE NOM
                //Je crée un element td
                td = document.createElement('td');
                var nom = document.createTextNode(contacts[i].nom);

                //Ajoute le nom ds le td
                td.appendChild(nom);

                //J'ajoute td dans mon tr
                tr.appendChild(td);

                //J'ajoute tr dans mon tbody
                liste.appendChild(tr);

                //LE NUMERO
                //Je crée un element td
                td = document.createElement('td');
                var numero = document.createTextNode(contacts[i].numero);

                //Ajoute le nom ds le td
                td.appendChild(numero);

                //J'ajoute td dans mon tr
                tr.appendChild(td);

                //J'ajoute tr dans mon tbody
                liste.appendChild(tr);
            }
     }
    //Affiche tes contacts ds le tableau HTML
    afficheContact();


/******* Coloration d'une ligne sur 2 du tableau********/
    function colorLigne() {
    //Je récupère l'id 'table' et je lui met la méthode row
    var ligneTab = document.getElementById('table').rows;

    //Je crée un variable Jusqu'à la dernière ligne
    var ligne = ligneTab.length;

    //Je boucle les lignes du tableau
    var i = 0;
    while (i < ligne) {
        //si la ligne est pair on met une couleur sinon on met une autre couleur
        if (i % 2 == 0) {
            ligneTab[i].style.backgroundColor = "#ffe502";
        } else {
            ligneTab[i].style.backgroundColor = "#d3d1d1";
        }
        i++;
    }

    //J'ajoute une couleur différente au tHead
    var bg = document.getElementById('bg');
    bg.style.backgroundColor = "#333";
}
colorLigne();



/*****************************************************************/
/*              PAGE INSCRIRE                                    */
/*****************************************************************/

/********* Fonction qui affiche le nvx Contact souc le formulaire d'inscription***********/
function afficherListeNvxContact(){
    var element = "";
    for(var i =0; i< contacts.length; i++){
        element += "<li>";
        element += contacts[i].prenom + " " + contacts[i].nom + " " + contacts[i].numero;
        element += "</li>";
    }
    nvxContact.innerHTML = element;
}
afficherListeNvxContact();



/*******Je crée une fonction qui ajoute un contact********/

    function ajouterContact() {
    contacts.push(
        {
            prenom: prenom.value,
            nom: nom.value,
            numero: numero.value

        });
    afficherListeNvxContact();
    }


/******Je crée un fonction qui supprime le dernier contact****/
    function supprimerContact() {
        contacts.pop();
    afficherListeNvxContact();
    }




/*****************************************************************/
/*              PAGE RECHERCHE                                   */
/*****************************************************************/


/****************Je crée une fonction de recherche de contact**************/
    function rechercheContact () {


    for(var i = 0; i < contacts.length; i++) {

        rechercheNom.value = rechercheNom.value.toLowerCase();
        recherchePrenom.value = recherchePrenom.value.toLowerCase();
        rechercheNumero.value = Number(rechercheNumero.value);

        contacts[i].prenom = contacts[i].prenom.toLowerCase();
        contacts[i].nom = contacts[i].nom.toLowerCase();

        var titreH3 = "Voici le résultat de votre recherche : ";

        if (contacts[i].prenom === recherchePrenom.value) {
            var element = " ";

                element += contacts.prenom;
                resultatRecherche.innerHTML = titreH3 + "<br />" + contacts[i].nom.toUpperCase() + " " + contacts[i].prenom.toUpperCase() + " " + contacts[i].numero;


        }else if (contacts[i].nom === rechercheNom.value) {
            element = " ";

            element += contacts.nom;
            resultatRecherche.innerHTML = titreH3 + "<br />" + contacts[i].nom.toUpperCase() + " " + contacts[i].prenom.toUpperCase() + " " + contacts[i].numero;

        } else if (contacts[i].numero === rechercheNumero.value) {
            element = " ";

            element += contacts.numero;
            resultatRecherche.innerHTML = titreH3 + contacts[i].nom.toUpperCase() + " " + contacts[i].prenom.toUpperCase() + " " + contacts[i].numero;

        } else {
            resultatRecherche.innerHTML = "Désolé, ce membre n'existe pas dans notre annuaire";
        }
    }

}











