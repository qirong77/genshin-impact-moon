import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { THREE } from "../../common/main";
export interface IStarRingGeometryConfig {
    starCounts?: number;
    innerRadius?: number;
    outerRadius?: number;
    color?: THREE.Color;
    opacity?: number;
    randomness?: number; // 添加随机性参数
    randomFrequency?: number; // 添加随机频率参数
}
export class StarRingGeometry {
    geometryConfig = {
        starCounts: 1500,
        innerRadius: 1,
        outerRadius: 2,
        color: new THREE.Color(0.47, 0.19, 0.87),
        opacity: 1,
        randomness: 0.5,
        randomFrequency: 0.8,
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0
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
        starRingGUI.add(this.geometryConfig, "starCounts", 0, 8000).onChange(update);
        starRingGUI.add(this.geometryConfig, "randomness", 0, 1).name("位置随机性").onChange(update);
        starRingGUI.add(this.geometryConfig, "randomFrequency", 0, 2).name("闪烁频率随机性").onChange(update);

        // 添加位置控制
        const positionFolder = starRingGUI.addFolder('位置控制');
        positionFolder.add(this.geometryConfig, "positionX", -10, 10).name("X轴位置").onChange(update);
        positionFolder.add(this.geometryConfig, "positionY", -10, 10).name("Y轴位置").onChange(update);
        positionFolder.add(this.geometryConfig, "positionZ", -10, 10).name("Z轴位置").onChange(update);

        // 添加旋转控制
        const rotationFolder = starRingGUI.addFolder('旋转控制');
        rotationFolder.add(this.geometryConfig, "rotationX", -Math.PI, Math.PI).name("X轴旋转").onChange(update);
        rotationFolder.add(this.geometryConfig, "rotationY", -Math.PI, Math.PI).name("Y轴旋转").onChange(update);
        rotationFolder.add(this.geometryConfig, "rotationZ", -Math.PI, Math.PI).name("Z轴旋转").onChange(update);
    }
    createGeometry() {
        const { starCounts, innerRadius, outerRadius, color, randomness, randomFrequency, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = this.geometryConfig;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCounts * 3);
        const colors = new Float32Array(starCounts * 3);
        const offsets = new Float32Array(starCounts);
        const frequencies = new Float32Array(starCounts);

        // 创建旋转矩阵
        const rotationMatrix = new THREE.Matrix4();
        rotationMatrix.makeRotationFromEuler(new THREE.Euler(rotationX, rotationY, rotationZ));

        for (let i = 0; i < starCounts; i++) {
            const i3 = i * 3;

            const angle = Math.random() * Math.PI * 2;
            const radius = innerRadius + Math.random() * (outerRadius - innerRadius);

            const randomOffset = (Math.random() - 0.5) * randomness * (outerRadius - innerRadius);
            const randomAngleOffset = (Math.random() - 0.5) * randomness * Math.PI * 0.5;
            const finalRadius = radius + randomOffset;
            const finalAngle = angle + randomAngleOffset;

            // 计算基础位置
            const basePosition = new THREE.Vector3(
                Math.cos(finalAngle) * finalRadius,
                Math.sin(finalAngle) * finalRadius,
                0
            );

            // 应用旋转
            basePosition.applyMatrix4(rotationMatrix);

            // 应用位移
            positions[i3] = basePosition.x + positionX;
            positions[i3 + 1] = basePosition.y + positionY;
            positions[i3 + 2] = basePosition.z + positionZ;

            offsets[i] = Math.random() * 2 * Math.PI;
            frequencies[i] = 1.0 + (Math.random() - 0.5) * randomFrequency;

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
