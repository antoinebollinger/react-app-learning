import { withTranslation } from "react-i18next";

const Education = ({ t }) => {
    const myEducations =  t('education.educations',{returnObjects: true});
    return (
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">{ t('education.title') }</h2>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <div className="d-flex flex-row align-items-md-center mb-3">
                            <div className="resume-section-image mr-3 oc"></div>
                            <div className="flex-grow-1">
                                <h3 className="mb-0"><a href="https://openclassrooms.com/" title={ myEducations[0].school }>{ myEducations[0].school }</a></h3>
                                <div className="subheading">{ myEducations[0].title }</div>
                            </div>
                        </div>
                        <p className="mb-2">{ myEducations[0].description }</p>
                        <ul className="font-weight-bold">
                            <li>{ myEducations[0].list[0] }</li>
                            <li><a href="https://github.com/antoinebollinger/P2_bollinger_antoine" title="Repository Github">{ myEducations[0].list[1] }</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_3_18112020" title="Repository Github">{ myEducations[0].list[2] }</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_4_27112020" title="Repository Github">{ myEducations[0].list[3] }</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_5_15122020" title="Repository Github">{ myEducations[0].list[4] }</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_6_22012021" title="Repository Github">{ myEducations[0].list[5] }</a></li>
                            <li><a href="https://github.com/antoinebollinger/AntoineBollinger_7_03022021" title="Repository Github">{ myEducations[0].list[6] }</a></li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">{ myEducations[0].date }</span></div>
                </div>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <div className="d-flex flex-row align-items-md-center mb-3">
                            <div className="resume-section-image mr-3 sorbonne"></div>
                            <div className="flex-grow-1">
                                <h3 className="mb-0"><a href="http://www.univ-paris3.fr/" title={ myEducations[1].school }>{ myEducations[1].school }</a></h3>
                                <div className="subheading">{ myEducations[1].title }</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">{ myEducations[1].date }</span></div>
                </div>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <div className="d-flex flex-row align-items-md-center mb-3">
                            <div className="resume-section-image mr-3 lycee"></div>
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{ myEducations[2].school }</h3>
                                <div className="subheading">{ myEducations[2].title }</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">{ myEducations[2].date }</span></div>
                </div>
            </div>
        </section>
    );
}

export default withTranslation() (Education);