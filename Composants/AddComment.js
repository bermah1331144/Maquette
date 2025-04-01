

/// PROBLEME AFFICHAGE !!!! 
function AddComment({blogId}) {
    const [contenu, setContenu] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [commentaires, setCommentaires] = React.useState([]);
    const [confirmation, setConfirmation] = React.useState(null);   
    const HandleSumbit = async(e) => {
        e.preventDefault();
    
    const nouveauCommentaire = {
        publicationId: blogId,
        date : new Date().toISOString().split('T')[0],
        contenu

    }

    const reponseAjoutCommentaireBd = await ajouterCommentaireBd(nouveauCommentaire);
 

    if(reponseAjoutCommentaireBd) {
        console.log("commentaire ID :", reponseAjoutCommentaireBd.id);
        setAuteur('');
        setContenu('');
        setCommentaires([...commentaires, reponseAjoutCommentaireBd]);
        setCommentaires("Votre commentaire a été ajouté avec succès.");
    }
    else{
        setConfirmation("Echec de l'ajout du commentaire.");
    }
}
    return (

    <div className="card mt-4 p-3">
        <h5 className="card-title">Ajouter un commentaire</h5>
            <form onSubmit={HandleSumbit}/>
                <div className="row g-2">
                    <div className="col"></div>
                        <input
                            type="text"
                            placeholder="Avis du jeu"
                            value={contenu}
                            onChange={(e) => setContenu(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Description du jeu"
                            value={description}
                            onChange={(e) => setContenu(e.target.value)}
                        />
                        <button type="submit" onClick={HandleSumbit}>Ajouter un commentaire</button>
                    </div>
                </div>

    ) 

}

// doit faire la requete qui va envouyer le commentaire dans mon API
async function ajouterCommentaireBd(nouveauCommentaire) {
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

    if (!response.ok) {
        throw new Error(`Erreur lors de l'envoi du commentaire : ${response.status}`);
    }
    const donnee = await response.json();
    console.log("Votre publication a été ajoutée avec succès :", donnee);


    return donnee;

    } catch (error) {
        console.log("Erreur ajout commentaire :", error);
        return  null;
    }
}

function btn() {
    return (
        <button className="btn btn-primary" id="envoyer">Envoyer</button>
    )
}