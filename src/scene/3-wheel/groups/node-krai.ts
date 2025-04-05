import { NodKraiMap } from "@/scene/4-Nod-Krai/EnumNodKrai";
import { createNodeKrai } from "../components/Node-Krai";
import { createSceneWheelGui } from "../wheel-gui";
import { scene, THREE } from "@/common/main";
const folder = createSceneWheelGui("wheel-nodeKrai");
function getPositionByRadius(radius: number, acount: number): Array<[number, number, number]> {
    const positions: Array<[number, number, number]> = [];
    for (let i = 0; i < acount; i++) {
        const angle = (i / acount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        positions.push([x, y, 0.1]);
    }
    return positions;
}
function createFirstGroup() {
    const threePositions = getPositionByRadius(0.6, 3);
    const group = new THREE.Group();
    const textures = Object.keys(NodKraiMap).slice(0, 3);
    threePositions.forEach((item, index) => {
        // @ts-ignore
        const mesh = createNodeKrai(folder, NodKraiMap[textures[index]]);
        mesh.rotation.x = Math.PI * 0.5;
        mesh.position.set(item[0], item[1], item[2] );
        group.add(mesh);
    });
    return group;
}
function createSencondGroup() {
    const threePositions = getPositionByRadius(1.5, 8);
    const group = new THREE.Group();
    const textures = Object.keys(NodKraiMap).slice(3);
    threePositions.forEach((item, index) => {
        // @ts-ignore
        const mesh = createNodeKrai(folder, NodKraiMap[textures[index]]);
        mesh.rotation.x = Math.PI * 0.5;
        mesh.position.set(item[0], item[1], item[2] );
        group.add(mesh);
    });
    return group;
}
const firstGroup = createFirstGroup();
const sencondGroup = createSencondGroup();
scene.add(firstGroup);
// scene.add(sencondGroup);
function animate() {

}
animate();
