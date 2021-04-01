import Neutral from '../assets/img/portofolio/neutral.jpg';
import { withTranslation } from "react-i18next";

const Portofolio = ({ t }) => {
    return (
        <section className="resume-section" id="portofolio">
            <div className="resume-section-content">
                <h2 className="mb-5">{ t('projects.title') }</h2>
                <div className="d-flex flex-md-row flex-column">
                    <a href="https://www.antoine-traductions.com/" className="traductions m-2 rounded shadow-sm" title={ t('projects.project1') }>
                        <img src={Neutral} className="w-100 rounded" alt="Antoine-traductions" />
                    </a>
                    <a href="https://github.com/antoinebollinger/AntoineBollinger_7_03022021" className="groupomania m-2 rounded shadow-sm" title={ t('projects.project2') }>
                        <img src={Neutral} className="w-100 rounded" alt="Groupomania" />
                    </a>
                </div>
                <div className="d-flex flex-md-row flex-column">
                    <a href="https://ab-orinoco.netlify.app/index.html" className="orinoco m-2 rounded shadow-sm" title={ t('projects.project3') }>
                        <img src={Neutral} className="w-100 rounded" alt="Orinoco" />
                    </a>
                    <a href="https://ab-reservia.netlify.app/" className="reservia m-2 rounded shadow-sm" title={ t('projects.project4') }>
                        <img src={Neutral} className="w-100 rounded" alt="Reservia" />
                    </a>
                </div>
            </div>
        </section>         
    );
}

export default withTranslation() (Portofolio);