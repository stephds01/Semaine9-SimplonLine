/**
 * Created by St�phanie on 24/11/2015.
 */

var tabs = [-2, 1, 4];

function additionne(x) {
    return (x + 2);
}

function affiche(){
    alert(additionne(tabs[0]));
    alert(additionne(tabs[tabs.length]-1));
}