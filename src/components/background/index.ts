import { PlaneGeometry, TextureLoader, Mesh, MeshBasicMaterial } from "three";
import { scene, camera, THREE } from "../../common/main";
import { gui } from "../../common/gui";

export function createBackground(config = {
    brightness: 0.27,
    opacity: 0.3,
    positionX: 0.55,
    positionY: 2.08,
    positionZ: -5,
    scale: 6.6,
    rotationX: -0.45,
    rotationY: 0,
    rotationZ: 0,
    texture: ''
}) {
    // 创建纹理加载器
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(config.texture);

    // 创建一个足够大的平面几何体
    const geometry = new PlaneGeometry(2, 2);
    const material = new MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: config.opacity,
        depthWrite: false, // 禁用深度写入以避免渲染问题
        depthTest: true // 保持深度测试
    });
    // material.color.setRGB(config.brightness, config.brightness, config.brightness);
    material.opacity = config.opacity;

    texture.colorSpace = THREE.SRGBColorSpace; // 设置为 sRGB 色彩空间
    
    // 创建网格
    const plane = new Mesh(geometry, material);
    plane.scale.set(config.scale, config.scale, config.scale);
    plane.position.set(config.positionX, config.positionY, config.positionZ);
    plane.rotation.set(config.rotationX, config.rotationY, config.rotationZ);
    material.color.setRGB(config.brightness, config.brightness, config.brightness);
    // 添加GUI控制
    const folder = gui.addFolder('背景设置');
    folder.add(config, 'brightness', 0, 2).name('亮度').onChange(() => {
        material.color.setRGB(config.brightness, config.brightness, config.brightness);
    });
    folder.add(config, 'opacity', 0, 1).name('透明度').onChange(() => {
        material.opacity = config.opacity;
    });
    folder.add(config, 'positionX', -5, 5).name('X轴位置').onChange(() => {
        plane.position.x = config.positionX;
    });
    folder.add(config, 'positionY', -5, 5).name('Y轴位置').onChange(() => {
        plane.position.y = config.positionY;
    });
    folder.add(config, 'positionZ', -10, 10).name('Z轴位置').onChange(() => {
        plane.position.z = config.positionZ;
    });
    folder.add(config, 'scale', 1, 20).name('缩放比例').onChange(() => {
        plane.scale.set(config.scale, config.scale, config.scale);
    })
    folder.add(config, 'rotationX', -Math.PI, Math.PI).name('X轴旋转').onChange(() => {
        plane.rotation.x = config.rotationX;
    });
    folder.add(config, 'rotationY', -Math.PI, Math.PI).name('Y轴旋转').onChange(() => {
        plane.rotation.y  =config.rotationY;
    });
    folder.add(config, 'rotationZ', -Math.PI, Math.PI).name('Z轴旋转').onChange(() => {
        plane.rotation.z = config.rotationZ;
    });
    folder.open();
    
    // 将平面放置在场景最后方
    plane.position.z = config.positionZ;

    return plane;
}
