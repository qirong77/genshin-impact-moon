import MOON_BG from "@assets/item/light.png";
import { createBackground } from "@/scene/common/createBackground";
import { createSceneMoonGui } from "../../moon-gui";
import { THREE } from "@/common/main";
import { GIMSceneItem } from "@/type";
import gsap from 'gsap';
const mainBackgroundOpacity = 0.28;
const mainBackground = createBackground(
    {
        brightness: 0.55,
        opacity: mainBackgroundOpacity,
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
const secondBackgroundOpacity = 0.2;
const secondBackground = createBackground(
    {
        brightness: 0.55,
        opacity: secondBackgroundOpacity,
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
export const GIMSceneItemMoonLight: GIMSceneItem = {
    name: "moon-light",
    item: group,
    opacityShow: (ease: string, duration: number) => {
        mainBackground.material.opacity = 0;
        secondBackground.material.opacity = 0;
        gsap.to(mainBackground.material, {
            opacity: mainBackgroundOpacity,
            duration,
            ease,
        });
        gsap.to(secondBackground.material, {
            opacity: secondBackgroundOpacity,
            duration,
            ease,
        });
    },
    opacityHide: (ease: string, duration: number) => {
        gsap.to(mainBackground.material, {
            opacity: 0,
            duration,
            ease,
        });
        gsap.to(secondBackground.material, {
            opacity: 0,
            duration,
            ease,
        });
    },
};
