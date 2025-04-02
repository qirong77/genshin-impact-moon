import { scene, THREE } from "@/common/main";
import { TextureLoader } from "three";
import IMAGE_PATH from "@assets/item/moon-texture.png";
// import MOON_BG from '@assets/item/moon-bg.png'
const createMoon = () => {
    // 创建球体几何体
    const geometry = new THREE.SphereGeometry(0.15, 32, 32);

    // 加载月球纹理
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(IMAGE_PATH);
    texture.colorSpace = THREE.SRGBColorSpace;

    // 创建材质
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.FrontSide,
    });
    // 创建网格并添加到场景
    const mesh = new THREE.Mesh(geometry, material);
    
    // 添加动画
    const animate = () => {
        mesh.rotation.y += 0.002; // 调整旋转速度
        requestAnimationFrame(animate);
    };
    animate();
    
    return mesh;
};
// const createMoonBg = () => {
//     // 创建球体几何体
//     const geometry = new THREE.PlaneGeometry(1, 1, 32);

//     // 加载月球纹理
//     const textureLoader = new TextureLoader();
//     const texture = textureLoader.load(MOON_BG);
//     texture.colorSpace = THREE.SRGBColorSpace;

//     // 创建材质
//     const material = new THREE.MeshBasicMaterial({
//         map: texture,
//         side: THREE.FrontSide,
//     });
//     // 创建网格并添加到场景
//     const mesh = new THREE.Mesh(geometry, material);
//     return mesh;
// };
// const moonbg = createMoonBg()
// scene.add(moonbg);
const moon = createMoon();
scene.add(moon)
