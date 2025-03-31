function NavBar() {
    return (
    <div className="container-fluid-card">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                <form className="container-fluid">
                    <div className="input-group">
                        <span className="input-group-image d-inline-block align-text-top" id="basic-addon1"><img src="/images/loupe.png" alt="Logo" width="40" height="40" /></span>
                        <input type="text" className="form-control" placeholder="Rechercher" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </form>
            </div>
            <div className="col-6 col-md-2">
                <p>Trier par : </p>
            </div>
            <div className="col-6 col-md-1">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    </div>
);
}