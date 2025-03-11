import "./style.css";
import "./common/index";
import { scene, camera, renderer, clock, THREE } from "./common/main";

const START_COUNTS = 1000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(START_COUNTS * 3);
const colors = new Float32Array(START_COUNTS * 3);
const offsets = new Float32Array(START_COUNTS); // 每个粒子的随机偏移量

for (let i = 0; i < START_COUNTS; i++) {
    const i3 = i * 3;

    // 生成圆环内的随机位置
    const angle = Math.random() * Math.PI * 2; // 随机角度
    const radius = 1 + Math.random() * (2 - 1); // 半径在1到2之间
    positions[i3] = Math.cos(angle) * radius; // x坐标
    positions[i3 + 1] = Math.sin(angle) * radius; // y坐标
    positions[i3 + 2] = 0; // z坐标保持为0（在XY平面上）

    // 淡蓝色颜色
    colors[i3] = 0.3; // R
    colors[i3 + 1] = 0.7; // G
    colors[i3 + 2] = 1.0; // B

    // 随机偏移量
    offsets[i] = Math.random() * 2 * Math.PI; // 0 到 2π 之间的随机偏移量
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
geometry.setAttribute("offset", new THREE.BufferAttribute(offsets, 1));

// 自定义着色器材质
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 1.0 },
        size: {
            value: 5.0,
        },
    },
    vertexShader: `
        uniform float size;
        attribute float offset;
        varying float vOffset;
        varying vec3 vColor; // 传递顶点颜色到片段着色器
        void main() {
            vOffset = offset;
            vColor = color; // 获取顶点颜色
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
        uniform float time;
        varying float vOffset;
        varying vec3 vColor; // 接收顶点颜色
        void main() {
            // 创建圆形点
            vec2 coord = gl_PointCoord - 0.5;
            float len = length(coord);
            if (len > 0.5) {
                discard; // 丢弃超出圆形范围的像素
            }
            
            float brightness = (sin(time + vOffset) + 1.0) / 2.0;
            gl_FragColor = vec4(vColor * brightness, 1.0);
        }
    `,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    vertexColors: true // 使用顶点颜色
});

const points = new THREE.Points(geometry, material);
scene.add(points);

function animate() {
    requestAnimationFrame(animate);

    // 更新着色器中的time变量来模拟闪烁效果
    material.uniforms.time.value = clock.getElapsedTime();

    renderer.render(scene, camera);
}

animate();