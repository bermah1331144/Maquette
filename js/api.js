/*
Index : 
http://localhost:3000/

EndPoints :
http://localhost:3000/publications
http://localhost:3000/commentaires
*/ 

//Obtenir les publications
async function getPublicationsAsyc(){
    try {
        const response = await fetch("http://localhost:3000/publications");
        const data = await response.json();
        insertDataPublications(data);
    } catch (error) {
        console.log(error);
    }

}

//doit creer une fonction pour inserer des publications
function insertDataPublications(data){
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
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `;

        return dataPublications;

    })

}