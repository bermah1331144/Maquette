/*--------------------  Requetes a porpos de COMMENTAIRES --------------------*/
//Doit faire une requete AJAX a l'API pour obtenir la publication. 
// en utilisante les query parameters je doit opteniridentifiant a charger


//fonction obterni commentaires
async function getCommentairesAsyc(){
    try {
        const response = await fetch("http://localhost:3000/commentaires");
        const commentaire = await response.json();
        ajouterCommetaires(commentaire);
        createDataCommentaires(commentaire);
    } catch (error) {
        console.log(error);
    }

}

//fonction creation des commentaires

function createDataCommentaires(data){
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


//declenchement de l'evenement
document.getElementById("envoyer").addEventListener("click", ajouterCommetaires(commentaire));

//chargement des commentaire sur ma page de blog
async function chargerCommentairesAfficher(){
   
   try{
        const commentairesDansBD = getCommentairesAsyc();

        if(!commentairesDansBD){
            throw new Error("Aucun commentaire dans la base de donnée");
        }

        createDataCommentaires(commentairesDansBD);

        commentairesDansBD.sort((a, b) => new Date(b.date) - new Date(a.date));

        commentairesDansBD.forEach(commentaire => ajouterCommetaires(commentaire));
    }catch(error){
        console.log("Il y a une erreur dans la fontion chargerCommentairesAfficher :", error);
    }
}
//document.addEventListener("DOMContentLoaded", getCommentairesAsyc); 
//document.addEventListener("DOMContentLoaded", chargerCommentaires);

//envoyer donne au server Json
async function ajouterCommetaires(commentaire){
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