/**
 * Created by Stéphanie on 24/11/2015.
 */

var tabs = [-2, 1, 4];

function additionne(x) {
    tabs.forEach(function(item){
        for(var i = 0; i < tabs.length; i++) {
            result = item + x
            console.log(result);
        }
    });
}

alert(additionne(5));