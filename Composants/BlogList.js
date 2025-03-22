//Doit aller chercher mes informatios de mes blogs dans mon API
function BlogList() {

    // Va chercher me donnée avec un fetch
    const fetchPublications =async () => {
        const reponse = await fetch('http://localhost:3000/publications');
        if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
        return await reponse.json();
    }

    const [blogList, setBlogList] = React.useState([]);

    // !!!! -----------    VOIR CommentList.js il a la reponse pour aller chercher id
    //utilse useEffect pour aller chercher mes publications
    React.useEffect (() => {
        fetchPublications().then((data => setBlogList(data)))
        .catch(error => console.log(error)
        );
    }, [])

    return (

    <div class="container-card-container">
        <div class="row justify-content-center">
            <div id="dynamicCardsContainer" class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-sm-12 col-lg-4">
                    <div class="card">
                        <img src={BlogList.img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{BlogList.titre}</h5>
                                <p class="card-text">{BlogList.contenu}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>  
        </div>         
    </div>
    )
}

function AfficherBlogList(Props){

} 
