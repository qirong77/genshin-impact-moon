// import MOON_BG from '@/assets/background/moon-bg.png';
import MOON_BG from "@assets/background/moon-bg.png";

import { scene } from '@/common/main';
import { createBackground } from '@/scene/3-wheel/components/background';
const mainBackground = createBackground({
    brightness: 1.54,
    opacity: 0.32,
    positionX: 0.55,
    positionY: 2.08,
    positionZ: -10,
    scale: 20,
    rotationX: -0.45,
    rotationY: 0,
    rotationZ: 0,
    texture: MOON_BG,
});
scene.add(mainBackground);