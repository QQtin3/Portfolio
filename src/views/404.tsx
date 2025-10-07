import {StarBackground} from "../components/StarBackground.tsx";
import '../styles/404.css'

function PageNotFound() {
	return (
		<>
			<StarBackground/>
			<div className={"centeredDiv"}>
				<h1>Erreur 404</h1>
				<h1>Oops !</h1>
				<p>La page sur laquelle vous êtes arrivé n'existe pas</p>
				<button>Retour vers le menu principal</button>
			</div>

		</>
	)
}

export default PageNotFound
