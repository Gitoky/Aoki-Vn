
const prompt = require("prompt-sync")


while(1==1){
    console.log("1.Versement")
    console.log("2.Retrait")
    console.log("3.Consulter le code")
    console.log("4.Quitter")
    let choix = +prompt("Votre choix :");

    switch (choix) {
        case 1 :
            // manao versement
            let versement = +prompt("Combien voulez vous verser ?");
            Solde = solde + versement // solde += versement
            console.log("Versement effectue!")
            break;

        case 2 :
            // Retrait
            let retrait = +prompt("Combien voulez vous retirer? ");
            if (retrait <= solde ){
                solde = solde - retrait; //solde -= retrait

            } else{
                console.log("Votre solde est insuffisant pour cette opreration")
            }
            break;

            
        case 3 :
            //consultation
            console.log("Votre solde est : "+solde)
            break;

        case 4 :
            //quitter
            console.log("Merci d'avoir utiliser notre service")
            break;
        default :
            // si c'est ne pas 1,2,3 ou 4
            console.log("Commande Invalide")
    }
}

if (choix==4);
    break;

