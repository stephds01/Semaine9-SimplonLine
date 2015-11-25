/**
 * Created by Stéphanie on 24/11/2015.
 */

var a = 3;
var b = 2;

function multiplie(x) {
    var result = x * 3;

    return result;
}

function affiche() {
    var resultA = multiplie(a);
    var resultB = multiplie(b);
    alert('Le résultat de la multiplication avec la valeur "a" est : ' + resultA);
    alert('Le résultat de la multiplication avec la valeur "a" est : ' + resultB);
}