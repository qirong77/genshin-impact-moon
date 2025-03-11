import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { THREE } from "../../common/main";

export class StartRingGeometry {
    geometryConfig = {
        startCounts: 1000,
        innerRadius: 1,
        outerRadius: 2,
    };
    currentGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes> | null = null;
    onChangeHanlders: Function[] = [];
    // @ts-ignore
    constructor(startRingGUI: GUI) {
        this.currentGeometry = this.createGeometry();
        Reflect.ownKeys(this.geometryConfig).forEach((key) => {
            // @ts-ignore
            startRingGUI.add(this.geometryConfig, key).onChange((value) => {
                // @ts-ignore
                this.geometryConfig[key] = value;
                const newGeometry = this.createGeometry();
                this.currentGeometry?.dispose();
                this.currentGeometry = newGeometry;
                this.onChangeHanlders.forEach((fn) => {
                    fn(newGeometry);
                });
            });
        });
    }
    createGeometry() {
        const { startCounts, innerRadius, outerRadius } = this.geometryConfig;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(startCounts * 3);
        const offsets = new Float32Array(startCounts); // 每个粒子的随机偏移量
        for (let i = 0; i < startCounts; i++) {
            const i3 = i * 3;

            // 生成圆环内的随机位置
            const angle = Math.random() * Math.PI * 2; // 随机角度
            const radius = innerRadius + Math.random() * (outerRadius - innerRadius); // 半径在指定范围内
            positions[i3] = Math.cos(angle) * radius; // x坐标
            positions[i3 + 1] = Math.sin(angle) * radius; // y坐标
            positions[i3 + 2] = 0; // z坐标保持为0（在XY平面上）
            // 随机偏移量
            offsets[i] = Math.random() * 2 * Math.PI; // 0 到 2π 之间的随机偏移量
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("offset", new THREE.BufferAttribute(offsets, 1));
        return geometry;
    }

    getGeometry() {
        return this.currentGeometry;
    }
    onChangeConfig(fn: Function) {
        this.onChangeHanlders.push(fn);
    }
}
