/**
 * Created by Stéphanie on 13/12/2015.
 */
//Crée l'element de base
var mainDiv = document.createElement('div');
mainDiv.id = "divTP3";


//Je crée le paragraphe
var paragraphe = document.createElement('p');
var textPara = document.createTextNode('Langages basés sur ECMAScript :')
paragraphe.appendChild(textPara);
mainDiv.appendChild(paragraphe);



//Je crée le tableau Language

var langages = [
    {
        t : 'JavaScript',
        d : 'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.'
    },
    {
        t : 'JScript',
        d : 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'
    },
    {
        t : 'ActionScript',
        d : "ActionScript est le langage de programmation utilisé au sein d'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator)."
    },
    {
        t : 'EX4',
        d : "ECMAScript for XML (E4X) est une extension XML au langage ECMAScript."
    }
];



//Je crée le DL
    var dl = document.createElement('dl');

    var elementDt, elementDtText,
        elementDd, elementDdText;

for(var i = 0, c = langages.length; i < c; i++) {

    elementDt = document.createElement('dt');

    elementDtText = document.createTextNode(langages[i].d);
    elementDt.appendChild(elementDtText);
    dl.appendChild(elementDt);

    elementDd = document.createElement('dd');
    elementDdText = document.createTextNode(langages[0].d);
    elementDd.appendChild(elementDdText);
    dl.appendChild(elementDd);

    mainDiv.appendChild(dl);
}






//Affiche ds le doc

document.body.appendChild(mainDiv);

