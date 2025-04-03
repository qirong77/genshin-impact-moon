import { scene, THREE } from "@/common/main";
import { TextureLoader } from "three";
import IMAGE_PATH from "@assets/item/moon-texture.png";
import { createSceneMoonGui } from "../moon-gui";

// 创建球体几何体
const geometry = new THREE.SphereGeometry(0.15, 32, 32);
const gui = createSceneMoonGui('moon-moon');

// 加载月球纹理
const textureLoader = new TextureLoader();
const texture = textureLoader.load(IMAGE_PATH);
texture.colorSpace = THREE.SRGBColorSpace;

// 创建材质
const material = new THREE.MeshBasicMaterial({
    map: texture,
    opacity: 0.8,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
});

// 创建网格并添加到场景
const mesh = new THREE.Mesh(geometry, material);

// 控制参数
const controls = {
    scale: 1,
    brightness: 0,
    rotationSpeed: 0.002,
    positionX: 0,
    positionY: 0,
    positionZ: 0
};

// 添加GUI控制
gui.add(controls, 'scale', 0.1, 3).onChange((value) => {
    mesh.scale.set(value, value, value);
});
gui.add(controls, 'rotationSpeed', 0, 0.01);
gui.add(controls, 'positionX', -2, 2).onChange((value) => mesh.position.x = value);
gui.add(controls, 'positionY', -2, 2).onChange((value) => mesh.position.y = value);
gui.add(controls, 'positionZ', -2, 2).onChange((value) => mesh.position.z = value);

// 添加动画
const animate = () => {
    mesh.rotation.y += controls.rotationSpeed;
    requestAnimationFrame(animate);
};
animate();

scene.add(mesh);
