/**
 * Created by Stéphanie on 16/11/2015.
 */


var nombre = prompt("Entrez un nombre");
    var test = isNaN(nombre);
    if(test == false) {
        var convertirEnLettre = function () {
            nombre = nombre + "";
            console.log(nombre);

            for(var i = 0; i<nombre.length; i++) {
                console.log(nombre[i]);
            }
        }
    }else {
            console.log("Votre saisie n'est pas un chiffre");
        }

