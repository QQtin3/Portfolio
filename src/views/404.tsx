import {StarBackground} from "../components/StarBackground.tsx";
import '../styles/404.css'
import {Link} from "react-router-dom";

function PageNotFound() {
	return (
		<>
			<StarBackground/>
			<div className={"centeredDiv"}>
				<h1>Oops !</h1>
				<p>La page que vous cherchez n'existe pas</p>
				<Link to="/">
					<button>Retour au menu principal</button>
				</Link>
			</div>
		</>
	)
}

export default PageNotFound
