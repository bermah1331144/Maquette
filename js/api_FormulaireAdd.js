
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
    document.getElementById("confirmationPublication").addEventListener("submit", async function(event) {
        event.preventDefault(); 

        let attributPublication = {
            "id": generateIdPublication(),
            "titre": $("#titre").val(),
            "auteur": $("#auteur").val(),
            "date": generationDatePublication(),
            "contenu": $("#contenu").val()
        };

        try {
            const response = await fetch("http://localhost:3000/publications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(attributPublication)
            });

            if (response.ok) {
                const resultat = await response.json();
                console.log("Votre publication a été ajoutée avec succès :", resultat);
                window.location.href = "PagePrincipale.html"; 
            } else {
                throw new Error(`Erreur lors de l'envoi du commentaire : ${response.status}`);
            }
        } catch (error) {
            console.error("Erreur :", error);
        }
    });
}

// Appelle la fonction pour attacher l'événement après le chargement de la page
ajouterPublicationBd();


/*
    fonction qui fait apparaitre la boite de dialogue apres avoir appuyer sur confirmer
    Ìl appel de la fonction creationBoiteDialogue() pour faire apparaitre la boite de dialogue
*/
$(document).ready(function () {
    $("#openDialog").on("click", function () {
        $("#confirmationAjoutePublication").show();
    });
});

$("#button[type='reset']").on("click", function () {
    $("#confirmationAjoutePublication").hide();
});

$("#comentaireForm").on("submit", function (event) {
    event.preventDefault();
    ajouterPublicationBd();
});