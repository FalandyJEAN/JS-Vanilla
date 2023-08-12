const readlineSync=require('readline-sync');
let couleurValide=false;

function dife(){
    while(couleurValide==false){
        let feu= readlineSync.question(`Entrer la couleur du feu circulation :`);
        feu=feu.toLowerCase();
    
        switch(feu){
            case "rouge":
                console.log("Le feu est rouge, veuillez vous arretez !!");
                couleurValide=true;
                break;
            case "jaune":
                console.log("Le feu est jaune, faites attention!");
                couleurValide=true;
                break;
            case "vert":
                console.log("Le feu est vert, vous pouvez y aller!");
                couleurValide=true;
                break;
            default:
                console.log("La couleur doit etre Rouge, Vert ou Jaune !!!")
        }
    }
}

dife();