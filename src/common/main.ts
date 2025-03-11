import * as THREE from "three";
import { gui } from "./gui";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
// 默认情况,面向屏幕的是z轴
camera.position.set(4, 7, 7);
camera.lookAt(0, 0, 0);
const cameraGui = gui.addFolder("camera");
cameraGui.add(camera.position, "x").min(-20).max(20).step(1);
cameraGui.add(camera.position, "y").min(-20).max(20).step(1);
cameraGui.add(camera.position, "z").min(-20).max(20).step(1);
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
