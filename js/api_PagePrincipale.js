/*--------------------  Requetes a propos de PUBLICATIONS --------------------*/

const dataPublications = document.getElementById("dynamicCardsContainer");




//Obtenir les publications dans mon API
async function recupererPublicationsAsyc(){
    try {
        const response = await fetch("http://localhost:3000/publications");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}




//Fonction pour inserer les informations des publications dans ma page principale

async function afficherLesPublications(){
    const publications = await recupererPublicationsAsyc();
    creationContenuCards(publications);

}



/* ----------Doit faire une requete jQuery -----------*/

//Ajouter un lien sur chaque publication sur ma page principale et me transfert a la PageBlog dédier a idPublication

async function creationContenuCards(publications){
    try {
            let cardPublication = document.getElementById("dynamicCardsContainer");
            cardPublication.innerHTML = "";
            
            publications.forEach(publication => {
                let card = document.createElement("div");
                card.classList.add("col-sm-12", "col-lg-4");

                    card.innerHTML += `
                        <div class="card">
                            <img src="images/img-card-2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${publication.titre}</h5>
                                <p class="card-text">${publication.contenu}</p>
                                <a href="/PageBlog.html?id=${publication.id}" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    `;
                    cardPublication.appendChild(card);
                }
            );

        } catch (error) {
            console.log(error);
        }
    }

document.addEventListener("DOMContentLoaded", function() {
    afficherLesPublications();
});