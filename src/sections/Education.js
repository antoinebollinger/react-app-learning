function Education() {
    return (
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <div className="d-flex flex-row align-items-md-center mb-3">
                            <div className="resume-section-image mr-3 oc"></div>
                            <div className="flex-grow-1">
                                <h3 className="mb-0"><a href="https://openclassrooms.com/" title="Site officiel d'Openclassrooms">Openclassrooms</a></h3>
                                <div className="subheading">Full-stack Web Developer</div>
                            </div>
                        </div>
                        <p className="mb-2">7 Projects training program under the supervision of a professional mentor:</p>
                        <ul className="font-weight-bold">
                            <li>Take Ownership of the Web Developer Path</li>
                            <li><a href="https://github.com/antoinebollinger/P2_bollinger_antoine" title="Repo Github du projet">Turn Mock-ups Into a Web Page (Html & CSS)</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_3_18112020" title="Repo Github du projet">Integrate a mobile website with animations in CSS</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_4_27112020" title="Repo Github du projet">Optimize an Existing Website (SEO)</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_5_15122020" title="Repo Github du projet">Build an eCommerce Website (Javascript)</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_6_22012021" title="Repo Github du projet">Build a Secure API for a Review App (Node.js, Express, MongoDB)</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_7_03022021" title="Repo Github du projet">Build a Full-Stack Solution (Vue.js, MySQL)</a></li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">November 2020 - April 2021</span></div>
                </div>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <div className="d-flex flex-row align-items-md-center mb-3">
                            <div className="resume-section-image mr-3 sorbonne"></div>
                            <div className="flex-grow-1">
                                <h3 className="mb-0"><a href="http://www.univ-paris3.fr/" title="Site officiel de l'Université Paris III Sorbonne Nouvelle">Université Paris III Sorbonne Nouvelle</a></h3>
                                <div className="subheading"><em>Licence Langues, Littératures et Civilisations Étrangères (LLCE)</em> Portuguese (2 years of studies)</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2007 - 2009</span></div>
                </div>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <div className="d-flex flex-row align-items-md-center mb-3">
                            <div className="resume-section-image mr-3 lycee"></div>
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Lycée Blaise Pascal in Colmar (68)</h3>
                                <div className="subheading"><em>Baccalauréat Sciences et Technologies de l’Industrie (STI) Génie Mécanique, Option Productique, Mention Bien</em></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2002</span></div>
                </div>
            </div>
        </section>
    );
}

export default Education;