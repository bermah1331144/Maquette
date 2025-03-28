//Sert afficher la liste des commentaire dans la page blog
function CommentList({blogId}) {
    //doit aller chercher mes infos dans mon API
    const [commentaires, setCommentaires] = React.useState([]);

    //Faire un fetch
    const getCommentairesAsyc =async () => {
        const reponse = await fetch(`http://localhost:3000/commentaires?publicationId=${blogId}`);
        if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
        return await reponse.json();
    }

    //utilse useEffect pour aller chercher mes commentaires
    React.useEffect(() => {
        getCommentairesAsyc(blogId).then((data => setCommentaires(data)))
        .catch(error => console.log(error)
        );
    }, [])
    
    return (

        <>
        </>
        /*<div className="comment-list">
            {commentaires.map((commentaire) => (
               <Comment key={commentaire.id} commentaire={commentaire} />
            ))}
        </div>*/
    )

}