import {StarBackground} from "../components/StarBackground.tsx";
import '../styles/projectPage.css';

function ProjectPage() {
    return (
        <div className="project-global-div">
            <StarBackground/>
            <div className="project-div">
                <div className="header-img">
                    <img src="../assets/img/planet-logo.jpg" alt="Bannière du projet"/>
                </div>
                <div className="global-content">
                    <div className="header">

                    </div>
                    <div className="content">
                        ABCDEF ABCDEF ABCDEF ABCDEFABCDEFABCDEFABCDEFABCDEF ABCDEF ABCDEF ABCDEF ABCDEF ABCDEF ABCDEF ABCDEFABCDEF ABCDEF
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectPage
