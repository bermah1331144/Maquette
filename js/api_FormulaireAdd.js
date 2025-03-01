

async function getCommentairesAsyc(){
    try {
        const response = await fetch("http://localhost:3000/publications");
        const data = await response.json();
        affichereDataCommentaires(data);
    } catch (error) {
        console.log(error);
    }

}




/* -------Doit faire une requete jQuery --------*/
//PAGE FormulaireAdd
    //Boite dialogue
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Le DOM est chargé !");
        getPublicationsAsyc();
    });
    
    //permet de charger le DOm pour les commentaires
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Le DOM est chargé !");
        getCommentairesAsyc();
    });  
//Fonction qui vas enclancher la boite de dialogue
//ATTENTION J,ai une erreur que je ne comprend pas 
$(document) .ready(function () {
    $("#boiteDialogue").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
    
            "confirmer": function () {
                $(this).dialog("close");
                window.location.href = "Page_Principale.html";
            },
            "annuler": function () {
                $(this).dialog("close");
            }
        }
    });
})

//Faire apparaitre la boite de dialogue avec le bouton
$("#openDialog").click(function () {
    $("#boiteDialogue").dialog("show");
});

//jQuery pour formulaire
$(document).ready(function () {
    $("#confirmationAjouteCommentaireForm").submit(function (event) {
        event.preventDefault();
        addInfomation();
        $("#boiteDialogue").dialog("show");
    });
});