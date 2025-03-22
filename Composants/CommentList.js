//Sert afficher la liste des commentaire dans la page blog
function CommmentList({BLogId}) {
    //doit aller chercher mes infos dans mon API
    const [commentaires, setCommentaires] = React.useState([]);

    //Faire un fetch
    const getCommentairesAsyc =async (id) => {
        const reponse = await fetch(`http://localhost:3000/publications/${id}/commentaires`);
        if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
        return await reponse.json();
    }

    //utilse useEffect pour aller chercher mes commentaires
    React.useEffect(() => {
        getCommentairesAsyc(BLogId).then((data => setCommentaires(data)))
        .catch(error => console.log(error)
        );
    }, [])
    
    //Doit faire un map pour afficher mes commentaires

    return(
    <div className="container" id="commentaireBd">
        <div className="d-flex justify-content-left">
            <svg className = "img-client" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-square" viewBox="0 0 25 25">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
            <p class="text-start">Start aligned text on all viewport sizes.</p>
        </div>
    </div>
    )
}