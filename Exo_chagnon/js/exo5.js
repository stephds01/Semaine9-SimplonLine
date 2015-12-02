/**
 * Created by Stéphanie on 25/11/2015.
 */

function boucle(){

    var tabs = [];

    for(var i = 0, a = 2;  i <= 2; i++){
        var result = a * i;

        tabs.push(result * result);
    }
        alert(tabs);
}

function boucleDeux(){
    var longueur = Number(prompt("Veuillez saisir la longueur du tableau souhaitée "));

    var tabs = [];

    for(var i = 0, a = 2; i <= longueur; i++){
        var result = a *i;
        tabs.push(result);
    }
        alert(tabs);
}
