// import MOON_BG from '@/assets/background/moon-bg.png';
import MOON_BG from "@assets/background/moon-bg.png";

import { scene } from '@/common/main';
import { createBackground } from '@/scene/common/background';
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
scene.add(mainBackground);