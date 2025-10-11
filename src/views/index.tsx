import '../styles/App.css'
import {StarBackground} from "../components/StarBackground.tsx";
import {ConstellationsStars} from "../components/ConstellationsStars.tsx";
import {MissionCard} from "../components/MissionCard.tsx";
import {MissionLanguage} from '../util/MissionLanguage.ts'

function Index() {
	const missionLangues: Array<MissionLanguage> = [new MissionLanguage('java'), new MissionLanguage('javascript'), new MissionLanguage('github'), new MissionLanguage('docker')]
	return (
		<>
			<StarBackground/>
			<ConstellationsStars/>
			<MissionCard
				missionName="MISSION: Apollo 11"
				missionDescription="The first manned mission to land on the Moon."
				missionLanguages =  {missionLangues}
			/>
		</>
	)
}

export default Index
