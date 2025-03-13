import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { THREE } from "../../common/main";

export class StarRingGeometry {
    geometryConfig = {
        starCounts: 1200,
        innerRadius: 1,
        outerRadius: 2,
        color: new THREE.Color(0.47, 0.19, 0.87),
        randomness: 0.2, // 添加随机性参数
        randomFrequency: 0.5, // 添加随机频率参数
    };
    currentGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes> | null = null;
    onChangeHanlders: Function[] = [];
    // @ts-ignore
    constructor(
        starRingGUI: GUI,
        geometryConfig?: {
            starCounts?: number;
            innerRadius?: number;
            outerRadius?: number;
            color?: THREE.Color;
            randomness?: number;
            randomFrequency?: number;
        }
    ) {
        this.currentGeometry = this.createGeometry();
        this.geometryConfig = {
            ...this.geometryConfig,
            ...geometryConfig,
        };
        const update = () => {
            const newGeometry = this.createGeometry();
            this.currentGeometry?.dispose();
            this.currentGeometry = newGeometry;
            this.onChangeHanlders.forEach((fn) => {
                fn(newGeometry);
            });
        };
        update()
        starRingGUI.addColor(this.geometryConfig, 'color').onChange(update);
        starRingGUI.add(this.geometryConfig, "innerRadius", 0, 5).onChange(update);
        starRingGUI.add(this.geometryConfig, "outerRadius", 1, 10).onChange(update);
        starRingGUI.add(this.geometryConfig, "starCounts", 0, 3000).onChange(update);
        starRingGUI.add(this.geometryConfig, "randomness", 0, 1).name("位置随机性").onChange(update);
        starRingGUI.add(this.geometryConfig, "randomFrequency", 0, 2).name("闪烁频率随机性").onChange(update);
    }
    createGeometry() {
        const { starCounts, innerRadius, outerRadius, color, randomness, randomFrequency } = this.geometryConfig;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCounts * 3);
        const colors = new Float32Array(starCounts * 3);
        const offsets = new Float32Array(starCounts);
        const frequencies = new Float32Array(starCounts); // 添加频率数组

        for (let i = 0; i < starCounts; i++) {
            const i3 = i * 3;

            // 生成基础圆环位置
            const angle = Math.random() * Math.PI * 2;
            const radius = innerRadius + Math.random() * (outerRadius - innerRadius);

            // 添加随机偏移
            const randomOffset = (Math.random() - 0.5) * randomness * (outerRadius - innerRadius);
            const randomAngleOffset = (Math.random() - 0.5) * randomness * Math.PI * 0.5;
            const finalRadius = radius + randomOffset;
            const finalAngle = angle + randomAngleOffset;

            positions[i3] = Math.cos(finalAngle) * finalRadius;
            positions[i3 + 1] = Math.sin(finalAngle) * finalRadius;
            positions[i3 + 2] = 0;

            // 随机偏移量和频率
            offsets[i] = Math.random() * 2 * Math.PI;
            frequencies[i] = 1.0 + (Math.random() - 0.5) * randomFrequency; // 随机频率

            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute("offset", new THREE.BufferAttribute(offsets, 1));
        geometry.setAttribute("frequency", new THREE.BufferAttribute(frequencies, 1)); // 添加频率属性
        return geometry;
    }

    getGeometry() {
        return this.currentGeometry;
    }
    onChangeConfig(fn: Function) {
        this.onChangeHanlders.push(fn);
    }
}
