import { THREE } from '@/common/main';
import { createSceneMoonGui } from '../moon-gui';
import { GIMSceneItem } from '@/type';
import gsap from 'gsap';

// 创建 GUI 文件夹
const folder = createSceneMoonGui('moon-stars');

// 定义盒子尺寸和星星数量
const boxSize = 20;
const starCount = 2000;

// 创建 BufferGeometry 并随机分布星星
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(starCount * 3);
const sizes = new Float32Array(starCount);
for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * boxSize; // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * boxSize; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * boxSize; // z
    sizes[i] = Math.random() * 2.0 + 0.5; // 随机大小 0.5-2.5
}
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

const material = new THREE.ShaderMaterial({
    uniforms: {
        opacity: { value: 1.0 },
        uTime: { value: 0 },
        uStarSize: { value: 4.55 },
        uStarColor: { value: new THREE.Color('#75d1ff') },
        uTwinkleSpeed: { value: 1.0 },
        uTwinkleIntensity: { value: 0.071 },
    },
    vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uStarSize;
        uniform float uTwinkleIntensity;
        attribute float size;
        varying float vBrightness;
        
        // 简单的伪随机函数
        float random(vec3 scale, float seed) {
            return fract(sin(dot(gl_Position.xyz + seed, scale)) * 43758.5453 + seed);
        }
        
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // 基于位置和时间的闪烁效果
            float randomOffset = random(vec3(12.9898, 78.233, 37.719), length(position));
            float twinkle = sin(uTime + randomOffset * 100.0) * 0.5 + 0.5;
            vBrightness = mix(1.0, twinkle, uTwinkleIntensity);
            
            gl_PointSize = uStarSize * size * vBrightness;
        }
    `,
    fragmentShader: /* glsl */ `
        uniform vec3 uStarColor;
        uniform float opacity;
        varying float vBrightness;
        
        void main() {
            float distance = length(gl_PointCoord - vec2(0.5));
            float alpha = 1.0 - distance * 2.0;
            
            // 应用亮度变化
            vec3 finalColor = uStarColor * vBrightness;
            gl_FragColor = vec4(finalColor, alpha * opacity);
        }
    `,
    transparent: true,
});

// 创建 Mesh 并添加到场景
const mesh = new THREE.Points(geometry, material);

// 添加 GUI 控制
folder.add(material.uniforms.uStarSize, 'value', 1, 15.0).name('基础星星大小');
folder.add(material.uniforms.uTwinkleSpeed, 'value', 0.1, 5.0).name('闪烁速度');
folder.add(material.uniforms.uTwinkleIntensity, 'value', 0, 1.0).name('闪烁强度');
folder
    .addColor({ color: '#ffffff' }, 'color')
    .name('星星颜色')
    .onChange((value) => {
        material.uniforms.uStarColor.value.setStyle(value);
    });

// 让盒子绕 x 轴旋转
function animate() {
    // 更新时间，用于闪烁效果
    material.uniforms.uTime.value += 0.01 * material.uniforms.uTwinkleSpeed.value;
    // 缓慢旋转
    mesh.rotation.x += 0.0001;
    mesh.rotation.y += 0.0002;
    requestAnimationFrame(animate);
}
animate();

export const GIMSceneItemMoonStars: GIMSceneItem = {
    name: 'GIMSceneItemMoonStars',
    item: mesh,
    opacityShow(ease, duration, opacity) {
        mesh.material.uniforms.opacity = { value: 0 };
        gsap.to(mesh.material.uniforms.opacity, {
            value: opacity,
            duration: duration,
            ease: ease,
        });
    },
    opacityHide(ease, duration, _opacity) {
        gsap.to(mesh.material.uniforms.opacity, {
            value: 0,
            duration: duration,
            ease: ease,
        });
    },
};
