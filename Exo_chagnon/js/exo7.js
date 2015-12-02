/**
 * Created by Stéphanie on 01/12/2015.
 */
function jourDeLaSemaine(){

    var date =  new Date;
    console.log(date);

    var jour = date.getDay();
    console.log(jour);

    switch (jour) {
        case 1:
            console.log("On est lundi");
            break;

        case 2:
            console.log("On est mardi");
            break;

        case 3:
            console.log("On est mercredi");
            break;

        case 4 :
            console.log("On est jeudi");
            break;

        case 5 :
            console.log("On est vendredi");
            break;

        case 6 :
            console.log("On est samedi");
            break;

        case 7 :
            console.log("On est dimanche");
            break;
        default:
            console.log("Désolé, la rentrée n'est pas correcte");
    }
}