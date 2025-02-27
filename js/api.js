/*
Index : 
http://localhost:3000/

EndPoints :
http://localhost:3000/publications
http://localhost:3000/commentaires
*/




//permet de charger le DOM pour les publications
document.addEventListener("DOMContentLoaded", function() {
    console.log("Le DOM est chargé !");
    getPublicationsAsyc();
});

//permet de charger le DOm pour les commentaires
document.addEventListener("DOMContentLoaded", function() {
    console.log("Le DOM est chargé !");
    getCommentairesAsyc();
}); 


