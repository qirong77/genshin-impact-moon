import { gui } from "../common/gui";
import { scene, THREE } from "../common/main";
import { createAxisStars } from "../components/axis-stars";
import { createCircle } from "../components/circle/createCircle";
import { createStarRing } from "../components/star-ring";

const axisStar = createAxisStars()
const startRing1 = createStarRing({
    innerRadius: 0.57,
    outerRadius: 0.9,
});
const startRing2 = createStarRing({
    innerRadius: 1.12,
    outerRadius: 1.35,
});
const startRing3 = createStarRing({
    innerRadius: 2,
    outerRadius: 2.3,
});
const startRing4 = createStarRing({
    innerRadius: 2.6,
    outerRadius: 3.0,
});
const circle1 = createCircle("../public/circle/circle-A.png", "circle1", {
    minOpacity: 0.75,
    maxOpacity: 0.8,
    circleSize: 2.4,
    rotationSpeed: -0.06,
});
const circle2 = createCircle("../public/circle/circle-C.png", "circle2", {
    minOpacity: 0.75,
    maxOpacity: 0.8,

    circleSize: 3.9,
    rotationSpeed: 0.10,
});
const circle3 = createCircle("../public/circle/circle-B.png", "circle3", {
    minOpacity: 0.75,
    maxOpacity: 0.8,

    circleSize: 4.4,
    rotationSpeed: -0.08,
});
const circle4 = createCircle("../public/circle/circle-D.png", "circle4", {
    minOpacity: 0.75,
    maxOpacity: 0.8,

    circleSize: 5.1,
    rotationSpeed: 0.12,
});
const galaxyGroup = new THREE.Group()
galaxyGroup.add(startRing1)
galaxyGroup.add(startRing2)
galaxyGroup.add(startRing3)
galaxyGroup.add(startRing4)
galaxyGroup.add(circle1)
galaxyGroup.add(circle2)
galaxyGroup.add(circle3)
galaxyGroup.add(circle4)
galaxyGroup.add(axisStar)
// 添加到场景
scene.add(galaxyGroup)

// 创建 GUI 控制
const galaxyFolder = gui.addFolder('星系旋转控制')
galaxyGroup.rotation.x = -1
galaxyGroup.rotation.y = -0.2
galaxyGroup.rotation.z = -0.2

galaxyFolder.add(galaxyGroup.rotation, 'x', -Math.PI, Math.PI).name('X轴旋转')
galaxyFolder.add(galaxyGroup.rotation, 'y', -Math.PI, Math.PI).name('Y轴旋转')
galaxyFolder.add(galaxyGroup.rotation, 'z', -Math.PI, Math.PI).name('Z轴旋转')
galaxyFolder.open()
