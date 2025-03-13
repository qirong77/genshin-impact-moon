import * as THREE from "three";
import { gui } from "./gui";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
// 默认情况,面向屏幕的是z轴
camera.position.set(0, 0, 4);
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
    renderer.render(scene, camera);
}
animation();
export { THREE, scene, camera, renderer, clock };
