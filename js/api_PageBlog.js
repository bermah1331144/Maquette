/* ----------- Affichage de ma page blogue ----------- */

document.addEventListener("DOMContentLoaded",() => afficherCommentaireBlog(publicationId));

//fonction recuperer les commentaires DEJA dans mon API
async function getCommentairesAsyc(){
    try {
        const response = await fetch("http://localhost:3000/commentaires");
        const commentaire = await response.json();
        affichereDataCommentaires(publicationId,commentaire);
    } catch (error) {
        console.log(error);
    }

}



//récupérer l'identifiant de la publication
function recuperationIdentifiant(params) {
    const urlParams = new URLSearchParams(window.location.search);
    const publicationId = urlParams.get("id");
    return publicationId
}

const publicationId = recuperationIdentifiant();






/* --------------------  Partie ajouter un commentaire en bas de la page blog -------------------- */

//fonction pour inserer les information du commentaire date/id automatiquement
function generationDateCommentaire() {
    let date = new Date().toLocaleDateString();   
    return date;
}

//generation de l'identifiant autotiquement
function generateIdCommentraire() {
    let lastId = localStorage.getItem("lastPublicationId");
    let newId = lastId ? parseInt(lastId) + 1 : 1;
    localStorage.setItem("lastPublicationId", newId);
    return newId;
}


//envoyer donnée commentaire au server Json et rempli les attributs id/date/contenu/description
async function ajouterCommentaires(){
    const contenuCommentaire = $("#commentaire").val();
    const descriptionCommentaire = $("#description").val();

    if(!contenuCommentaire || !descriptionCommentaire){
        alert("Veuillez remplir tous les champs");
        return;
    }   

    const attributsCommentaire = {
        id: generateIdCommentraire(),
        publicationId: publicationId,
        date: generationDateCommentaire(),
        contenu: contenuCommentaire
    };

    try {
        const response = await fetch("http://localhost:3000/commentaires", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attributsCommentaire)
        });

        if (!response.ok) {
            throw new Error(`Erreur lors de l'envoie du commentaire.     : ${response.status}`);     
        }

        const resultat = await response.json();
        console.log("Votre commentaire a étét ajoutée avec succes :",resultat);
        document.getElementById("commentaire").value = "";
        afficherCommentaireBlog(publicationId);
    } catch (error) {
        console.log(error);
    }
}

//declenchement de l'evenement
document.getElementById("envoyer").addEventListener("click", ajouterCommentaires);



/*----------------------------Afficher les commentaires----------------------------*/
function afficherCommentaireBlog(publicationId){
    fetch(`http://localhost:3000/commentaires?publicationId=${publicationId}`)
        .then(response => response.json())
        .then(commentaires => {
            const dataCommentaires = document.getElementById("commentaireBd");
            dataCommentaires.innerHTML = "";
            commentaires.forEach(commentaires => {
                dataCommentaires.innerHTML += `
                
                <div class="d-flex justify-content-left">
                    <svg class = "img-client" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-square" viewBox="0 0 25 25">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                    <p class="text-start">${commentaires.contenu}</p>
                </div>
                `;
            });
        });
}           
