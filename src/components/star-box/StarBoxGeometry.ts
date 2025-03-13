import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { THREE } from "../../common/main";

export class StarBoxGeometry {
    geometryConfig = {
        starCounts: 1000,
        boxSize: 2,
        color: new THREE.Color(0.47, 0.19, 0.87),
        randomness: 0.2,
        blinkFrequency: 0.5,
        starSize: 0.02,
        minDistance: 5,
        maxDistance: 20
    };
    currentGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes> | null = null;
    onChangeHanlders: Function[] = [];

    constructor(
        starBoxGUI: GUI,
        geometryConfig?: {
            starCounts?: number;
            boxSize?: number;
            color?: THREE.Color;
            randomness?: number;
            blinkFrequency?: number;
            starSize?: number;
            minDistance?: number;
            maxDistance?: number;
        }
    ) {
        this.geometryConfig = {
            ...this.geometryConfig,
            ...geometryConfig,
        };
        this.currentGeometry = this.createGeometry();

        const update = () => {
            const newGeometry = this.createGeometry();
            this.currentGeometry?.dispose();
            this.currentGeometry = newGeometry;
            this.onChangeHanlders.forEach((fn) => {
                fn(newGeometry);
            });
        };

        update();
        starBoxGUI.addColor(this.geometryConfig, 'color').onChange(update);
        starBoxGUI.add(this.geometryConfig, "boxSize", 1, 10).name("盒子大小").onChange(update);
        starBoxGUI.add(this.geometryConfig, "starCounts", 0, 3000).name("星星数量").onChange(update);
        starBoxGUI.add(this.geometryConfig, "randomness", 0, 1).name("位置随机性").onChange(update);
        starBoxGUI.add(this.geometryConfig, "blinkFrequency", 0, 2).name("闪烁频率").onChange(update);
        starBoxGUI.add(this.geometryConfig, "starSize", 0.001, 0.1).name("基础星星大小").onChange(update);
        starBoxGUI.add(this.geometryConfig, "minDistance", 1, 10).name("最小可见距离").onChange(update);
        starBoxGUI.add(this.geometryConfig, "maxDistance", 10, 50).name("最大可见距离").onChange(update);
    }

    createGeometry() {
        const { starCounts, boxSize, color, randomness, blinkFrequency } = this.geometryConfig;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCounts * 3);
        const colors = new Float32Array(starCounts * 3);
        const offsets = new Float32Array(starCounts);
        const frequencies = new Float32Array(starCounts);

        for (let i = 0; i < starCounts; i++) {
            const i3 = i * 3;

            // 在盒子内随机生成位置
            positions[i3] = (Math.random() - 0.5) * boxSize * (1 + Math.random() * randomness);
            positions[i3 + 1] = (Math.random() - 0.5) * boxSize * (1 + Math.random() * randomness);
            positions[i3 + 2] = (Math.random() - 0.5) * boxSize * (1 + Math.random() * randomness);

            // 随机偏移量和频率
            offsets[i] = Math.random() * 2 * Math.PI;
            frequencies[i] = 1.0 + (Math.random() - 0.5) * blinkFrequency;

            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute("offset", new THREE.BufferAttribute(offsets, 1));
        geometry.setAttribute("frequency", new THREE.BufferAttribute(frequencies, 1));
        return geometry;
    }

    getGeometry() {
        return this.currentGeometry;
    }

    onChangeConfig(fn: Function) {
        this.onChangeHanlders.push(fn);
    }
}