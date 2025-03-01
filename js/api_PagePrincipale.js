/*--------------------  Requetes a porpos de PUBLICATIONS --------------------*/

const dataPublications = document.getElementById("dynamicCardsContainer");


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
    const dataPublications = document.getElementById("dynamicCardsContainer");
    
    if(!dataPublications) return;

    dataPublications.innerHTML = "";  //vider le contenu

    data.forEach(publication => {
        //chercher mon template


        dataPublications.innerHTML += `
        <div class="col-sm-12 col-lg-4">
            <div class="card">
                <img src="images/img-card-2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${publication.title}</h5>
                    <p class="card-text">${publication.content}</p>
                    <a href="/blog.html?id=${publication.id}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `;

        return dataPublications;

    })

}

document.addEventListener("DOMContentLoaded", getPublicationsAsyc);


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
/* ----------Doit faire une requete jQuery -----------*/
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const publicationId = urlParams.get("id");
    getPublicationsAsyc(publicationId);
    insererDataPublications(dataPublications);
});
