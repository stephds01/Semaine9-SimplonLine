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
contact0.init("Stephanie","GOUJON", "06 75 74 32 01");

var contact1 = Object.create(Contact);
contact1.init("Alfredo","DE SA", "06 80 46 38 42");

var contact2 = Object.create(Contact);
contact2.init("Celia","DE SA", "06 00 00 00 00");

var contact3 = Object.create(Contact);
contact3.init("Camille","DE SA", "06 00 00 22 22");


    //Je crée un tableau Contact
    var contacts = [];

    //je pushe les contacts ds le tab
    contacts.push(contact0);
    contacts.push(contact1);
    contacts.push(contact2);
    contacts.push(contact3);

    ////Je boucle mon tableau d'objet
    //contacts.forEach(function(contact){
    //      console.log(contact);
    //  });


    /*********************************************************************/
    /********   Récupération des Id et les transformer en variable   ******/
    /*********************************************************************/


    /**************** Navigation      ************************/
    var inscript = document.getElementById('inscript');
    var recherch = document.getElementById('recherch');
    var contac = document.getElementById('contac');

    var inscription = document.getElementById('inscriptionContainer');
    var recherche = document.getElementById('rechercheContainer');
    var contact = document.getElementById('contactContainer');

    /**************** Affichage des input     ************************/
    var rechercheNom = document.getElementById('rechercheNom');
    var recherchePrenom = document.getElementById('recherchePrenom');
    var rechercheNumero = document.getElementById('rechercheNumero');
    var resultatRecherche = document.getElementById('resultatRecherche');


    var ajouter = document.getElementById('ajouter');


    /**************** Page inscription   ************************/
    var prenom = document.getElementById('prenom');
    var nom = document.getElementById('nom');
    var numero = document.getElementById('numero');

    var nvxContact = document.getElementById('nvxContact');

    /**************** Page Recherche   ************************/
    var recherc = document.getElementById('recherc');
    //var error = document.getElementById('error');





    /*****************************************************************/
    /*              MENU                                             */
    /*****************************************************************/
    function affichageContact() {
        contact.style.display="block";
        recherche.style.display="none";
        inscription.style.display="none";
    }

    function affichageRecherche() {
        recherche.style.display="block";
        contact.style.display="none";
        inscription.style.display="none";
    }

    function affichageInscrire() {
        inscription.style.display="block";
        contact.style.display="none";
        recherche.style.display="none";
    }



    /*****************************************************************/
    /*              PAGE INSCRIPTION                                   */
    /*****************************************************************/
    /********* Fonction qui affiche le nvx Contact sous le formulaire d'inscription***********/
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



    /*************  Bouton pour supprimer le contenu ou le faire réapparaitre ********/
    function effacerContact () {
            nvxContact.style.display="none";
    }

    function restaurer () {
        nvxContact.style.display="block";
    }



    /*******Je crée une fonction qui ajoute un contact********/
        function ajouterContact() {

        var regNom = /^[a-zA-Zéèë]+$|[a-zA-Zéèë]+[-]+[a-zA-Zéèë]+$|[a-zA-Zéèë]+[\\ ]+[a-zA-Zéèë]+$/gi;
        var regPrenom = /^[a-zA-Zéèë]+$|[a-zA-Zéèë]+[-]+[a-zA-Zéèë]+$|[a-zA-Zéèë]+[\\ ]+[a-zA-Zéèë]+$/gi;
        var regTel = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/gi;

            if( regNom.test(nom.value) == true && regPrenom.test(prenom.value) == true && regTel.test(numero.value) == true) {

                var contactNew = Object.create(Contact);
                contactNew.init(prenom.value, nom.value, numero.value);
                contacts.push(contactNew);

                afficherListeNvxContact();

                nom.value = "";
                prenom.value = "";
                numero.value = "";

            } else if(regNom.test(nom.value) == false) {
                alert('oups,la saisie de votre nom n\'est pas valide ! ');
                nom.value = "";
            } else if(regPrenom.test(prenom.value) == false) {
                alert('oups,la saisie de votre prenom n\'est pas valide ! ');
                prenom.value = "";
            } else if(regTel.test(numero.value) == false) {
                alert('oups,la saisie de votre numero n\'est pas valide ! ');
                numero.value = "";
            }

        //afficheContact();
        }



    /******Je crée un fonction qui supprime le dernier contact****/
        function supprimerContact() {
            contacts.pop();
        afficherListeNvxContact();
        afficheContact();
        }




    /*****************************************************************/
    /*              PAGE RECHERCHE                                   */
    /*****************************************************************/


    function rechercheContact () {

        resultatRecherche.innerHTML = '';
        var error = document.getElementById('error');


        function resut() {
            var text = tabs[i].nom.toUpperCase() + " " + tabs[i].prenom.toUpperCase() + " " + tabs[i].numero;

            var li = document.createElement('li');
                li.id="liSuppr";
            var liText = document.createTextNode(text);
            li.appendChild(liText);

            resultatRecherche.appendChild(li);
            error.innerHTML="";

        }

        rechercheNom.value = rechercheNom.value.toLowerCase();
        recherchePrenom.value = recherchePrenom.value.toLowerCase();

        var tabs = [];

        for (var i = 0; i < contacts.length; i++) {

            //On transforme en minuscule les élément du tab
            contacts[i].nom = contacts[i].nom.toLowerCase();
            contacts[i].prenom = contacts[i].prenom.toLowerCase();


            var a = contacts[i].nom;
            var b = contacts[i].prenom;
            var c = contacts[i].numero;




            if (a === rechercheNom.value || b === recherchePrenom.value || c === rechercheNumero.value ) {
                if (a === rechercheNom.value) {

                    for (var t = 0; t < contacts.length; t++) {
                        tabs.push(contacts[t]);
                    }
                    resut();

                } else if (b === recherchePrenom.value) {

                    for (var t = 0; t < contacts.length; t++) {
                        tabs.push(contacts[t]);
                    }
                    resut();

                } else if (c === rechercheNumero.value) {

                    for (var t = 0; t < contacts.length; t++) {
                        tabs.push(contacts[t]);
                    }
                    resut();

                }
            }
            //else if(){
            //    alert('Dommage , il n\'y a pas de contact avec ces informations');
            //
            //
            //}

        }
        //var error = document.getElementById('error');

        rechercheNom.value = "";
        recherchePrenom.value = "";
        rechercheNumero.value = "";
    }




    /*****************************************************************/
    /*              PAGE ANNUAIRE                                    */
    /*****************************************************************/

    /*******     //Je crée une fonction qui affiche les contacts    *****/
    function afficheContact() {

        //Je récupère mon id="liste"
        var liste = document.getElementById('liste');

        liste.innerHTML = "";

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

            colorLigne();

        }
    }
    //Affiche tes contacts ds le tableau HTML
    //afficheContact();


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




    /*****************************************/
    //   AddEventListener
    /******************************************/


    /*******    Menu    ***********/
    inscript.addEventListener('click', affichageInscrire, false);
    recherch.addEventListener('click', affichageRecherche, false);
    contac.addEventListener('click', affichageContact, false);


    /*******    Page Inscription    ***********/
    ajouter.addEventListener('click',ajouterContact ,false);


    /*******    Page Recherche    ***********/
    recherc.addEventListener('click', rechercheContact, false);


    /*******    Page Annuaire    ***********/

    contac.addEventListener('click',afficheContact , false);





