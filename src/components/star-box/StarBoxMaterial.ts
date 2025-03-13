import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { camera, THREE } from "../../common/main";

export function createStarBoxMaterial(starBoxGUI: GUI) {
    const material = new THREE.PointsMaterial();
    material.size = 0.008;
    material.color.set(0xfff000);
    // 展示出来的点相机深度而衰减
    material.sizeAttenuation = true;
    // 开启顶点着色
    material.vertexColors = true;
    return material;
}