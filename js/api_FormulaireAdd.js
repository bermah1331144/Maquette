function generateId() {
    let lastId = localStorage.getItem("lastPublicationId");
    let newId = lastId ? parseInt(lastId) + 1 : 1;
    localStorage.setItem("lastPublicationId", newId);
    return newId;
}


//fonctiyon pour optenir la date actuelle
function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;   
}


//fonction pour ajouter les information
// ATTENTION !! ERREUR au niveau de la promesse !!!!!!!
async function addInfomation(){
    const publicationId = generateId();
    const date = getCurrentDate();
    const content = document.getElementById("content").value;
    const dataPublications = { publicationId, date, content };
    const response = await fetch("http://localhost:3000/publications", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataPublications)
    });

    if (response.ok) {
            const data = await response.json();
            createDataPublications(data);
        }
}