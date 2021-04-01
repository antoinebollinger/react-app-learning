const Experience = (props) => {
    return (
        <div className="d-flex flex-column-reverse flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <div className="d-flex flex-row align-items-md-center mb-3">
                    <div className={`resume-section-image mr-3 ${ props.experience.class}`}></div>
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{ props.experience.title }</h3>
                        <div className="subheading">{ props.experience.company }</div>
                    </div>
                </div>
                <p>{ props.experience.description }<br /><span className="font-weight-bold">{ props.experience.learned }</span></p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">{ props.experience.date }</span></div>
        </div>
    );
}

export default Experience