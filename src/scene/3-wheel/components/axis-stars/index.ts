import { BufferGeometry, Float32BufferAttribute, Points } from "three";
import { scene, THREE } from "../../../../common/main";
import { createSceneWheelGui } from "../../wheel-gui";

const config = {
    pointSize: 3.,
    axisLength: 5.5,
    spacing: 0.02,
    color: "#9b9b9b",
};

export function createAxisStars() {
    const geometry = new BufferGeometry();
    
    // 创建ShaderMaterial
    const material = new THREE.ShaderMaterial({
        uniforms: {
            uPointSize: { value: config.pointSize },
            uColor: { value: new THREE.Color(config.color) },
            opacity: { value: 1.0 },
        },
        vertexShader: `
            uniform float uPointSize;
            
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mvPosition;
                
                // 根据距离计算点的大小
                float distance = length(mvPosition.xyz);
                gl_PointSize = uPointSize;
            }
        `,
        fragmentShader: `
            uniform vec3 uColor;
            uniform float opacity;
            void main() {
                gl_FragColor = vec4(uColor, opacity);
            }
        `,
        transparent: true,
    });

    // 创建顶点数组
    const vertices = [];

    // 在每个轴上生成均匀分布的点
    for (let axis = 0; axis < 3; axis++) {
        const totalLength = config.axisLength;
        const starPos = -totalLength / 2;
        const pointCount = Math.floor(totalLength / config.spacing);

        for (let i = 0; i < pointCount; i++) {
            const position = [0, 0, 0];
            const distance = starPos + i * config.spacing;
            // 确保点不会超出轴的范围
            if (Math.abs(distance) <= totalLength / 2) {
                position[axis] = distance;
                vertices.push(...position);
            }
        }
    }

    // 将顶点添加到几何体中
    geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));

    // 创建点对象
    const points = new Points(geometry, material);

    // 添加GUI控制
    const folder = createSceneWheelGui("wheel-axis-stars");
    folder.close(); // 默认收起面板
    folder.add(config, "pointSize", 0.01, 0.05).onChange((value) => {
        material.uniforms.uPointSize.value = value;
    });
    folder.add(config, "axisLength", 5, 20).onChange(() => {
        updateVertices();
    });
    folder.add(config, "spacing", 0.01, 0.2).onChange(() => {
        updateVertices();
    });

    folder.addColor(config, "color").onChange((value) => {
        material.uniforms.uColor.value.setStyle(value);
    });
    folder.open();

    // 更新顶点位置的函数
    function updateVertices() {
        const newVertices = [];
        for (let axis = 0; axis < 3; axis++) {
            const totalLength = config.axisLength;
            const starPos = -totalLength / 2;
            const pointCount = Math.floor(totalLength / config.spacing);

            for (let i = 0; i < pointCount; i++) {
                const position = [0, 0, 0];
                const distance = starPos + i * config.spacing;
                // 确保点不会超出轴的范围
                if (Math.abs(distance) <= totalLength / 2) {
                    position[axis] = distance;
                    newVertices.push(...position);
                }
            }
        }
        geometry.setAttribute("position", new Float32BufferAttribute(newVertices, 3));
        geometry.attributes.position.needsUpdate = true;
    }
    points.rotation.z = -0.2;
    points.name = 'axis-stars'
    return points;
}
