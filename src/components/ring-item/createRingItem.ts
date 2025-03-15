import { gui } from "../../common/gui";
import { THREE } from "../../common/main";
import AlphaPath from "@assets/item/alpha.png";

const alphaTexture = new THREE.TextureLoader().load(AlphaPath); //
let index = 1;
import SatelliteImagePath from '@assets/item/satellite.png'
export function createRingItem(
    imagePath = SatelliteImagePath,
    defaultValue = {
        circleSize: 1.0,
        xPosition:0,
        yPosition:0,
        rotationSpeed: 0.05,
        opacity: 0.45
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
        alphaMap:alphaTexture,
        alphaTest:0.1,
        opacity: defaultValue.opacity
    });
    const mesh = new THREE.Mesh(circleGeometry, circleMaterial);
    mesh.scale.set(Number(defaultValue.circleSize), Number(defaultValue.circleSize), 1);
    mesh.position.x = defaultValue.xPosition;
    mesh.position.y = defaultValue.yPosition;
    mesh.position.z = 0.2; // 稍微调整z轴避免与星星重叠
    const folder = gui.addFolder('ringitem' + index++);
    folder.close(); // 默认收起面板
    const controls = {
        ...defaultValue,
    };
    // 新增图片大小控制
    folder.add(controls, "circleSize", 0.1, 5).onChange((value) => {
        mesh.scale.set(Number(value), Number(value), 1);
    });
    folder.add(controls, "xPosition", -10, 10).onChange((value) => {
        mesh.position.x = value;
    })
    folder.add(controls, "yPosition", -10, 10).onChange((value) => {
        mesh.position.y = value;
    })
    // 添加旋转速度控制
    folder.add(controls, "rotationSpeed", -0.1, 0.1).name("旋转速度");
    // 添加透明度控制
    folder.add(controls, "opacity", 0, 1).name("透明度").onChange((value) => {
        circleMaterial.opacity = value;
    });

    function animate() {
        requestAnimationFrame(animate);
        // 更新旋转
        mesh.rotation.z += controls.rotationSpeed * 0.01;
    }

    animate();
    return mesh;
}
