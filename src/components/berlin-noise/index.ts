import { gui } from '@/common/gui';
import * as THREE from 'three';

// 创建几何体
const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 10000; i++) {
  const x = THREE.MathUtils.randFloatSpread(200);
  const y = THREE.MathUtils.randFloatSpread(200);
  const z = THREE.MathUtils.randFloatSpread(200);
  vertices.push(x, y, z);
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

// 创建材质
const material = new THREE.PointsMaterial({
  size: 1.5,
  color: 0xffffff,
  transparent: true,
  opacity: 0.8,
});

// 创建点云
const points = new THREE.Points(geometry, material);

// 添加柏林噪音效果
const plane = new THREE.PlaneGeometry(200, 200, 200, 200);
const noiseMaterial = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    void main() {
      float noise = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
      gl_FragColor = vec4(vec3(noise * 0.5 + 0.5), 1.0);
    }
  `,
});

const params = {
  pointSize: 1.5,
  opacity: 0.8,
};
gui.add(params, 'pointSize', 0.1, 5).onChange((value) => {
  material.size = value;
});
gui.add(params, 'opacity', 0.1, 1).onChange((value) => {
  material.opacity = value;
});

// 将点云和噪音平面添加到场景
const scene = new THREE.Scene();
scene.add(points);
scene.add(new THREE.Mesh(plane, noiseMaterial));

// 动画更新
function animate() {
  requestAnimationFrame(animate);
  noiseMaterial.uniforms.time.value += 0.01;
}
animate();