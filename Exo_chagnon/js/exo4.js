/**
 * Created by St�phanie on 24/11/2015.
 */

var tabs = [-2, 1, 4];

function additionne(x) {
    tabs.forEach(function(item){
        for(var i = 0; i < tabs.length; i++) {
            var result = tabs[i] + x;
            alert("Le résultat " + i + " vaut :" + result);
        }
    });
}