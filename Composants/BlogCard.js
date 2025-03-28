//Afficher mes publications dans une card et je lui passe des props
function BlogCard({blog}) {

console.log(blog.id);
return (<div className="container-card-container">
            <div className="row justify-content-center">
                <div id="dynamicCardsContainer" className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-sm-12 col-lg-4">
                        <div className="card">
                            <img src={blog.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5> {blog.titre}</h5>
                                    <p> {blog.contenu}</p>
                                    <a href={`/PageBlog.html?id=${blog.id}`} className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>  
            </div>         
        </div>
);
}

function Button(props){

}