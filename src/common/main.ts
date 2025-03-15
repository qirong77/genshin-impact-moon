import * as THREE from "three";
import { gui } from "./gui";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
// 默认情况,面向屏幕的是z轴
const basePosition = {
    x: -0.14,
    y: -1.18,
    z: 3.66
};
camera.position.set(basePosition.x, basePosition.y, basePosition.z);
camera.lookAt(0, 0, 0);
export const cameraGui = gui.addFolder("camera");
cameraGui.close(); // 默认收起面板
cameraGui.add(camera.position, "x").min(-10).max(10)
cameraGui.add(camera.position, "y").min(-10).max(10)
cameraGui.add(camera.position, "z").min(-10).max(10)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
// 设置了动画之后OribitController才支持拖动
const clock = new THREE.Clock();
function animation() {
    requestAnimationFrame(animation);
    const time = clock.getElapsedTime();
    // 添加相机轻微摇摆动画
    const amplitude = 0.1; // 振幅
    const frequency = 0.2; // 频率
    camera.position.x = basePosition.x + Math.sin(time * frequency) * amplitude;
    camera.position.y = basePosition.y + Math.cos(time * frequency) * amplitude;
    camera.position.z = basePosition.z + Math.sin(time * frequency * 0.5) * amplitude * 0.5;
    renderer.render(scene, camera);
}
animation();
export { THREE, scene, camera, renderer, clock };
