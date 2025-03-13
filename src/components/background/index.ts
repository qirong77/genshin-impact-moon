import { PlaneGeometry, TextureLoader, Mesh, MeshBasicMaterial } from "three";
import { scene, camera, THREE } from "../../common/main";
import { gui } from "../../common/gui";

export function createBackground() {
    // GUI配置对象
    const config = {
        brightness: 0.3,
        opacity: 1.0,
        positionX: 0,
        positionY: 0
    };

    // 创建纹理加载器
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('/bg.png');

    // 创建一个足够大的平面几何体
    const geometry = new PlaneGeometry(5, 5);
    const material = new MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: config.opacity
    });
    material.color.setRGB(config.brightness, config.brightness, config.brightness);
    material.opacity = config.opacity;

    texture.colorSpace = THREE.SRGBColorSpace; // 设置为 sRGB 色彩空间
    
    // 创建网格
    const plane = new Mesh(geometry, material);

    // 添加GUI控制
    const folder = gui.addFolder('背景设置');
    folder.add(config, 'brightness', 0, 2).name('亮度').onChange(() => {
        material.color.setRGB(config.brightness, config.brightness, config.brightness);
    });
    folder.add(config, 'opacity', 0, 1).name('透明度').onChange(() => {
        material.opacity = config.opacity;
    });
    folder.add(config, 'positionX', -2, 2).name('X轴位置').onChange(() => {
        plane.position.x = config.positionX;
    });
    folder.add(config, 'positionY', -2, 2).name('Y轴位置').onChange(() => {
        plane.position.y = config.positionY;
    });
    folder.open();
    
    // 将平面放置在场景最后方
    plane.position.z = -5;
    
    // 添加到场景
    scene.add(plane);

    // 调整平面大小以适应屏幕
    function updatePlaneSize() {
        const distance = Math.abs(plane.position.z);
        const vFov = (camera.fov * Math.PI) / 180;
        const height = 2 * Math.tan(vFov / 2) * distance;
        const width = height * (window.innerWidth / window.innerHeight);

        plane.scale.set(width, height, 1);
    }

    // 更新平面朝向
    function updatePlaneOrientation() {
        plane.lookAt(camera.position);
    }

    // 添加动画更新
    function animate() {
        updatePlaneOrientation();
        requestAnimationFrame(animate);
    }
    animate();

    // 监听窗口大小变化
    window.addEventListener('resize', updatePlaneSize);
    updatePlaneSize();

    return plane;
}
