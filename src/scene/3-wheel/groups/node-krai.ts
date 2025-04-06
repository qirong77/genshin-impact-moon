import { NodKraiMap } from "@/scene/4-Nod-Krai/EnumNodKrai";
import { createNodeKrai } from "../components/Node-Krai";
import { createSceneWheelGui } from "../wheel-gui";
import { scene, THREE } from "@/common/main";
import { threeIntersectionObserver } from "@/common/ThreeIntersectionObserver";
import { animateGalxy } from "./solar";
const folder = createSceneWheelGui("wheel-nodeKrai");
function getPositionByRadius(radius: number, acount: number): Array<[number, number, number]> {
    const positions: Array<[number, number, number]> = [];
    for (let i = 0; i < acount; i++) {
        const angle = (i / acount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        positions.push([x, y, 0.15]);
    }
    return positions;
}
function createGroup(radius: number, count: number, textureStartIndex: number, textureEndIndex?: number) {
    const threePositions = getPositionByRadius(radius, count);
    const group = new THREE.Group();
    const textures = Object.keys(NodKraiMap).slice(textureStartIndex, textureEndIndex);
    threePositions.forEach((item, index) => {
        // 确保索引在textures范围内
        if (index < textures.length) {
            // @ts-ignore
            const mesh = createNodeKrai(folder, NodKraiMap[textures[index]]);
            mesh.name = textures[index];
            threeIntersectionObserver.addCube({
                cube:mesh,
                onClick() {
                    scene.remove(firstGroup);
                    scene.remove(sencondGroup);
                    animateGalxy()
                    window.dispatchEvent(new CustomEvent("custom-nod-krai-click", { detail: mesh.name }));
                },
                onHover() {
                    console.log(mesh.name);
                },
                pointer: true,
            });
            mesh.rotation.x = Math.PI * 0.5;
            mesh.position.set(item[0], item[1], item[2]);
            group.add(mesh);
        }
    });
    return group;
}
const firstGroup = createGroup(0.6, 3, 0, 3);
const sencondGroup = createGroup(1.5, 8, 3);
firstGroup.rotation.x = -1.1;
firstGroup.rotation.y = -0.18;
firstGroup.rotation.z = -0.18;
sencondGroup.rotation.x = -1.1;
sencondGroup.rotation.y = -0.18;
sencondGroup.rotation.z = -0.18;
scene.add(firstGroup);
scene.add(sencondGroup);
// 保存初始位置信息，用于计算旋转后的位置
const initialPositions: Array<{ mesh: THREE.Object3D; initialX: number; initialY: number }> = [];

// 合并两个组的初始位置收集逻辑
[firstGroup, sencondGroup].forEach((group) => {
    group.children.forEach((mesh) => {
        initialPositions.push({
            mesh,
            initialX: mesh.position.x,
            initialY: mesh.position.y,
        });
    });
});

// 当前旋转角度
let rotationAngle = 0;

function animate() {
    // 增加旋转角度
    rotationAngle += 0.001;

    // 更新每个mesh的位置，而不是旋转整个group
    initialPositions.forEach((item) => {
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
