import "./style.css";
import "./common/index";
import { scene, camera, renderer, clock, THREE } from "./common/main";

const START_COUNTS = 1000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(START_COUNTS * 3);
const colors = new Float32Array(START_COUNTS * 3);

for (let i = 0; i < START_COUNTS; i++) {
    const i3 = i * 3;

    // 生成圆环内的随机位置
    const angle = Math.random() * Math.PI * 2; // 随机角度
    const radius = 1 + Math.random() * (2 - 1); // 半径在1到2之间
    positions[i3] = Math.cos(angle) * radius; // x坐标
    positions[i3 + 1] = Math.sin(angle) * radius; // y坐标
    positions[i3 + 2] = 0; // z坐标保持为0（在XY平面上）

    // 随机颜色
    colors[i3] = 0.1 + 0.9 * Math.random(); // 稍微偏白的颜色
    colors[i3 + 1] = 0.1 + 0.9 * Math.random();
    colors[i3 + 2] = 0.8 + 0.2 * Math.random(); // 稍微偏蓝的颜色
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

// 自定义着色器材质
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 1.0 },
        color: { value: new THREE.Color(0xffffff) }
    },
    vertexShader: `
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 1.5;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
        uniform float time;
        uniform vec3 color;
        void main() {
            float brightness = (sin(time + gl_FragCoord.x * 0.01) + sin(time + gl_FragCoord.y * 0.01)) / 2.0;
            gl_FragColor = vec4(color * brightness, 1.0);
        }
    `,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true
});

const points = new THREE.Points(geometry, material);
scene.add(points);

function animate() {
    requestAnimationFrame(animate);

    // 更新着色器中的time变量来模拟闪烁效果
    material.uniforms.time.value += 0.05;

    renderer.render(scene, camera);
}

animate();