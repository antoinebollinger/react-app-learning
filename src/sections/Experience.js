import { withTranslation  } from "react-i18next";

const Experience = ({ t }) => {
    const myExperiences = t('experience.experiences', {returnObjects: true});
    const Experiences = myExperiences.map(function(exp) {
        return (
            <div key={exp.class} className="d-flex flex-column-reverse flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <div className="d-flex flex-row align-items-md-center mb-3">
                        <div className={`resume-section-image mr-3 flex-shrink-0 ${ exp.class}`}></div>
                        <div className="flex-grow-1">
                            <h3 className="mb-0">{ exp.title }</h3>
                            <div className="subheading">{ exp.company }</div>
                        </div>
                    </div>
                    <p>{ exp.description }<br /><span className="font-weight-bold">{ exp.learned }</span></p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{ exp.date }</span></div>
            </div>
        );
    });
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">{ t('experience.title') }</h2>
                {Experiences}
            </div>
        </section>
    );
}

export default withTranslation() (Experience);