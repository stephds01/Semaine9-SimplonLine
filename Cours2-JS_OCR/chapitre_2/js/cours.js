/**
 * Created by Stéphanie on 20/11/2015.
 */
//fonction "getElementById()"
//var div = document.getElementById('myDiv');
//document.write(div);


//fonction "getElementsByTagName();
//var divs = document.getElementsByTagName('div');
//    for(var i = 0, c = divs.length; i < c ; i++) {
//    alert('Element n°' + (i +1) + ' : ' + divs[i]);
//}


//Fonction querySelector()  && querySelectorAll()

//var query = document.querySelector('#menu .item span'),
//    queryAll = document.querySelectorAll('#menu .item span');
//
//document.write(query.innerHTML);
//document.write(queryAll.length);


//Editer des elements HTML
var link = document.getElementById('myLink');
var href = link.getAttribute('href');

console.log(href);

link.setAttribute('href', 'Http://www.google.fr');