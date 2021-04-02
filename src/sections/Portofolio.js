import Neutral from '../assets/img/portofolio/neutral.jpg';
import { withTranslation } from "react-i18next";

const Portofolio = ({ t }) => {
    const myProjects = t('projects.projects', {returnObjects: true});
    const Projects = myProjects.map(function(pro) {
        return (
            <div key={pro.class} className="col-md-6 p-2">
                <a href={ pro.url } title={ pro.title }>
                    <div className={`projectImg position-relative rounded shadow-sm ${ pro.class}`}>
                    
                        <img src={Neutral} className="w-100" alt={ pro.title } />
                        <div className="projectIntro position-absolute w-100 h-100 rounded d-flex justify-content-center align-items-center flex-column">
                            <p className="w-75 text-center m-0"><span className="font-weight-bold">{pro.title}</span><br/><br/>{ pro.description }</p>
                        </div>
                    </div>
                </a>
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