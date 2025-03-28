

function BlogDetails({blogId}) {
    
    const [BlogDetails,setBlogDetails] = React.useState([]);
    // Va chercher me donnée avec un fetch


    // !!!! -----------    VOIR CommentList.js il a la reponse pour aller chercher id
    const fetchPublications =async () => {
        const reponse = await fetch(`http://localhost:3000/publications/${blogId}`);
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
        <div className="blog-details">
            <h2>{BlogDetails.titre}</h2>
            <div className="text-center col-12">
                <img src="/images/img-blog.jpg" className="img-fluid" alt="..."/>
                <p className="text-">Image</p>
            </div>
            <p>{BlogDetails.contenu}</p>
        </div>
    )
}