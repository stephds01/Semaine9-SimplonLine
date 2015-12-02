/**
 * Created by Stéphanie on 02/12/2015.
 */

function modif_paragraphe(){
  var para = document.getElementById('premier');
    para.innerHTML='Premier paragraphe <i>corrigé</i>';
}

function centrage() {
    var titre = (document.getElementsByTagName('h1'))[0];
    titre.setAttribute('align', 'center');
}