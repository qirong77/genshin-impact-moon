import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import { scene, THREE } from "./main";

const LENGTH = 2;
const axisHelper = new THREE.AxesHelper(LENGTH /* 10表示坐标轴的长度, */); // 红绿蓝  => xyz
scene.add(axisHelper);
// 添加坐标轴标签 "X", "Y", "Z"
const fontLoader = new FontLoader();
fontLoader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function (font) {
    const fontConfig = {
        font: font,
        size: 0.2,
        depth: 0.01,
    };
    const xAxisGeometry = new TextGeometry("X", fontConfig);
    const xAxisLabel = new THREE.Mesh(xAxisGeometry, new THREE.MeshBasicMaterial({ color: "red" }));
    xAxisLabel.position.set(LENGTH, 0, 0);
    scene.add(xAxisLabel);

    const yAxisGeometry = new TextGeometry("Y", fontConfig);
    const yAxisLabel = new THREE.Mesh(yAxisGeometry, new THREE.MeshBasicMaterial({ color: "yellow" }));
    yAxisLabel.position.set(0, LENGTH, 0);
    scene.add(yAxisLabel);

    const zAxisGeometry = new TextGeometry("Z", fontConfig);
    const zAxisLabel = new THREE.Mesh(zAxisGeometry, new THREE.MeshBasicMaterial({ color: "blue" }));
    zAxisLabel.position.set(0, 0, LENGTH);
    scene.add(zAxisLabel);
});
export { axisHelper };
