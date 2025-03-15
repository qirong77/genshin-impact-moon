import { PlaneGeometry, TextureLoader, Mesh, MeshBasicMaterial } from "three";
import { scene, camera, THREE } from "../../common/main";
import { gui } from "../../common/gui";
import IMAGE_PATH from "@assets/item/meteor.png";
export function createMeteorBackground() {
    // GUI配置对象
    const config = {
        opacity: 0.66,
        positionX: -8, // 默认位置在左侧
        positionY: 2.92, // 默认位置在上方
        rotationSpeed: 0.03, // 旋转速度
        scale: 12.33, // 缩放比例
    };

    // 创建纹理加载器
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(IMAGE_PATH);

    // 创建平面几何体
    const geometry = new PlaneGeometry(1, 1);
    const material = new MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: config.opacity,
        side: THREE.DoubleSide, // 启用双面渲染
        depthWrite: false, // 禁用深度写入以避免渲染问题
        depthTest: true, // 保持深度测试
    });

    texture.colorSpace = THREE.SRGBColorSpace;

    // 创建网格
    const plane = new Mesh(geometry, material);

    // 设置初始位置
    plane.position.set(config.positionX, config.positionY, -3);
    plane.scale.set(config.scale, config.scale, 1);

    // 添加GUI控制
    const folder = gui.addFolder("流星设置");

    folder
        .add(config, "opacity", 0, 1)
        .name("透明度")
        .onChange(() => {
            material.opacity = config.opacity;
        });
    folder
        .add(config, "positionX", -20, 20)
        .name("X轴位置")
        .onChange(() => {
            plane.position.x = config.positionX;
        });
    folder
        .add(config, "positionY", -20, 20)
        .name("Y轴位置")
        .onChange(() => {
            plane.position.y = config.positionY;
        });
    folder
        .add(config, "rotationSpeed", -1, 1)
        .name("旋转速度")
        .onChange(() => {
            // 旋转速度的改变会在动画循环中生效
        });
    folder
        .add(config, "scale", 1, 30)
        .name("大小")
        .onChange(() => {
            plane.scale.set(config.scale, config.scale, 1);
        });
    folder.open();

    // 添加到场景
    scene.add(plane);

    // 添加动画更新
    function animate() {
        // 应用旋转，但保持面向相机
        plane.rotateZ(config.rotationSpeed * 0.01);
        requestAnimationFrame(animate);
    }
    animate();

    return plane;
}
