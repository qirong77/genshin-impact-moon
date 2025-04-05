import { NodKraiMap } from "@/scene/4-Nod-Krai/EnumNodKrai";
import { createNodeKrai } from "../components/Node-Krai";
import { createSceneWheelGui } from "../wheel-gui";
import { scene, THREE } from "@/common/main";
const folder = createSceneWheelGui("wheel-nodeKrai");
// const card1 = createNodeKrai(folder, NodKraiMap.AdventurersGuild);
function getPositionByRadius(radius: number, acount: number): Array<[number, number, 0]> {
    const positions: Array<[number, number, 0]> = [];
    for (let i = 0; i < acount; i++) {
        const angle = (i / acount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        positions.push([x, y, 0]);
    }
    return positions;
}
const threePositions = getPositionByRadius(1.5, 3);
const group = new THREE.Group();
threePositions.forEach((item, index) => {
    const mesh = createNodeKrai(folder, NodKraiMap.AdventurersGuild);
    mesh.rotation.x = Math.PI * 0.5;
    mesh.position.set(item[0], item[1], item[2] + 0.3);
    group.add(mesh);
});
group.rotation.x = -1.1;
group.rotation.y = -0.18;
group.rotation.z = -0.18;

scene.add(group);
