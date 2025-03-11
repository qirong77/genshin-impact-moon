import "./style.css";
import "./common/index";
import { scene, camera, renderer, clock, THREE } from "./common/main";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

const START_COUNTS = 1000;
let geometry = new THREE.BufferGeometry();
let positions = new Float32Array(START_COUNTS * 3);
let colors = new Float32Array(START_COUNTS * 3);
let offsets = new Float32Array(START_COUNTS); // 每个粒子的随机偏移量

// 初始化星星位置、颜色和偏移量
function initStars(innerRadius, outerRadius) {
    for (let i = 0; i < START_COUNTS; i++) {
        const i3 = i * 3;

        // 生成圆环内的随机位置
        const angle = Math.random() * Math.PI * 2; // 随机角度
        const radius = innerRadius + Math.random() * (outerRadius - innerRadius); // 半径在指定范围内
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
}

// 初始圆环半径范围
const initialInnerRadius = 1;
const initialOuterRadius = 2;
initStars(initialInnerRadius, initialOuterRadius);

// 自定义着色器材质
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 1.0 },
        size: {
            value: 5.0,
        },
        glowIntensity: { value: 1.0 }, // 光晕强度
        glowSpeed: { value: 0.5 } // 光晕动画速度
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
        uniform float glowIntensity;
        uniform float glowSpeed;
        varying float vOffset;
        varying vec3 vColor; // 接收顶点颜色
        void main() {
            // 创建圆形点
            vec2 coord = gl_PointCoord - 0.5;
            float len = length(coord);
            
            // 计算光晕效果
            float glow = 1.0 - smoothstep(0.0, 0.5, len);
            float glowAnimation = sin(time * glowSpeed + vOffset) * 0.5 + 0.5;
            glow *= glowAnimation * glowIntensity;
            
            if (len > 0.5) {
                discard; // 丢弃超出圆形范围的像素
            }
            
            float brightness = (sin(time + vOffset) + 1.0) / 2.0;
            vec3 finalColor = vColor * brightness * glow;
            gl_FragColor = vec4(finalColor, 1.0);
        }
    `,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    vertexColors: true // 使用顶点颜色
});

const points = new THREE.Points(geometry, material);
scene.add(points);

// 创建GUI控制器
const gui = new GUI();
const controls = {
    innerRadius: initialInnerRadius,
    outerRadius: initialOuterRadius,
    starSize: material.uniforms.size.value,
    glowIntensity: material.uniforms.glowIntensity.value,
    glowSpeed: material.uniforms.glowSpeed.value,
    resetStars: function() {
        // 重新初始化星星位置
        positions = new Float32Array(START_COUNTS * 3);
        colors = new Float32Array(START_COUNTS * 3);
        offsets = new Float32Array(START_COUNTS);
        initStars(controls.innerRadius, controls.outerRadius);
        geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute("offset", new THREE.BufferAttribute(offsets, 1));
        points.geometry = geometry;
    }
};

// 添加控制器
gui.add(controls, 'innerRadius', 0, 5).onChange(() => {
    controls.resetStars();
});
gui.add(controls, 'outerRadius', 0, 10).onChange(() => {
    controls.resetStars();
});
gui.add(controls, 'starSize', 1, 20).onChange(value => {
    material.uniforms.size.value = value;
});
gui.add(controls, 'glowIntensity', 0, 2).onChange(value => {
    material.uniforms.glowIntensity.value = value;
});
gui.add(controls, 'glowSpeed', 0, 2).onChange(value => {
    material.uniforms.glowSpeed.value = value;
});
gui.add(controls, 'resetStars');

function animate() {
    requestAnimationFrame(animate);

    // 更新着色器中的time变量来模拟闪烁效果
    material.uniforms.time.value = clock.getElapsedTime();

    renderer.render(scene, camera);
}

animate();