import {StarBackground} from "./StarBackground.tsx";
import "../styles/projectPageComponent.css";
import type {ReactNode} from "react";
import {MissionLanguage} from "../utils/MissionLanguage.ts";

interface ProjectPageProps {
	title: string;
	languagesTools?: string[];  // Languages / Tools names (looking into assets/img/languages-logo/*.png)
	bannerSrc?: string;
	children?: ReactNode; // JSX/HTML content of the project page
}

export function ProjectPageComponent({
	                                     title,
	                                     languagesTools = [],
	                                     bannerSrc = "../assets/img/banners/default.png",
	                                     children
                                     }: ProjectPageProps) {
	return (
		<div className="project-global-div">
			<StarBackground/>
			<div className="project-div">
				<div className="header-img">
					<img src={bannerSrc} alt={`Bannière du projet ${title}`}/>
				</div>
				<div className="global-content">
					<div className="header">
						<div className="title">{title}</div>
						<div className="languages-tools">
							{ /* For each lang/tool we'll look if an icon is available to display */ }
							{languagesTools.map((tool) => {
								const lang = new MissionLanguage(tool.toLowerCase());
								// If the lang/tool icon is available, shows it, otherwise just display its name
								return lang.imageObject ?
									<img key={tool} src={lang.imageObject} alt={lang.name} className="languages-tools-icon"/>
									:
									<div key={tool}>{lang.name}</div>;
							})}
						</div>
					</div>
					<div className="content">
						{children} {/* Can be HTML / JSX, main content of the project page */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectPageComponent;
