import { scene, THREE } from "@/common/main";
import { TextureLoader } from "three";
import MOON_MASK from "@assets/background/mask.png";

import { createSceneMoonGui } from "../moon-gui";
// 控制参数
const controls = {
    scale: 1,
    brightness: -0.5,
    opacity: 1,
    rotationX: 0.3,
    rotationY: 0,
    rotationZ: 0,
    rotationSpeed: 0.002,
    positionX: 0,
    positionY: 0,
    positionZ: 0
};

// 创建球体几何体
const geometry = new THREE.SphereGeometry(0.15, 32, 32);
const gui = createSceneMoonGui('moon-mask');
// 加载月球纹理
const textureLoader = new TextureLoader();
const texture = textureLoader.load(MOON_MASK);
texture.colorSpace = THREE.SRGBColorSpace;

// 创建材质
const material = new THREE.MeshBasicMaterial({
    map: texture,
    opacity: 1,
    transparent: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    alphaTest: 0.5,
    // depthTest: false,
    side: THREE.FrontSide,
});

// 创建网格并添加到场景
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// 初始化 gui 的值
geometry.rotateX(controls.rotationX);
