import { createBackground } from "../../common/createBackground";
import { createStarRing } from "../components/star-ring";
import "../components/meteor-background";
import imagePathMainBackground from "@assets/background/bg2.png";
import MOON_BG from "@assets/background/moon-bg.png";

import { scene, THREE } from "@/common/main";
import { createSceneWheelGui } from "../wheel-gui";

const mainBackground = createBackground(
    {
        brightness: 1.54,
        opacity: 0.32,
        positionX: 0.55,
        positionY: 2.08,
        positionZ: -10,
        scale: 20,
        rotationX: -0.45,
        rotationY: 0,
        rotationZ: 0,
        texture: imagePathMainBackground,
    },
    createSceneWheelGui("wheel-main-background")
);

const starRingBackground = createStarRing({
    starCounts: 360,
    innerRadius: 0.9,
    outerRadius: 3.0,
    color: new THREE.Color(0xffffff),
});

const galaxyBackground = createBackground(
    {
        brightness: 0.315,
        opacity: 0.2,
        positionX: -4.69,
        positionY: -0.29,
        positionZ: -10,
        scale: 11.229,
        rotationX: 0.23876,
        rotationY: 0.32672,
        rotationZ: -0.5277,
        texture: MOON_BG,
    },
    createSceneWheelGui("wheel-galaxy-background")
);
scene.add(starRingBackground);
scene.add(mainBackground);
scene.add(galaxyBackground);
