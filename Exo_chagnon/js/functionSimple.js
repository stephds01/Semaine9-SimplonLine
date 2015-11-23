/**
 * Created by Stéphanie on 23/11/2015.
 */




$lancer = document.getElementById("lancer");


    var functionSimple = function () {
        var largeur = Number(prompt("Entrez la largeur"));
        var longueur = Number(prompt("Entrez la longueur"));

        var aire = largeur + longueur;
        var perimetre = (largeur + longueur) * 2;

        alert("L'aire du rectangle est de :" + aire);
        alert("Le périmètre du rectangle est de : " + perimetre);
    };



