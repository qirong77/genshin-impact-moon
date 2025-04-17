import MOON_BG from "@assets/item/light.png";
import { createBackground } from "@/scene/common/createBackground";
import { createSceneMoonGui } from "../../moon-gui";
import { THREE } from "@/common/main";
const mainBackground = createBackground(
    {
        brightness: 0.55,
        opacity: 0.28,
        positionX: 0,
        positionY: 0,
        positionZ: -0.03,
        scale: 0.6,
        rotationX: -0.3958,
        rotationY: 0.01884,
        rotationZ: -1.954,
        texture: MOON_BG,
    },
    createSceneMoonGui("moon-light")
);
const secondBackground = createBackground(
    {
        brightness: 0.55,
        opacity: 0.2,
        positionX: 0,
        positionY: 0,
        positionZ: -0.031,
        scale: 0.8,
        rotationX: -0.3958,
        rotationY: 0.01884,
        rotationZ: -1.954,
        texture: MOON_BG,
    },
    createSceneMoonGui("moon-light")
);
const group = new THREE.Group();
group.add(mainBackground);
group.add(secondBackground);
export default group;