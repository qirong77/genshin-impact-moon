import { THREE } from "@/common/main";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
export function createSatellitesBackground(gui:GUI) {
    const folder = gui.addFolder("Satellites-Background");
    const vertexShader = /* glsl */ `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
    const fragmentShader = /* glsl */ `
    varying vec2 vUv;
    uniform float time;
    uniform float uStarSize;
    uniform float uStarCount;
    uniform float uTwinkleSpeed;
    uniform float uTwinkleIntensity;
    uniform vec3 uStarColor;
    uniform float uMovementRange;

    // 简单的伪随机函数
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    // 星星函数，根据位置和时间生成星星
    float star(vec2 uv, float index) {
        // 为每个星星生成一个随机位置和速度
        float randomX = random(vec2(index, 0.5));
        float randomY = random(vec2(index, 0.8));
        float speedX = random(vec2(index, 0.2)) * 2.0 - 1.0;
        float speedY = random(vec2(index, 0.9)) * 2.0 - 1.0;

        // 添加基于时间的移动
        float timeOffset = time * (0.2 + 0.1 * random(vec2(index, 0.4)));
        float movementX = sin(timeOffset * speedX + randomX * 6.28) * uMovementRange;
        float movementY = cos(timeOffset * speedY + randomY * 6.28) * uMovementRange;

        // 计算星星的位置
        vec2 starPos = vec2(randomX, randomY) + vec2(movementX, movementY);

        // 计算星星的大小和基础亮度
        float size = uStarSize * (0.5 + 0.5 * random(vec2(index, 0.3)));
        float baseBrightness = 0.8 + 0.2 * random(vec2(index, 0.7));

        // 添加闪烁效果
        float twinkleSpeed = uTwinkleSpeed * (1.0 + random(vec2(index, 0.6)));
        float twinkle = sin(time * twinkleSpeed + index * 6.28) * 0.5 + 0.5;
        float brightness = baseBrightness * (1.0 - uTwinkleIntensity + uTwinkleIntensity * twinkle);

        // 计算星星的形状
        float dist = length(uv - starPos);
        float shape = smoothstep(size, size * 0.9, dist);

        // 返回星星的亮度
        return shape * brightness;
    }

    void main() {
        vec2 uv = vUv;
        float stars = 0.0;

        // 生成多个星星
        for (float i = 0.0; i < uStarCount; i++) {
            stars += star(uv, i);
        }

        // 输出最终颜色
        gl_FragColor = vec4(uStarColor * stars, 1.0);
    }
`;

    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            uStarSize: { value: 0.005 },
            uStarCount: { value: 50.0 },
            uTwinkleSpeed: { value: 3.0 },
            uTwinkleIntensity: { value: 0.3 },
            uStarColor: { value: new THREE.Color("#ffffff") },
            uMovementRange: { value: 0.8 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
    });

    // 添加GUI控制
    folder.add(material.uniforms.uStarSize, "value", 0.001, 0.02).name("星星大小");
    folder.add(material.uniforms.uStarCount, "value", 10, 200).name("星星数量");
    folder.add(material.uniforms.uTwinkleSpeed, "value", 0.1, 10.0).name("闪烁速度");
    folder.add(material.uniforms.uTwinkleIntensity, "value", 0, 1.0).name("闪烁强度");
    folder.add(material.uniforms.uMovementRange, "value", 0, 1.0).name("移动范围");
    folder
        .addColor({ color: "#ffffff" }, "color")
        .name("星星颜色")
        .onChange((value) => material.uniforms.uStarColor.value.setStyle(value));

    const mesh = new THREE.Mesh(geometry, material);
    // 动画循环
    function animate() {
        requestAnimationFrame(animate);
        material.uniforms.time.value += 0.01;
    }
    animate();
    mesh.position.z = -0.1;
    return mesh;
}
