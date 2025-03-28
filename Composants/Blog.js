function Blog(){
    const [rechargerCommentaires, setRechargerCommentaires] = React.useState(false);

    const handleCommentaireAdd =() => {
        setRechargerCommentaires(!rechargerCommentaires);
    }




    //Doit aller afficher les details de l'article (BlogDetails ???)

    //Afficher la section commentaire(AddCommentaire + Comment ???) 
    return(
        <div className="blog">
        <h2>{blog.titre}</h2>
        <p>{blog.contenu}</p>
  
        {/* Ajouter un commentaire */}
        <AjouterCommentaire blogId={blog.id} />
  
        {/* Liste des commentaires */}
        <CommentList blogId={blog.id} />
      </div>
    );

}
function recupererIdBlogUrl(){
    //doit recuperer ID du blog dans mon URL 
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");

    if(!blogId){
        throw new Error("ID de blog non trouvée dans l'URL.");
        return <p>Chargement...</p>
    }
}   