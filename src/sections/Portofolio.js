import Neutral from '../assets/img/portofolio/neutral.jpg';
import { withTranslation } from "react-i18next";

const Portofolio = ({ t }) => {
    const myProjects = t('projects.projects', {returnObjects: true});
    const Projects = myProjects.map(function(pro) {
        return (
            <div className="col-md-6 p-2 position-relative">
                <a href={ pro.url } className={`rounded shadow-sm d-block ${ pro.class}`} title={ pro.title }>
                    <img src={Neutral} className="w-100 rounded" alt={ pro.title } />
                </a>
                <div className="position-absolute projectIntro"></div>
            </div>
        );
    });
    return (
        <section className="resume-section" id="portofolio">
            <div className="resume-section-content">
                <h2 className="mb-5">{ t('projects.title') }</h2>
                <div className="d-flex flex-md-row flex-column flex-wrap">
                    {Projects}
                </div>
            </div>
        </section>         
    );
}

export default withTranslation() (Portofolio);