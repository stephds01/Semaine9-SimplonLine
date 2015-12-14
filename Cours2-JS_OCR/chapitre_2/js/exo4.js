/**
 * Created by Stéphanie on 14/12/2015.
 */

//Je crée la div de base
var mainDiv =  document.createElement('div');
mainDiv.id = "divTP4";


//Je créer les autres elements de la div 'divTP4'
var elementForm = document.createElement('form');

var elementFieldset = document.createElement('fieldset');
var elementLegend = document.createElement('legend');

var elementDiv =  document.createElement('div');
var elementLabel = document.createElement('label');

var elementInput1 = document.createElement('input');

var elementBr1 = document.createElement('br');
var elementBr2 = document.createElement('br');

var elementInput2 = document.createElement('input');


//Création des elements texte

  var legendText = document.createTextNode('Uploader une image ');
  var labelText = document.createTextNode('Image à Uploader ');


//J'affecte les attributs
elementForm.enctype ="mulyipart/form-data";
elementForm.method ="post";
elementForm.action ="upload.php";

elementLabel.for ="inputUpload";

elementInput1.type ="file";
elementInput1.name ="inputUpload";
elementInput1.id = "inputUpload";

elementInput2.type = "submit";
elementInput2.value = "Envoyer";

//J'insère ds le element Principal


elementDiv.appendChild(elementInput2);

elementDiv.appendChild(elementBr2);
elementDiv.appendChild(elementBr1);

elementDiv.appendChild(elementInput1);

elementLabel.appendChild(labelText);
elementDiv.appendChild(elementLabel);

elementFieldset.appendChild(elementDiv);

elementLegend.appendChild(legendText);
elementFieldset.appendChild(elementLegend);

elementForm.appendChild(elementFieldset);

mainDiv.appendChild(elementForm);



//Je mets le style :
elementDiv.style.textAlign = "center";


//Affiche ds la page
document.body.appendChild(mainDiv);
