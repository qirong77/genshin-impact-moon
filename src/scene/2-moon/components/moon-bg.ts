import MOON_BG from "@assets/background/moon-bg.png";
import { createBackground } from '@/scene/common/createBackground';
import { createSceneMoonGui } from "../moon-gui";
import gsap from 'gsap';
const mainBackgroundOpacity = 0.32;
const mainBackground = createBackground({
    brightness: 0.81,
    opacity: mainBackgroundOpacity,
    positionX: -1.67,
    positionY: -0.1,
    positionZ: -10,
    scale: 14.535,
    rotationX: 0.01884,
    rotationY: 0,
    rotationZ: 0,
    texture: MOON_BG,
},createSceneMoonGui('moon-main-bg'));
import IMAGE_PATH from "@assets/item/meteor.png";
import { THREE } from "@/common/main";
import { GIMSceneItem } from "@/type";
const meteorBGOpacity = 0.15;
const meteorBG = createBackground({
    brightness: 1.,
    opacity: meteorBGOpacity,
    positionX: -0.,
    positionY: 15.,
    positionZ: -15,
    scale: 15,
    rotationX: 0.,
    rotationY: 0.,
    rotationZ: 0,
    texture: IMAGE_PATH,
},createSceneMoonGui('moon-meteor-bg'));
function animate() {
    requestAnimationFrame(animate);
    meteorBG.rotation.x = 0;
    meteorBG.rotation.z += 0.0001;
}
animate();
const group = new THREE.Group();
group.add(mainBackground);
group.add(meteorBG);
export const GIMSceneItemMoonBg: GIMSceneItem = {
    name: 'GIMSceneItemMoonBg',
    item: group,
    opacityShow: (ease: string, duration: number) => {
        meteorBG.material.opacity = 0;
        mainBackground.material.opacity = 0;
        gsap.to(meteorBG.material, {
            opacity: meteorBGOpacity,
            duration,
            ease,
        });
        gsap.to(mainBackground.material, {
            opacity: mainBackgroundOpacity,
            duration,
            ease,
        })
    },
    opacityHide: (ease: string, duration: number, opacity: number) => {
        gsap.to(meteorBG.material, {
            opacity,
            duration,
            ease,
        });
        gsap.to(mainBackground.material, {
            opacity,
            duration,
            ease,
        })
    },
}
