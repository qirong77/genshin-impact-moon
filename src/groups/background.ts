import { scene, THREE } from "../common/main";
import { createBackground } from "../components/background";
import { createStarRing } from "../components/star-ring";


const bgMain = createBackground({
    brightness: 1.0,
    opacity: 1.0,
    positionX: 0.55,
    positionY: 2.08,
    positionZ: -5,
    scale: 20,
    rotationX: -0.45,
    rotationY: 0,
    rotationZ: 0,
    texture:'../../public/background/bg2.png'
})
const bg2 = createBackground({
    brightness: 0.27,
    opacity: 0.3,
    positionX: 0.55,
    positionY: 2.08,
    positionZ: -5,
    scale: 6.6,
    rotationX: -0.45,
    rotationY: 0,
    rotationZ: 0,
    texture: '../../public/background/1x1_广袤的深空背景_中间是较大区域的暗色无法窥视_四周渐现淡紫色梦幻.png'
});
const starBackground = createStarRing({
    starCounts: 80,
    innerRadius:0.9,
    outerRadius:3.0,
    color: new THREE.Color(0xffffff),
});
scene.add(starBackground)
scene.add(bgMain)
scene.add(bg2)