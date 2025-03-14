import { gui } from "../../common/gui";
import { THREE } from "../../common/main";
const alphaTexture = new THREE.TextureLoader().load("../../../public/alpha.png"); //
let index = 1;
export function createRingItem(
    imagePath = "../../../public/satellite.png",
    defaultValue = {
        circleSize: 1.0,
        xPosition:0,
        yPosition:0
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
    return mesh;
}
