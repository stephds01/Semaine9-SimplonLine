/**
 * Created by Stéphanie on 23/11/2015.
 */

var surfaceRayon = function() {
    var rayon = Number(prompt("Entrer le rayon de votre cercle"));

    if(rayon >0 && rayon <1000){
        aire = Math.PI * (rayon*2);
        alert("L'aire du cercle est : " + aire);
    }
};
