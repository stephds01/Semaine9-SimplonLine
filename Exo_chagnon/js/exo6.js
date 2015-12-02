/**
 * Created by Stéphanie on 26/11/2015.
 */

var tab = [-2, 1, 4];



function soustraire(x){

        if(x >= 0) {
            return(x-2);
        } else {
            return "Le nombre " + x + " est Négatif !";

        }

}

function affiche() {
    alert(soustraire(tab[0]));
    alert(soustraire(tab.length -1));
}


