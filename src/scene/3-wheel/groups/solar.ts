import { scene, THREE } from "@/common/main";
import { createAxisStars } from "../components/axis-stars";
import { createCircle } from "../components/circle/createCircle";
import { createRingItem } from "../components/ring-item/createRingItem";
import { createStarRing } from "../components/star-ring";
import imagePathPurpleDream from "@assets/background/1x1_广袤的深空背景_中间是较大区域的暗色无法窥视_四周渐现淡紫色梦幻.png";
// Import circle textures
import CirclePathA from "@assets/circle/circle-A.png";
import CirclePathB from "@assets/circle/circle-B.png";
import CirclePathC from "@assets/circle/circle-C.png";
import CirclePathD from "@assets/circle/circle-D.png";
import CirclePathF from "@assets/circle/circle-F.png";
import CirclePathG from "@assets/circle/circle-G.png";
import RingItemPathSatellite from "@assets/item/satellite.png";
import { createSceneWheelGui } from "../wheel-gui";
import { createBackground } from "../../common/createBackground";

// Create galaxy group
const galaxyGroup = new THREE.Group();

// Create axis stars
const axisStar = createAxisStars();

// Create star rings from inner to outer
const innerStarRing = createStarRing({
    innerRadius: 0.57,
    outerRadius: 0.9,
    opacity: 0.8,
});

const middleInnerStarRing = createStarRing({
    innerRadius: 1.12,
    outerRadius: 1.35,
    opacity: 0.6,
});

const middleOuterStarRing = createStarRing({
    innerRadius: 1.5,
    outerRadius: 2.3,
    starCounts: 5000,
    opacity: 0.5,
});

const outerStarRing = createStarRing({
    innerRadius: 2.2,
    outerRadius: 3.0,
    starCounts: 5000,
    opacity: 0.6,
});

// Create decorative circles
const innerDecorativeCircle = createCircle(CirclePathA, "innerDecorativeCircle", {
    circleSize: 2.4,
    rotationSpeed: 0.05,
    opacity: 1.0,
});

const middleGalaxyCircle = createCircle(CirclePathG, "middleGalaxyCircle", {
    circleSize: 3.9,
    rotationSpeed: 0.1,
    opacity: 1.0,
});

const outerGalaxyCircleA = createCircle(CirclePathC, "outerGalaxyCircleA", {
    circleSize: 4.5,
    rotationSpeed: -0.08,
    opacity: 1.0,
});

const outerGalaxyCircleB = createCircle(CirclePathB, "outerGalaxyCircleB", {
    circleSize: 4.5,
    rotationSpeed: -0.08,
    opacity: 1.0,
});

const outerDecorativeCircle = createCircle(CirclePathD, "outerDecorativeCircle", {
    circleSize: 5.5,
    rotationSpeed: -0.07,
    opacity: 0.8,
});

// Create ring items
const satelliteRingItem = createRingItem(RingItemPathSatellite, {
    circleSize: 0.95,
    xPosition: 1.45,
    yPosition: 0,
    rotationSpeed: 0.05,
    opacity: 1.0,
});

const decorativeRingItem = createRingItem(CirclePathF, {
    circleSize: 1.25,
    xPosition: 1.1,
    yPosition: -1.9,
    rotationSpeed: 0.05,
    opacity: 0.4,
});

const purpleDreamOverlay = createBackground(
    {
        brightness: 2.8,
        opacity: 0.95,
        positionX: -0.55,
        positionY: 0.1,
        positionZ: -0.35,
        scale: 5,
        rotationX: 0,
        rotationY: -0,
        rotationZ: 0,
        texture: imagePathPurpleDream,
    },
    createSceneWheelGui("wheel-purpleDreamOverlay")
);
const purpleDreamOverlay2 = createBackground(
    {
        brightness: 2,
        opacity: 0.9,
        positionX: -0.55,
        positionY: 0.1,
        positionZ: -0.5,
        scale: 2.8,
        rotationX: 0.1,
        rotationY: -0,
        rotationZ: 0,
        texture: imagePathPurpleDream,
    },
    createSceneWheelGui("wheel-purpleDreamOverlay2")
);

// Add all components to galaxy group
galaxyGroup.add(satelliteRingItem);
galaxyGroup.add(decorativeRingItem);
galaxyGroup.add(innerStarRing);
galaxyGroup.add(middleInnerStarRing);
galaxyGroup.add(middleOuterStarRing);
galaxyGroup.add(outerStarRing);
galaxyGroup.add(innerDecorativeCircle);
galaxyGroup.add(middleGalaxyCircle);
galaxyGroup.add(outerGalaxyCircleA);
galaxyGroup.add(outerGalaxyCircleB);
galaxyGroup.add(outerDecorativeCircle);
galaxyGroup.add(axisStar);
galaxyGroup.add(purpleDreamOverlay);
galaxyGroup.add(purpleDreamOverlay2);
// Add galaxy group to scene
scene.add(galaxyGroup);

// Create GUI controls for galaxy rotation
const galaxyFolder = createSceneWheelGui("wheel-galaxy-rotation");
galaxyGroup.rotation.x = -1.1;
galaxyGroup.rotation.y = -0.18;
galaxyGroup.rotation.z = -0.18;

galaxyFolder.add(galaxyGroup.rotation, "x", -Math.PI, Math.PI).name("X轴旋转");
galaxyFolder.add(galaxyGroup.rotation, "y", -Math.PI, Math.PI).name("Y轴旋转");
galaxyFolder.add(galaxyGroup.rotation, "z", -Math.PI, Math.PI).name("Z轴旋转");
galaxyFolder.open();
