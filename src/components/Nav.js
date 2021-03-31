import profile from '../assets/img/profile.jpg';
import ReactLogo from '../assets/img/react.png';
import ScrollspyNav from "react-scrollspy-nav";
import LanguageSelector from '../services/languageSelector';

import { useTranslation } from "react-i18next";
import { useState } from "react";

const Nav = () => {
    const { t } = useTranslation();
    const refreshPage = () => {
        window.location.reload();
    }
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };

   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <p className="navbar-brand mb-0" onClick={() => refreshPage()}>
                <span className="d-block d-lg-none subheading">Antoine Bollinger</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="Accueil" /></span>
            </p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => toggleClass()}><span className="navbar-toggler-icon"></span></button>
            <div className={`collapse navbar-collapse ${(isActive) ? 'show' : ''}`} id="navbarSupportedContent">
                <ScrollspyNav scrollTargetIds={['about', 'skills', 'portofolio', 'experience', 'education']} activeNavClass="active" scrollDuration="400">
                    <ul className="navbar-nav" onClick={() => toggleClass()}>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">{ t('nav.about') }</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">{ t('nav.skills') }</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portofolio">{ t('nav.projects') }</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">{ t('nav.experience') }</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">{ t('nav.education') }</a></li>
                        <LanguageSelector />
                    </ul>
                </ScrollspyNav>
            </div>
            <div className="poweredBy d-flex"><p className="text-light">Proudly powered by React <img src={ReactLogo} className="App-logo" alt="logo" /></p></div>
        </nav>
    );
}

export default Nav;