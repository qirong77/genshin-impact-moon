import { gui } from "../common/gui";
import { clock, scene, THREE } from "../common/main";

export function createCircle(
    imagePath = "../../public/circle-inside.png",
    circleName = "circlename",
    defaultValue = {
        minOpacity: 0.75,
        maxOpacity: 1,
        circleSize: 3.5,
    }
) {
    // 添加图片到圆环中心
    const textureLoader = new THREE.TextureLoader();
    const circleTexture = textureLoader.load(imagePath);

    const circleGeometry = new THREE.PlaneGeometry(1, 1); // 平面大小根据图片调整
    const circleMaterial = new THREE.MeshBasicMaterial({
        map: circleTexture,
        transparent: true,
        alphaTest: 0.5, // 处理透明度
    });
    const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
    circleMesh.position.z = 0.1; // 稍微调整z轴避免与星星重叠
    scene.add(circleMesh);
    const folder = gui.addFolder(circleName);
    const controls = {
        ...defaultValue,
    };
    folder.add(controls, "minOpacity", 0, 1).onChange((value) => {
        controls.minOpacity = Number(value);
        animate();
    });
    folder.add(controls, "maxOpacity", 0, 1).onChange((value) => {
        controls.maxOpacity = Number(value);
        animate();
    });
    // 新增图片大小控制
    folder.add(controls, "circleSize", 1, 10).onChange((value) => {
        circleMesh.scale.set(Number(value), Number(value), 1);
    });

    function animate() {
        return
        requestAnimationFrame(animate);
        // 图片透明度随时间变化
        const time = clock.getElapsedTime();
        const opacityRange = controls.maxOpacity - controls.minOpacity;
        circleMaterial.opacity = controls.minOpacity + Math.abs(Math.sin(time * 0.5)) * opacityRange;
    }

    animate();
}
