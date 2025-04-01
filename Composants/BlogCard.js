//Afficher mes publications dans une card et je lui passe des props
function BlogCard({blog, blogImage }) {



return (
    <div className="col">
      <div className="card">
            <div className="card">
                <img src={blogImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 > {blog.titre}</h5>
                        <p> {blog.contenu}</p>
                        <a href={`/PageBlog.html?id=${blog.id}`} className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    </div>


);
}
