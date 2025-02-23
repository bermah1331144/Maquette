/*
Index : 
http://localhost:3000/

EndPoints :
http://localhost:3000/publications
http://localhost:3000/commentaires
*/



const { get } = require("jquery");

/*--------------------  Requetes a porpos de PUBLICATIONS --------------------*/

const dataPublications = document.getElementById("card-body");
//Obtenir les publications
async function getPublicationsAsyc(){
    try {
        const response = await fetch("http://localhost:3000/publications");
        const data = await response.json();
        createDataPublications(data);
    } catch (error) {
        console.log(error);
    }

}


//doit creer une fonction pour creer les publications dans les cards

function createDataPublications(data){
    //const dataPublications = document.getElementById("card-body");
    
    if(!dataPublications) return;

    dataPublications.innerHTML = "";  //vider le contenu

    data.forEach(publication => {
        //chercher mon template

        dataPublications.innerHTML += `
        <div class="col-sm-12 col-lg-4">
            <div class="card">
                <img src="images/img-card-2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${publication.titre}</h5>
                    <p class="card-text">${publication.contenu}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `;

        return dataPublications;

    })

}




//Fontion pour inserer les informations des publications

async function insererDataPublications(dataPublications){
    const publications = await getPublicationsAsyc();
    if(!dataPublications) return;

    dataPublications.innerHTML = "";  //vider le contenu

    publications.forEach(publication => {
        const card = document.createElement(createDataPublications(publication));
        dataPublications.appendChild(card);
    })

}


// Fonciton pour ajouter les infromation des publications automatiquement pour les identifiant et les date

//funtion qui va générer ID unique

function generateId() {
    let lastId = localStorage.getItem("lastPublicationId");
    let newId = lastId ? parseInt(lastId) + 1 : 1;
    localStorage.setItem("lastPublicationId", newId);
    return newId;
}


//fonctiyon pour optenir la date actuelle
function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;   
}


//fonction pour ajouter les information
// ATTENTION !! ERREUR au niveau de la promesse !!!!!!!
async function addInfomation(){
    const publicationId = generateId();
    const date = getCurrentDate();
    const content = document.getElementById("content").value;
    const dataPublications = { publicationId, date, content };
    const response = await fetch("http://localhost:3000/publications", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataPublications)
    });

    if (response.ok) {
            const data = await response.json();
            createDataPublications(data);
        }
}


/*--------------------  Requetes a porpos de COMMENTAIRES --------------------*/
//Doit faire une requete AJAX a l'API pour obtenir la publication. 
// en utilisante les query parameters je doit opteniridentifiant a charger

//appeler la fonctione pour obternir les infomartion de la publication
//!!!! Pas sur que j'en est BEOSIN ??
async function getIdLoadAsyc(params) {
    const urlParams = new URLSearchParams(window.location.search);

    const id = urlParams.get("id");
    try {
        const response = await fetch("http://localhost:3000/publications/" + id);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        createDataPublications(data);
        insererDataPublications(data);
    } catch (error) {
        console.log(error);
    }

}


//fonction obterni commentaires
async function getCommentairesAsyc(){
    try {
        const response = await fetch("http://localhost:3000/commentaires");
        const data = await response.json();
        createDataCommentaires(data);
    } catch (error) {
        console.log(error);
    }

}

//fonction creation des commentaires

function createDataCommentaires(data){
    const dataCommentaires = document.getElementById("commentaires");
    dataCommentaires.innerHTML = "";

    data.forEach(commentaire => {
        dataCommentaires.innerHTML += `           
            <div class="container commentaire">
                <div class="d-flex justify-content-left">
                    <svg class = "img-client" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-square" viewBox="0 0 25 25">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                    <p class="text-start">Start aligned text on all viewport sizes.</p>
                </div>
            </div>
        `;
        return dataCommentaires;
    })
}


//consultation d'un commentaire
async function getCommentAsyc(params) {
    
}
//Ajouter un commmtaire 
