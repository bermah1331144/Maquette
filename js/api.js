/*
Index : 
http://localhost:3000/

EndPoints :
http://localhost:3000/publications
http://localhost:3000/commentaires
*/ 


/*ATTENTION !!!! Je n'Est pas pu vérifier certaines fonctionnalités du site
    Je dois les tester en local
    Voici la liste:
        - add dans la fonction createDataPublications(${****})
        -Tester fonction async function insererDataPublications(dataPublications) */
        


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
    const dataPublications = document.getElementById("card-body");
    
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
    const dataPublications = document.getElementById("card-body");
    
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