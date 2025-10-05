import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

export function ConstellationsStars() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="constellations"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                particles: {
                    number: {
                        value: 10
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 1
                    },
                    size: {
                        value: 4
                    },
                    move: {
                        enable: false
                    },
                    links: {
                        enable: true,
                        distance: 400,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
