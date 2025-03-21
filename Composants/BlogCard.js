//Afficher mes publications dans une card et je lui passe des props
function BlogCard(BlogList) {
    
return (<div class="container-card-container">
            <div class="row justify-content-center">
                <div id="dynamicCardsContainer" className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-sm-12 col-lg-4">
                        <div class="card">
                            <img src={BlogList.img} className="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5> {BlogList.titre}</h5>
                                    <p> {BlogList.contenu}</p>
                                    {/* <a href= className="btn btn-primary">Go somewhere</a> */}
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