import { gui } from "@/common/gui";
import { scene, THREE } from "@/common/main";

// 创建几何体
const geometry = new THREE.PlaneGeometry();
// 创建材质
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0.0 },
        frequency: { value: 3.0 }, // 频率
        color1: { value: new THREE.Color(0x000033) }, // 深空颜色1
        color2: { value: new THREE.Color(0x000080) }, // 深空颜色2
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
      uniform float frequency;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;

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
          vec2 st = vUv * frequency; // 使用频率参数
          float n = noise(st + time * 0.1); // 动态噪音
          vec3 color = mix(color1, color2, n); // 颜色渐变
          gl_FragColor = vec4(color, 1.0);
      }
    `,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 添加 GUI 控制
gui.add(material.uniforms.frequency, 'value', 1.0, 10.0).name('Frequency');
gui.addColor({ color1: material.uniforms.color1.value.getStyle() }, 'color1')
   .onChange(value => material.uniforms.color1.value.set(value))
   .name('Color 1');
gui.addColor({ color2: material.uniforms.color2.value.getStyle() }, 'color2')
   .onChange(value => material.uniforms.color2.value.set(value))
   .name('Color 2');

// 动画更新
function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += 0.01; // 更新时间
}
animate();
