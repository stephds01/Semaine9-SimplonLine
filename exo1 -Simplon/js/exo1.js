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
contact0.init("Stéphanie","DE SA", "06 75 74 32 01");

var contact1 = Object.create(Contact);
contact1.init("Alfredo","DE SA", "06 80 46 38 42");

    //Je crée un tableau Contact
    var contacts = [];

    //je pushe les contacts ds le tab
    contacts.push(contacts[0]);
    contacts.push(contacts[1]);

    console.log(contacts);



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

/*******     //Je crée une fonction qui affiche les contacts    *****/
     function afficheContact() {

        //Je récupère mon id="liste"
        var liste = document.getElementById('liste');

            //Je boucle mon tableau d'objet contact
            for( var i =0; i <contacts.length; i++) {
                //A l'intérieur de la boucle ce trouve le contenu de la ligne de mon tableau affichage HTML

                //LE PRENOM
                //Je crée un element tr
                var tr = document.createElement('tr');

                //Je crée un element td
                var td = document.createElement('td');
                var prenom = document.createTextNode(contacts[i].prenom);

                //Ajoute le prénom ds le td
                prenom = td.appendChild(prenom);

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
    afficheContact();


/******* Coloration d'une ligne sur 2 du tableau********/
function colorLigne() {
    //Je récupère l'id 'table' et je lui met la méthode row
    var ligneTab = document.getElementById('table').rows;

    //Je crée un variable 'Jusqu'a la dernière ligne

    //Je boucle les lignes du tableau
    var ligne = ligneTab.length;
    var i = 0;
    while (i < ligne){
        //si la ligne est pair on met une couleur sinon on met une autre couleur
        if(i % 2 == 0){
            ligneTab[i].style.backgroundColor = "#ffe502";
        } else {
            ligneTab[i].style.backgroundColor = "#d3d1d1";
        }
        i++;
    }
    //J'ajoute une couleur différente au tHead
    var bg = document.getElementById('bg');
    bg.style.backgroundColor="#333";
}
colorLigne();



/*******Je crée une fonction qui ajoute un contact********/

function ajouterContact() {
    contacts.push(
        {
            prenom: prenom.value,
            nom: nom.value,
            numero: numero.value

        });
    contacts.push(contact);



    ////J'ajoute une ligne à mon tableau html
    var ligne = liste.insertRow(-1);

    //j'ajoute une 1ère cellulle a ma ligne'
    var col1 = ligne.insertCell(0);
    col1.innerHTML += document.getElementById('prenom').value;

    //j'ajoute une 2ème cellulle a ma ligne'
    var col2 = ligne.insertCell(0);
    col2.innerHTML += document.getElementById('nom').value;

    //j'ajoute une 2ème cellulle a ma ligne'
    var col3 = ligne.insertCell(0);
    col3.innerHTML += document.getElementById('numero').value;

        contacts.push(
            {
                prenom: prenom.value,
                nom: nom.value,
                numero: numero.value

            });
    contacts.push(contact1);
        afficheContact();
    }


/******Je crée un fonction qui supprime le dernier contact****/
    function supprimerContact() {
        contacts.pop();
        afficheContact();
    }





/*************fonction qui affiche le texte des valeurs du contact***********/
    function texteContact(contacts) {
        console.log('bob');
        //J'affiche la recherche dans une DIV
        resultatRecherche.innerHTML = "Le prénom est : " + contacts.nom + " , Le nom est : " + contacts.prenom + " , le numéro de téléphone est : " + contacts.numero ;
    }

    //console.log('resultat',resultatRecherche);


/****************Je crée une fonction de recherche de contact**************/
    function rechercheContact () {

        for(var i = 0; i < contacts.length; i++) {
            //recherche = recherche.value;
            //var element = " ";
            if (contacts[i].prenom === recherche.value) {

                console.log(contacts[i].prenom);
                console.log(recherche);
                texteContact(contacts[i]);
            } else {
                resultatRecherche.innerHTML = "Désolé, ce membre n'existe pas dans notre annuaire";
            }

        }

    }









