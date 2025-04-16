import MOON_BG from "@assets/item/light.png";
import { createBackground } from "@/scene/common/createBackground";
import { createSceneMoonGui } from "../moon-gui";
import { moonGroup } from "../moon-group";
const mainBackground = createBackground(
    {
        brightness: 0.55,
        opacity: 0.31,
        positionX: 0,
        positionY: 0,
        positionZ: -5.96,
        scale: 1.35,
        rotationX: -0.3958,
        rotationY: 0.01884,
        rotationZ: -1.954,
        texture: MOON_BG,
    },
    createSceneMoonGui("moon-light")
);
const secondBackground  = createBackground(
    {
        brightness: 0.55,
        opacity: 0.2,
        positionX: 0,
        positionY: 0,
        positionZ: -5.96,
        scale: 1.5,
        rotationX: -0.3958,
        rotationY: 0.01884,
        rotationZ: -1.954,
        texture: MOON_BG,
    },
    createSceneMoonGui("moon-light")
);

moonGroup.add(secondBackground)
moonGroup.add(mainBackground)