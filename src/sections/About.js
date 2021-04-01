import CV_EN from '../assets/pdf/CV_EN.pdf';
import CV_FR from '../assets/pdf/CV_FR.pdf';
import { withTranslation } from "react-i18next";

const About = ({ t }) => {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">Antoine <span className="text-primary">Bollinger</span></h1>
                <h2 className="mb-5"><span className="text-primary">{ t('about.title') }</span> Junior</h2>
                <div className="subheading mb-5">
                    <i className="fas fa-phone-alt mr-3"></i><a href="tel:+33611806396">+33 (0) 6 11 80 63 96</a><br />
                    <i className="fab fa-telegram mr-3"></i><a href="mailto:antoine.bollinger@gmail.com">antoine.bollinger@gmail.com</a>
                </div>
                <p className="lead mb-5">{ t('about.intro') }</p>
                <div className="social-icons">
                    <a className="social-icon" href={ (t('about.pdflink') === 'CV_FR') ? CV_FR : CV_EN } title={ t('about.pdf') } target="_blank" rel="noreferrer"><i className="fas fa-file-download"></i></a> 
                    <a className="social-icon" href="https://www.linkedin.com/in/antoinebollinger/" title={ t('about.linkedin') }><i className="fab fa-linkedin-in"></i></a> 
                    <a className="social-icon" href="https://github.com/antoinebollinger" title={ t('about.github') }><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    );
}

export default withTranslation() (About);