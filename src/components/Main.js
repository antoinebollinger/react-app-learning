import About from '../sections/About';
import Skills from '../sections/Skills';
import Portofolio from '../sections/Portofolio';
import Experience from '../sections/Experience';
import Education from '../sections/Education';

function Main() {
    return (
        <div className="container-fluid p-0">
            <About />
            <hr className="m-0" />
            <Skills />
            <hr className="m-0" />
            <Portofolio />
            <hr className="m-0" />
            <Experience />
            <hr className="m-0" />
            <Education />
        </div>
    );
}

export default Main;