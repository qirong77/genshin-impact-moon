import MOON_BG from "@assets/background/moon-bg.png";


import { scene } from '@/common/main';
import { createBackground } from '@/scene/common/createBackground';
import { createSceneMoonGui } from "../moon-gui";
const mainBackground = createBackground({
    brightness: 0.81,
    opacity: 0.346,
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
const meteorBG = createBackground({
    brightness: 1.,
    opacity: 0.15,
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
scene.add(mainBackground);
scene.add(meteorBG);