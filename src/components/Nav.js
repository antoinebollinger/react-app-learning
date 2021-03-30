import profile from '../assets/img/profile.jpg';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none subheading">Antoine Bollinger</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="Accueil" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portofolio">Projects</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item d-flex align-items-center justify-content-md-center">
                        <p className="nav-link nav-active m-0">En</p>
                        <p className="m-0 px-2 nav-space"> | </p>
                        <a className="nav-link" href="../pt/" title="Ver a versão em português">Pt</a>
                        <p className="m-0 px-2 nav-space"> | </p>
                        <a className="nav-link" href="../fr/" title="Voir la version en français">Fr</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;