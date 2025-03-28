
function AddComment({blogId, onCommentAdd}) {
    const [auteur, setAuteur] = React.useState('');
    const [contenu, setContenu] = React.useState('');
    
    const HandleSumbit = async(e) => {
        e.preventDefault();
    
    const nouveauCommentaire = {
        auteur,
        contenu,
        publicationId: blogId
    }
    }
    return (
        <form onSubmit={HandleSumbit}>
            <input
                type="text"
                placeholder="Auteur"
                value={auteur}
                onChange={(e) => setAuteur(e.target.value)}
            />
            <input
                type="text"
                placeholder="Contenu"
                value={contenu}
                onChange={(e) => setContenu(e.target.value)}
            />
            <button type="submit">Ajouter un commentaire</button>
        </form>
    ) 

}

// doit faire la requete qui va envouyer le commentaire dans mon API
function ajouterCommentaireBd() {
    try {
        const response = fetch("http://localhost:3000/commentaires", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nouveauCommentaire)
        });
        const commentaire = response.json();
        affichereDataCommentaires(publicationId,commentaire);
    } catch (error) {
        console.log(error);
    }
    if (response.ok) {
        const resultat = response.json();
        console.log("Votre publication a été ajoutée avec succès :", resultat);

        setAuteur('');
        setContenu('');
    }
    else{
        throw new Error(`Erreur lors de l'envoi du commentaire : ${response.status}`);
    }
}

function btn() {
    return (
        <button class="btn btn-primary" id="envoyer">Envoyer</button>
    )
}