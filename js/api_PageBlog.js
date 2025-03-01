/*--------------------  Requetes a porpos de COMMENTAIRES --------------------*/
//Doit faire une requete AJAX a l'API pour obtenir la publication. 
// en utilisante les query parameters je doit opteniridentifiant a charger


//fonction obterni commentaires
async function getCommentairesAsyc(){
    try {
        const response = await fetch("http://localhost:3000/commentaires");
        const commentaire = await response.json();
        affichereDataCommentaires(commentaire);
    } catch (error) {
        console.log(error);
    }

}

function generateId() {
    let lastId = localStorage.getItem("lastPublicationId");
    let newId = lastId ? parseInt(lastId) + 1 : 1;
    localStorage.setItem("lastPublicationId", newId);
    return newId;
}


//fonction pour inserer les information de la publication
function generationInfoCommentaire() {
    let date = new Date().toLocaleDateString();
    let id = generateId();

    let nouveauCommentaire = {
        id: id,
        date: date, 
        contenu : document.getElementById("content").value

    };
    return nouveauCommentaire;
}

//fonction afficher des commentaires

function affichereDataCommentaires(dataCommentaires){
    const dataCommentaires = document.getElementById("commentaire");
    
    if(!dataCommentaires) return;

    dataCommentaires.innerHTML = "";

    dataCommentaires.forEach(commentaire => {
        //chercher mon template

        dataCommentaires.innerHTML += `           
            <div class="container commentaire">
                <div class="d-flex justify-content-left">
                    <svg class = "img-client" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-square" viewBox="0 0 25 25">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                    <p class="text-start">${commentaire.content}</p>
                </div>
            </div>
        `;
        return dataCommentaires;
    })
}
document.addEventListener("DOMContentLoaded", affichereDataCommentaires(dataCommentaires));



//envoyer donne au server Json
async function ajouterCommentaires(commentaire){
    try {
        const response = await fetch("http://localhost:3000/commentaires", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentaire)
        });

        if (!response.ok) {
            throw new Error(`Erreur lors de l'envoie du commentaire.     : ${response.status}`);     
        }

        const resultat = await response.json();
        console.log("Votre commentaire a étét ajoutée avec succes :",resultat);
        document.getElementById("commentaire").value = "";
    } catch (error) {
        console.log(error);
    }
}
//declenchement de l'evenement
document.getElementById("envoyer").addEventListener("click", ajouterCommetaires(commentaire));
/* ----------Doit faire une requete jQuery -----------*/
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const publicationId = urlParams.get("id");
    getCommentairesAsyc(publicationId);
    chargerCommentairesAfficher();
})