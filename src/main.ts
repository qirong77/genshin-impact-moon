import "./style.css";
import "./common/index";
import { scene, camera, renderer, clock, THREE } from "./common/main";

const START_COUNTS = 100;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(START_COUNTS * 3);
const colors = new Float32Array(START_COUNTS * 3);

for (let i = 0; i < START_COUNTS; i++) {
    const i3 = i * 3;

    // 生成圆环内的随机位置
    const angle = Math.random() * Math.PI * 2; // 随机角度
    const radius = 1 + Math.random() * (2 - 1); // 半径在1到2之间
    positions[i3] = Math.cos(angle) * radius; // x坐标
    positions[i3 + 1] = Math.sin(angle) * radius; // y坐标
    positions[i3 + 2] = 0; // z坐标保持为0（在XY平面上）

    // 随机颜色
    colors[i3] = 0.1 + 0.9 * Math.random(); // 稍微偏白的颜色
    colors[i3 + 1] = 0.1 + 0.9 * Math.random();
    colors[i3 + 2] = 0.8 + 0.2 * Math.random(); // 稍微偏蓝的颜色
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
const material = new THREE.PointsMaterial({
    vertexColors: true,
    size: 0.1, // 设置点的大小
    sizeAttenuation: true, // 控制点的大小随距离的变化
    transparent: true,
    blending: THREE.AdditiveBlending // 使点具有闪烁效果
});
const points = new THREE.Points(geometry, material);
scene.add(points);

function animate() {
    requestAnimationFrame(animate);

    // 更新点的颜色以模拟闪烁效果
    for (let i = 0; i < START_COUNTS; i++) {
        const i3 = i * 3;
        const brightness = (Math.sin(clock.getElapsedTime() * 5 + i) + 1) / 2; // 增加频率
        colors[i3] = 0.1 + 0.9 * brightness; // 稍微偏白的颜色
        colors[i3 + 1] = 0.1 + 0.9 * brightness;
        colors[i3 + 2] = 0.8 + 0.2 * brightness; // 稍微偏蓝的颜色
    }
    geometry.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
}

animate();