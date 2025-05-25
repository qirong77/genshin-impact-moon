import { createBackground } from "../../common/createBackground";
import { createStarRing } from "../components/star-ring";
import "../components/meteor-background";
import imagePathMainBackground from "@assets/background/bg-gradient.png";
import MOON_BG from "@assets/background/moon-bg.png";

import { scene, THREE } from "@/common/main";
import { createSceneWheelGui } from "../wheel-gui";
import gsap from "gsap";
const mainBackgroundOpacity = 0.3;
const mainBackground = createBackground(
    {
        brightness: 1.54,
        opacity: mainBackgroundOpacity,
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
const galaxyBackgroundOpacity = 0.3;
const galaxyBackground = createBackground(
    {
        brightness: 0.315,
        opacity: galaxyBackgroundOpacity,
        positionX: -4.69,
        positionY: -0.29,
        positionZ: -5,
        scale: 11.229,
        rotationX: 0.23876,
        rotationY: 0.32672,
        rotationZ: -0.5277,
        texture: MOON_BG,
    },
    createSceneWheelGui("wheel-galaxy-background")
);
const group = new THREE.Group();
group.add(mainBackground);
group.add(starRingBackground);
group.add(galaxyBackground);
export const sceneWheelBackground = {
    item: group,
    show(){
        scene.add(group);
        group.position.setY(3);
        gsap.to(group.position, {
            y: group.position.y - 3,
            duration: 3,
            ease:'sine',
        });
        [mainBackground, galaxyBackground].forEach((item) => {
            item.material.opacity = 0.;
            gsap.to(item.material, {
                opacity: 0.3,
                value: 0.3,
                duration: 3,
                ease:'sine',
            });
        });
    }
};
