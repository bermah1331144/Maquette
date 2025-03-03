/* ----------- Affichage de ma page blogue ----------- */

document.addEventListener("DOMContentLoaded", getCommentairesAsyc);

//fonction recuperer les commentaires DEJA dans mon API
async function getCommentairesAsyc(){
    try {
        const response = await fetch("http://localhost:3000/commentaires");
        const commentaire = await response.json();
        affichereDataCommentaires(commentaire);
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

//fonction afficher des commentaires dans ma page blog
function afficherCommentaireBlog(publicationId){
    const dataCommentaires = document.getElementById("commentaire");
    
    if(!dataCommentaires) return;

    dataCommentaires.innerHTML = "";

    fetch("http://localhost:3000/publications/" + publicationId)
        .then(response => response.json())
        .then(commentaires => { 
            if(!commentaires.length === 0){
                dataCommentaires.innerHTML += "<p>Aucun commentaire</p>";
                return
                }

            })

            commentaires.forEach(commentaires => {
                dataCommentaires.innerHTML += `           
                    <h1 class="text-center" id="titre-jeu">${publications.titre}</h1>
                    <div class="text-start" id="text-jeu">
                        <p>
                            ${commentaires.contenu}
                        </p>
                    </div>
                    <div class="text-center col-12">
                        <img src="/images/img-blog.jpg" class="img-fluid" alt="...">
                        <p class="text-">Image</p>
                    </div>
                    <div class="text-start" id="text-jeu">
                        <p>
                            ${commentaires.description}
                        </p>
                    </div>
                `;
        })

}


document.addEventListener("DOMContentLoaded", afficherCommentaireBlog(publicationId));




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
async function ajouterCommentaires(commentaire){
    try {
        const response = await fetch("http://localhost:3000/commentaires", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: $('#id').val(),
                date: $('#date').val(),
                contenu: $('#commentaire').val(),
                description : $('#description').val()

            })
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
