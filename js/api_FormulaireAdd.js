
/* -------Doit faire une requete jQuery --------*/
//PAGE FormulaireAdd

//fonction pour inserer les information du commentaire date/id automatiquement
function generationDatePublication() {
    let date = new Date().toLocaleDateString();   
    return date;
}

//generation de l'identifiant automatiquement
function generateIdPublication() {
    let lastId = localStorage.getItem("lastPublicationId");
    let newId = lastId ? parseInt(lastId) + 1 : 1;
    localStorage.setItem("lastPublicationId", newId);
    return newId;
}

//fonction pour inserer les information du publication dans mon JSON en respectant les attributs
async function ajouterPublicationBd() {
    try {
        const response = await fetch("http://localhost:3000/publications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": generateIdPublication(),
                "titre": $("#titre").val(),
                "auteur": $("#auteur").val(),
                "date": generationDatePublication(),
                "contenu": $("#contenu").val()
            })
        });

        if (!response.ok) {
            throw new Error(`Erreur lors de l'envoie du commentaire     : ${response.status}`);
        }

        const resultat = await response.json();
        console.log("Votre publication a étét ajoutée avec succes :", resultat);
        window.location.href = "Page_Principale.html";
    } catch (error) {
        console.log(error);
    }
}

/*
    Creation et contenu de la boite de dialogue
    Appel la fonction insererCommentaireBd()
*/
function creationBoiteDialogue() {
    
    $(document).ready(function () {
        
        $("#confirmationAjoutePublication").dialog({
            autoOpen: false,
            modal: true,
            buttons: {
                "confirmer": function () {
                    ajouterPublicationBd();
                    $(this).dialog("close");
                    window.location.href = "Page_Principale.html";
                },
                "annuler": function () {
                    $(this).dialog("close");
                }
            }
        })
    });

    $("#openDialog").click(function () {
        $("#confirmationAjoutePublication").dialog("open");
    });
}

/*
    fonction qui fait apparaitre la boite de dialogue apres avoir appuyer sur confirmer
    Ìl appel de la fonction creationBoiteDialogue() pour faire apparaitre la boite de dialogue
*/
$(document).ready(function () {
    $("#confirmationAjouteCommentaireForm").submit(function (event) {
        event.preventDefault();
        creationBoiteDialogue();
    });
});