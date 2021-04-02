import Php from '../assets/img/php.jpg';
import Js from '../assets/img/js.png';
import Mysql from '../assets/img/mysql.png';
import MongoDB from '../assets/img/mongoDB.png';
import NodeJS from '../assets/img/node_express.png';
import VueJS from '../assets/img/vuejs.png';
import React from '../assets/img/react_complete.png';
import Windows from '../assets/img/windows.png';
import VCS from '../assets/img/vcs.png';
import Postman from '../assets/img/postman.png';
import Wamp from '../assets/img/wamp.png';
import Gitbash from '../assets/img/gitbash.png';

import { withTranslation } from "react-i18next";

const Skills = ({ t }) => {
    const mySkills = t('skills.skills', {returnObjects: true});
    const Skills = mySkills.map(function(skill, index) {
        return (
            <li key={index}>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <span dangerouslySetInnerHTML={{__html: skill }}/>
            </li>
        );
    });
    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">{ t('skills.title') }</h2>
                <ul className="fa-ul mb-5">
                    {Skills}
                </ul>    
                <div className="d-flex flex-row align-items-center mb-5">
                    <div className="subheading mr-3">{ t('skills.languages') } : </div>
                    <div className="dev-icons mr-3"><img src={Php} className="rounded" alt="PHP" /></div>
                    <div className="dev-icons mr-3"><img src={Js} className="rounded" alt="JS" /></div>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch justify-content-around skills mb-5">
                    <div className="col-md-2 mb-md-0 mb-3 d-flex flex-column align-items-center justify-content-center">
                        <p className="subheading">{ t('skills.databases') }</p>
                        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-around">
                            <img src={Mysql} className="w-75" alt="MySQL" />
                            <img src={MongoDB} className="w-75" alt="MongoDB" />
                        </div>
                    </div>
                    <div className="col-md-5 mx-1 mb-md-0 mb-3 d-flex flex-column align-items-center justify-content-center">
                        <p className="subheading">Back-end</p>
                        <img src={NodeJS} className="w-75" alt="Node.js Express" />
                    </div>
                    <div className="col-md-5 mb-md-0 mb-3 d-flex flex-column align-items-center justify-content-center">
                        <p className="subheading">Front-end</p>
                        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-around">
                            <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch">
                                <div className="w-50 pr-2">
                                    <img src={VueJS} className="w-100" alt="Vue.js" />
                                </div>
                                <div className="w-50">
                                    <img src={React} className="w-100" alt="React" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <ul className="list-inline dev-icons">
                                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                                    <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                                    <li className="list-inline-item"><i className="fab fa-bootstrap"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row flex-wrap align-items-md-center">
                    <div className="subheading mr-3">{ t('skills.environment') } : </div>
                    <div className="dev-icons mr-3"><p className="font-weight-bold mb-md-0"><img src={Windows} className="mr-2" alt="Windows" />Windows</p></div>
                    <div className="dev-icons mr-3"><p className="font-weight-bold mb-md-0"><img src={VCS} className="rounded mr-2" alt="Visual Code Studio" />Visual Code Studio</p></div>
                    <div className="dev-icons mr-3"><p className="font-weight-bold mb-md-0"><img src={Postman} className="rounded mr-2" alt="Postman" />Postman</p></div>
                    <div className="dev-icons mr-3"><p className="font-weight-bold mb-md-0"><img src={Wamp} className="mr-2" alt="WampServer" />WampServer</p></div>
                    <div className="dev-icons mr-3"><p className="font-weight-bold mb-md-0"><img src={Gitbash} className="rounded mr-2" alt="Git Bash" />Git Bash</p></div>
                </div>
            </div>
        </section>
    );
}

export default withTranslation() (Skills);