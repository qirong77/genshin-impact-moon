import { gui } from "../../common/gui";
import { clock, scene, THREE } from "../../common/main";
import AlphaPath from "@assets/item/alpha.png";
const alphaTexture = new THREE.TextureLoader().load(AlphaPath); //
import CirclePath from "@assets/circle/circle-A.png";
export function createCircle(
    imagePath = CirclePath,
    circleName = "circlename",
    defaultValue = {
        circleSize: 3.5,
        rotationSpeed: 0.5, // 默认旋转速度
        opacity: 0.5,
    }
) {
    // 添加图片到圆环中心
    const textureLoader = new THREE.TextureLoader();
    const circleTexture = textureLoader.load(imagePath);

    const circleGeometry = new THREE.PlaneGeometry(1, 1); // 平面大小根据图片调整
    const circleMaterial = new THREE.MeshBasicMaterial({
        map: circleTexture,
        transparent: true,
        side: THREE.DoubleSide,
        alphaMap: alphaTexture,
        opacity: defaultValue.opacity,
        alphaTest: 0.1,
    });
    const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
    circleMesh.scale.set(Number(defaultValue.circleSize), Number(defaultValue.circleSize), 1);

    circleMesh.position.z = 0.1; // 稍微调整z轴避免与星星重叠

    const folder = gui.addFolder(circleName);
    folder.close(); // 默认收起面板
    const controls = {
        ...defaultValue,
    };
    // 新增图片大小控制
    folder.add(controls, "circleSize", 1, 10).onChange((value) => {
        circleMesh.scale.set(Number(value), Number(value), 1);
    });
    // 添加旋转速度控制
    folder.add(controls, "rotationSpeed", -0.1, 0.1).name("旋转速度");

    function animate() {
        // return
        requestAnimationFrame(animate);
        // 图片透明度随时间变化

        // 更新圆环旋转
        circleMesh.rotation.z += controls.rotationSpeed * 0.01;
    }

    animate();
    return circleMesh;
}
