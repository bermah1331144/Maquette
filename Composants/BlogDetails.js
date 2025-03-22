

function BlogDetails({publicationId}) {
    
    const [BlogDetails,setBlogDetails] = React.useState([]);
    // Va chercher me donnée avec un fetch


    // !!!! -----------    VOIR CommentList.js il a la reponse pour aller chercher id
    const fetchPublications =async () => {
        const reponse = await fetch('http://localhost:3000/publications');
        if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
        return await reponse.json();
    }
    
   //utilse useEffect pour aller chercher mes publications 
    React.useEffect(()=>{
        fetchPublications().then((data => setBlogDetails(data)))
        .catch(error => console.log(error)
        );
     }, [])

     return (
    <div class="container" id="jeuId">
        <div class="row">
            <div class="col-12">
                <img src="/images/mario.jpg" class="card-img-top" alt="..."/>
            </div>
            <h1 class="text-center" id="titre-jeu">Blog</h1>
            <div class="text-start" id="text-jeu">
                <p id ="contenu">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
            <div class="text-center col-12">
                <img src="/images/img-blog.jpg" class="img-fluid" alt="..."/>
                <p class="text-">Image</p>
            </div>
            <div class="text-start" id="text-jeu">
                <p id="description">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
    </div>
    )
}