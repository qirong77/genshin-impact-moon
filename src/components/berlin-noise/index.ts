import { gui } from "@/common/gui";
import { scene, THREE } from "@/common/main";

// 创建几何体
const geometry = new THREE.PlaneGeometry();
// 创建材质
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0.0 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float time;
      varying vec2 vUv;
      void main() {
        float noise = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
        gl_FragColor = vec4(vec3(0.5), 1.0);
      }
    `,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// 动画更新
function animate() {
    requestAnimationFrame(animate);
}
animate();
