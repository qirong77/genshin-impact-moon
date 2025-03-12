import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { camera, cameraGui, renderer } from "./main";

export const orbitCOntroler = new OrbitControls(camera, renderer.domElement);
orbitCOntroler.addEventListener('change', () => {
        // 更新 GUI 中的相机位置参数
        cameraGui.controllers[0].updateDisplay(); // 更新 x
        cameraGui.controllers[1].updateDisplay(); // 更新 y
        cameraGui.controllers[2].updateDisplay(); // 更新 z
})
// orbitCOntroler.enabled = false