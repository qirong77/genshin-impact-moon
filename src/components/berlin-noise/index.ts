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

      // 柏林噪音函数
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(a, b, u.x) +
                 (c - a) * u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
      }

      void main() {
          vec2 st = vUv * 3.0; // 放大噪音图案
          float n = noise(st + time * 0.1); // 动态噪音
          gl_FragColor = vec4(vec3(n), 1.0);
      }
    `,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// 动画更新
function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += 0.01; // 更新时间
}
animate();
