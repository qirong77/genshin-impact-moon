
import { createBackground } from "../components/background";
import { createStarRing } from "../components/star-ring";
import { createMeteorBackground } from "../components/meteor-background";
import imagePathMainBackground from '@assets/background/bg2.png'
import imagePathPurpleDream from '@assets/background/1x1_广袤的深空背景_中间是较大区域的暗色无法窥视_四周渐现淡紫色梦幻.png'
import { scene, THREE } from "@/common/main";

createMeteorBackground();

const mainBackground = createBackground({
    brightness: 1.54,
    opacity: .32,
    positionX: 0.55,
    positionY: 2.08,
    positionZ: -10,
    scale: 20,
    rotationX: -0.45,
    rotationY: 0,
    rotationZ: 0,
    texture: imagePathMainBackground
})

const purpleDreamBackground = createBackground({
    brightness: 2.,
    opacity: 1.,
    positionX: -0.22,
    positionY: 0.55,
    positionZ: -6.04,
    scale: 9.3,
    rotationX: -0.61,
    rotationY: -0.21,
    rotationZ: 0,
    texture: imagePathPurpleDream
});

const purpleDreamOverlay = createBackground({
    brightness: 1.8,
    opacity: 0.6,
    positionX: -0.22,
    positionY: 0.55,
    positionZ: -6.04,
    scale: 5.5,
    rotationX: -0.61,
    rotationY: -0.21,
    rotationZ: 0,
    texture: imagePathPurpleDream
});

const starRingBackground = createStarRing({
    starCounts: 360,
    innerRadius:0.9,
    outerRadius:3.0,
    color: new THREE.Color(0xffffff),
});

scene.add(starRingBackground)
scene.add(mainBackground)
scene.add(purpleDreamBackground)
scene.add(purpleDreamOverlay)
