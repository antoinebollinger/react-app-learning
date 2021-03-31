import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {

  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <li className="nav-item d-flex align-items-center justify-content-md-center languageSelector">
        <p onClick={() => changeLanguage('en')} className={`nav-link m-0 ${(i18n.language === 'en') ? 'nav-active' : ''}`}>En</p>
        <p className="m-0 px-2 nav-space"> | </p>
        <p onClick={() => changeLanguage('pt')} className={`nav-link m-0 ${(i18n.language === 'pt') ? 'nav-active' : ''}`}>Pt</p>
        <p className="m-0 px-2 nav-space"> | </p>
        <p onClick={() => changeLanguage('fr')} className={`nav-link m-0 ${(i18n.language === 'fr') ? 'nav-active' : ''}`}>Fr</p>
    </li>
  );
}

