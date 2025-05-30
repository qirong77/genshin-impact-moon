import { THREE } from "@/common/main";
import { TextureLoader } from "three";
import IMAGE_PATH from "@assets/item/moon-texture.png";
import { createSceneMoonGui } from "../../moon-gui";
import { GIMSceneItem } from "@/type";
import gsap from 'gsap';

// 控制参数
const controls = {
    scale: 1.1,
    brightness: -0.1,
    opacity: 1,
    rotationX: 0.3,
    rotationY: 0,
    rotationZ: 0,
    rotationSpeed: 0.002,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
};

// 创建球体几何体
const geometry = new THREE.SphereGeometry(0.15, 32, 32);
const gui = createSceneMoonGui("moon-moon");
// 加载月球纹理
const textureLoader = new TextureLoader();
const texture = textureLoader.load(IMAGE_PATH);
texture.colorSpace = THREE.SRGBColorSpace;

// 创建材质
const material = new THREE.MeshBasicMaterial({
    map: texture,
    opacity: 1,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,

    side: THREE.FrontSide,
});

// 创建网格并添加到场景
const mesh = new THREE.Mesh(geometry, material);

// 初始化 gui 的值
geometry.rotateX(controls.rotationX);
material.color.setScalar(controls.brightness + 1);
geometry.scale(controls.scale, controls.scale, controls.scale);
// 添加 GUI 控制
gui.add(controls, "scale", 0.1, 5).onChange((value) => {
    mesh.scale.set(value, value, value);
});
gui.add(controls, "brightness", -1, 1).onChange((value) => {
    material.color.setScalar(value + 1); // 调整亮度
});
gui.add(controls, "opacity", 0, 1).onChange((value) => {
    material.opacity = value;
});
gui.add(controls, "rotationX", 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.x = value;
});
gui.add(controls, "rotationY", 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.y = value;
});
gui.add(controls, "rotationZ", 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.z = value;
});
gui.add(controls, "rotationSpeed", 0, 0.1);
gui.add(controls, "positionX", -5, 5).onChange((value) => {
    mesh.position.x = value;
});
gui.add(controls, "positionY", -5, 5).onChange((value) => {
    mesh.position.y = value;
});
gui.add(controls, "positionZ", -5, 5).onChange((value) => {
    mesh.position.z = value;
});

// 添加动画
const animate = () => {
    mesh.rotation.y += controls.rotationSpeed;
    requestAnimationFrame(animate);
};
animate();


export const GIMSceneItemMoon: GIMSceneItem = {
    name: "moon",
    item: mesh,
    opacityShow: (ease: string, duration: number, opacity: number = 1.0) => {
        mesh.material.opacity = 0.7;
        gsap.to(mesh.material, {
            opacity,
            duration,
            ease,
        });
    },
    opacityHide: (ease: string, duration: number, opacity: number = 0.0) => {
        gsap.to(mesh.material, {
            opacity,
            duration,
            ease,
        });
    },
};