import * as THREE from "three";
import { gui } from "./gui";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
// 默认情况,面向屏幕的是z轴
export const basePosition = {
    x: 0,
    y: 0,
    z: 3.7,
};
camera.position.set(basePosition.x, basePosition.y, basePosition.z);
camera.lookAt(0, 0, 0);
export const clock = new THREE.Clock();
export const cameraGui = gui.addFolder("camera");
cameraGui.close(); // 默认收起面板

// 位置控制
const positionFolder = cameraGui.addFolder("位置控制");
positionFolder.add(camera.position, "x").min(-10).max(10).name("X轴位置");
positionFolder.add(camera.position, "y").min(-10).max(10).name("Y轴位置");
positionFolder.add(camera.position, "z").min(-10).max(10).name("Z轴位置");

// 视角控制
const viewFolder = cameraGui.addFolder("视角控制");
const cameraParams = {
    fov: camera.fov,
    near: camera.near,
    far: camera.far,
    lookAtX: 0,
    lookAtY: 0,
    lookAtZ: 0,
};

viewFolder
    .add(cameraParams, "fov", 30, 120)
    .name("视场角")
    .onChange((value) => {
        camera.fov = value;
        camera.updateProjectionMatrix();
    });
viewFolder
    .add(cameraParams, "near", 0.1, 10)
    .name("近平面")
    .onChange((value) => {
        camera.near = value;
        camera.updateProjectionMatrix();
    });
viewFolder
    .add(cameraParams, "far", 10, 1000)
    .name("远平面")
    .onChange((value) => {
        camera.far = value;
        camera.updateProjectionMatrix();
    });
// 朝向控制
const lookAtFolder = cameraGui.addFolder("朝向控制");
lookAtFolder
    .add(cameraParams, "lookAtX", -10, 10)
    .name("X轴朝向")
    .onChange(() => {
        camera.lookAt(cameraParams.lookAtX, cameraParams.lookAtY, cameraParams.lookAtZ);
    });
lookAtFolder
    .add(cameraParams, "lookAtY", -10, 10)
    .name("Y轴朝向")
    .onChange(() => {
        camera.lookAt(cameraParams.lookAtX, cameraParams.lookAtY, cameraParams.lookAtZ);
    });
lookAtFolder
    .add(cameraParams, "lookAtZ", -10, 10)
    .name("Z轴朝向")
    .onChange(() => {
        camera.lookAt(cameraParams.lookAtX, cameraParams.lookAtY, cameraParams.lookAtZ);
    });
viewFolder.add;
viewFolder.open();
positionFolder.open();
lookAtFolder.open();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);

export { THREE, scene, camera, renderer};
