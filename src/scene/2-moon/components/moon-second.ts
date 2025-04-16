import { THREE } from "@/common/main";
import { TextureLoader } from "three";
import IMAGE_PATH from "@assets/item/moon-2.png";

import { createSceneMoonGui } from "../moon-gui";
import { moonGroup } from "../moon-group";
// 控制参数
const controls = {
    scale: 1.67,
    brightness: -0.1,
    opacity: 1.,
    rotationX: 1.5,
    rotationY: 3.0,
    rotationZ: 6.2,
    positionX: 0,
    positionY: 0,
    positionZ: -1.,
};

// 创建球体几何体
const geometry = new THREE.SphereGeometry(0.15, 32, 32);
const gui = createSceneMoonGui('moon-second');
// 加载月球纹理
const textureLoader = new TextureLoader();
const texture = textureLoader.load(IMAGE_PATH);
texture.colorSpace = THREE.SRGBColorSpace;

// 创建材质
const material = new THREE.MeshBasicMaterial({
    map: texture,
    opacity: 1.,
    transparent: false,
    depthWrite: false,
    blending: THREE.NormalBlending,
    side: THREE.FrontSide,
});

// 创建网格并添加到场景
const mesh = new THREE.Mesh(geometry, material);
// 初始化 gui 的值
material.color.setScalar(controls.brightness + 1);
mesh.position.set(controls.positionX, controls.positionY, controls.positionZ);
mesh.scale.set(controls.scale, controls.scale, controls.scale);
mesh.rotation.set(controls.rotationX, controls.rotationY, controls.rotationZ);
// 添加 GUI 控制
gui.add(controls, 'scale', 0.1, 5).onChange((value) => {
    mesh.scale.set(value, value, value);
});
gui.add(controls, 'brightness', -1, 1).onChange((value) => {
    material.color.setScalar(value + 1); // 调整亮度
});
gui.add(controls, 'opacity', 0, 1).onChange((value) => {
    material.opacity = value;
});
gui.add(controls, 'rotationX', 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.x = value;
});
gui.add(controls, 'rotationY', 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.y = value;
});
gui.add(controls, 'rotationZ', 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.z = value;
});
gui.add(controls, 'positionX', -5, 5).onChange((value) => {
    mesh.position.x = value;
});
gui.add(controls, 'positionY', -5, 5).onChange((value) => {
    mesh.position.y = value;
});
gui.add(controls, 'positionZ', -10, 10).onChange((value) => {
    mesh.position.z = value;
});
moonGroup.add(mesh)