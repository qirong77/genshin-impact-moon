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
scene.add(sencondGroup);
// 保存初始位置信息，用于计算旋转后的位置
const initialPositions: Array<{mesh: THREE.Object3D, initialX: number, initialY: number}> = [];
firstGroup.children.forEach(mesh => {
  initialPositions.push({
    mesh,
    initialX: mesh.position.x,
    initialY: mesh.position.y
  });
});
sencondGroup.children.forEach(mesh => {
  initialPositions.push({
    mesh,
    initialX: mesh.position.x,
    initialY: mesh.position.y
  });
});

// 当前旋转角度
let rotationAngle = 0;

function animate() {
  // 增加旋转角度
  rotationAngle += 0.01;
  
  // 更新每个mesh的位置，而不是旋转整个group
  initialPositions.forEach(item => {
    // 使用旋转矩阵计算新的位置
    const cos = Math.cos(rotationAngle);
    const sin = Math.sin(rotationAngle);
    
    // 应用旋转变换到初始位置
    const newX = item.initialX * cos - item.initialY * sin;
    const newY = item.initialX * sin + item.initialY * cos;
    
    // 更新位置，保持z和朝向不变
    item.mesh.position.set(newX, newY, item.mesh.position.z);
  });
  
  // 使用requestAnimationFrame实现连续动画
  requestAnimationFrame(animate);
}
animate();
