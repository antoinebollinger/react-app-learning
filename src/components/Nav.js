import profile from '../assets/img/profile.jpg';
import ScrollspyNav from "react-scrollspy-nav";
import { useTranslation } from "react-i18next";
import LanguageSelector from '../services/languageSelector';

const Nav = () => {
    const { t } = useTranslation(['nav']);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none subheading">Antoine Bollinger</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="Accueil" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ScrollspyNav scrollTargetIds={['about', 'skills', 'portofolio', 'experience', 'education']} activeNavClass="active" scrollDuration="400">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">{ t('about') }</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">{ t('skills') }</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portofolio">{ t('projects') }</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">{ t('experience') }</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">{ t('education') }</a></li>
                        <LanguageSelector />
                    </ul>
                </ScrollspyNav>
            </div>
        </nav>
    );
}

export default Nav;