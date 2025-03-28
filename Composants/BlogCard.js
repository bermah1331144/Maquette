//Afficher mes publications dans une card et je lui passe des props
function BlogCard(props) {
    
return (<div class="container-card-container">
            <div class="row justify-content-center">
                <div id="dynamicCardsContainer" className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-sm-12 col-lg-4">
                        <div class="card">
                            <img src={props.img} className="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5> {props.titre}</h5>
                                    <p> {props.contenu}</p>
                                    <a href={`/PageBlog.html?id=${props.id}`} className="btn btn-primary">Go somewhere</a>
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