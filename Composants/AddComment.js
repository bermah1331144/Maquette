function AddComment(props) {
    return (
    <form onSumbmit = {HandleSumbit} >
        <div class="form-group">
            <label for="commentaire" class="form-label">Commentaire</label>
            <textarea class="form-control" id="commentaire" rows="3"></textarea>
        </div>
    </form>
    ) 

}

// doit faire la requete qui va envouyer le commentaire dans mon API


function HandleSumbit(event) {
    event.preventDefault();
    console.log("envoyer");
}

function btn() {
    return (
        <button class="btn btn-primary" id="envoyer">Envoyer</button>
    )
}