function About() {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">Antoine <span className="text-primary">Bollinger</span></h1>
                <h2 className="mb-5"><span className="text-primary">Web Developer</span> Junior</h2>
                <div className="subheading mb-5">
                    <i className="fas fa-phone-alt mr-3"></i><a href="tel:+33611806396">+33 (0) 6 11 80 63 96</a><br />
                    <i className="fab fa-telegram mr-3"></i><a href="mailto:antoine.bollinger@gmail.com">antoine.bollinger@gmail.com</a>
                </div>
                <p className="lead mb-5">Translation. Creation. Communication. These are the words that I think best define my work. Translating texts, elaborating catalogs, writing codes for website, all this implies translation – of a need, a request or even a desire – and the creation of a result, whatever the format. And all this contributes to communication between people. That is where I am.</p>
                <div className="social-icons">
                    <a className="social-icon" href="../assets/pdf/CV_EN.pdf" title="Télécharger mon CV en PDF" target="_blank"><i className="fas fa-file-download"></i></a>
                    <a className="social-icon" href="https://www.linkedin.com/in/antoinebollinger/" title="Mon profil sur LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/antoinebollinger" title="Mon Github"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    );
}

export default About;