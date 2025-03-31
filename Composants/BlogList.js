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
    
    const blogCards = blogList.map(blog => <BlogCard key={blog.id} blog={blog} />)
    
    return blogCards
}
