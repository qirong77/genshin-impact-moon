import { createBackground } from "../components/background";
import { createStarRing } from "../components/star-ring";
import "../components/meteor-background";
import imagePathMainBackground from "@assets/background/bg2.png";

import { scene, THREE } from "@/common/main";

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
    texture: imagePathMainBackground,
});


const starRingBackground = createStarRing({
    starCounts: 360,
    innerRadius: 0.9,
    outerRadius: 3.0,
    color: new THREE.Color(0xffffff),
});

scene.add(starRingBackground);
scene.add(mainBackground);
