import { gui } from "@/common/gui";
import { scene, THREE } from "@/common/main";

// 创建配置对象
const config = {
    width: 10,
    height: 10,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    noiseStrength: 1.0,
    animationSpeed: 0.023,
    opacity: .45
};

// 创建几何体
const geometry = new THREE.PlaneGeometry(config.width, config.height);
// 创建材质
const material = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
        time: { value: 0.0 },
        frequency: { value: 8.0 }, // 频率
        noiseStrength: { value: config.noiseStrength }, // 噪声强度
        color1: { value: new THREE.Color('#8d35d4') }, // 深空颜色1
        color2: { value: new THREE.Color('#4c0080') }, // 深空颜色2
        opacity: { value: config.opacity }, // 透明度
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
      uniform float noiseStrength;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform float opacity;
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
          float n = noise(st + time * 0.1) * noiseStrength; // 动态噪音
          vec3 color = mix(color1, color2, n); // 颜色渐变
          gl_FragColor = vec4(color, opacity);
      }
    `,
});

const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(config.positionX, config.positionY, config.positionZ);
scene.add(mesh);

// 添加 GUI 控制
const folder = gui.addFolder('柏林噪声设置');

// 大小控制
folder.add(config, 'width', 1, 10).onChange(() => {
    mesh.geometry.dispose();
    mesh.geometry = new THREE.PlaneGeometry(config.width, config.height);
}).name('宽度');

folder.add(config, 'height', 1, 10).onChange(() => {
    mesh.geometry.dispose();
    mesh.geometry = new THREE.PlaneGeometry(config.width, config.height);
}).name('高度');

// 位置控制
folder.add(config, 'positionX', -5, 5).onChange(() => {
    mesh.position.x = config.positionX;
}).name('X轴位置');

folder.add(config, 'positionY', -5, 5).onChange(() => {
    mesh.position.y = config.positionY;
}).name('Y轴位置');

folder.add(config, 'positionZ', -5, 5).onChange(() => {
    mesh.position.z = config.positionZ;
}).name('Z轴位置');

// 效果控制
folder.add(material.uniforms.frequency, 'value', 1.0, 10.0).name('频率');
folder.add(material.uniforms.noiseStrength, 'value', 0.1, 2.0).name('噪声强度');
folder.add(config, 'animationSpeed', 0.001, 0.1).name('动画速度');

// 透明度控制
folder.add(config, 'opacity', 0, 1).onChange(() => {
    material.uniforms.opacity = { value: config.opacity };
}).name('透明度');

// 颜色控制
folder.addColor({ color1: material.uniforms.color1.value.getStyle() }, 'color1')
   .onChange(value => material.uniforms.color1.value.set(value))
   .name('颜色 1');
folder.addColor({ color2: material.uniforms.color2.value.getStyle() }, 'color2')
   .onChange(value => material.uniforms.color2.value.set(value))
   .name('颜色 2');

folder.open();

// 动画更新
function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += config.animationSpeed; // 使用可配置的动画速度
}
animate();
