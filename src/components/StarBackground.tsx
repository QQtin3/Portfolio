import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

export function StarBackground() {
	const particlesInit = useCallback(async (engine: any) => {
		// Load tsparticles engine
		await loadFull(engine);
	}, []);

	return (
		<Particles
			id="starry-bg"
			init={particlesInit}
			options={{
				fullScreen: {
					enable: true,
					zIndex: -2,
				},
				particles: {
					number: {
						value: 150,
					},
					color: {
						value: "#ffffff",
					},
					shape: {
						type: "circle",
					},
					opacity: {
						value: 0.8,
					},
					size: {
						value: {min: 0.5, max: 2},
					},
					move: {
						enable: true,
						speed: 0.2,
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
