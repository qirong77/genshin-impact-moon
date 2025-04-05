import { NodKraiMap } from "@/scene/4-Nod-Krai/EnumNodKrai";
import { createNodeKrai } from "../components/Node-Krai";
import { createSceneWheelGui } from "../wheel-gui";
import { scene, THREE } from "@/common/main";
const folder = createSceneWheelGui("wheel-nodeKrai");
// const card1 = createNodeKrai(folder, NodKraiMap.AdventurersGuild);
function getPositionByRadius(radius: number, acount: number): Array<[number, 0, number]> {
    const positions: Array<[number, 0, number]> = [];
    for (let i = 0; i < acount; i++) {
        const angle = (i / acount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        positions.push([x, 0, z]);
    }
    return positions;
}
const threePositions = getPositionByRadius(1, 3);
const group = new THREE.Group();
threePositions.forEach((item, index) => {
    const mesh = createNodeKrai(folder, NodKraiMap.AdventurersGuild);
    mesh.position.set(item[0], item[1], item[2]);
    group.add(mesh);
});
const config = {
    rotationX:0,
    rotationY:0,
    rotationZ:0,
}
const gui = createSceneWheelGui("wheel-nodeKrai-rotation");
gui.add(config, "rotationX", -Math.PI, Math.PI).name("X轴旋转").onChange((value) => {
    group.rotation.x = value;
});
gui.add(config, "rotationY", -Math.PI, Math.PI).name("Y轴旋转").onChange((value) => {
    group.rotation.y = value;
});
gui.add(config, "rotationZ", -Math.PI, Math.PI).name("Z轴旋转").onChange((value) => {
    group.rotation.z = value;
});
scene.add(group);