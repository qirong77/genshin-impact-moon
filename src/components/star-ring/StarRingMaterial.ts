import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { camera, clock, renderer, scene, THREE } from "../../common/main";
import { IStarRingGeometryConfig } from "./StarRingGeometry";

export function createStarMateril(starRingGUI: GUI,config:IStarRingGeometryConfig) {
    const uniforms = {
        time: { value: 1.0 },
        size: {
            value: 12.5,
        },
        opacity: { value: 1.0 }, // 透明度
        glowIntensity: { value: 2.5 }, // 光晕强度
        glowSpeed: { value: 1.73 }, // 光晕动画速度
        fixedGlowRadius: { value: 0.08 }, // 固定亮度范围
        gradientGlowRadius: { value: 0.15 }, // 渐变范围
    };
    Reflect.ownKeys(config).forEach((key) => {
        // @ts-ignore
        uniforms[key] = { value: config[key] };
    });
    const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: /* glsl */`
            uniform float size;
            attribute float offset;
            attribute float frequency;
            varying float vOffset;
            varying float vFrequency;
            varying vec3 vColor; // 传递顶点颜色到片段着色器
            void main() {
                vOffset = offset;
                vFrequency = frequency;
                vColor = color; // 获取顶点颜色
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size;
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: /* glsl */`
            uniform float time;
            uniform float glowIntensity;
            uniform float glowSpeed;
            uniform float fixedGlowRadius;
            uniform float gradientGlowRadius;
            uniform float opacity;
            varying float vOffset;
            varying float vFrequency;
            varying vec3 vColor; // 接收顶点颜色
            void main() {
                // 创建圆形点
                vec2 coord = gl_PointCoord - 0.5;
                float len = length(coord);
                
                // 固定亮度范围
                float fixedGlow = step(len, fixedGlowRadius);
                
                // 渐变范围（从内到外逐渐变亮）
                float gradientGlow = 1.0 - smoothstep(fixedGlowRadius, fixedGlowRadius + gradientGlowRadius, len);
                
                // 使用独立频率的光晕动画
                float glowAnimation = sin(time * glowSpeed * vFrequency + vOffset) * 0.5 + 0.5;
                gradientGlow *= glowAnimation * glowIntensity;
                
                if (len > 0.5) {
                    discard; // 丢弃超出圆形范围的像素
                }
                
                // 使用独立频率的亮度动画
                float brightness = (sin(time * vFrequency + vOffset) + 1.0) / 2.0;
                vec3 finalColor = vColor * brightness * (fixedGlow + gradientGlow);
                gl_FragColor = vec4(finalColor, opacity);
            }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: true,
        vertexColors: true, // 使用顶点颜色
    });
    starRingGUI.add(uniforms.opacity,'value', 0, 1).name('opacity');
    starRingGUI.add(uniforms.size,'value', 0, 100).name('size');
    starRingGUI.add(uniforms.glowIntensity,'value', 0, 10).name('glowIntensity');
    starRingGUI.add(uniforms.glowSpeed,'value', 0, 10).name('glowSpeed');
    starRingGUI.add(uniforms.fixedGlowRadius,'value', 0, 10).name('fixedGlowRadius');
    starRingGUI.add(uniforms.gradientGlowRadius,'value', 0, 10).name('gradientGlowRadius');
    function animate() {
        requestAnimationFrame(animate);
        // 更新着色器中的time变量来模拟闪烁效果
        material.uniforms.time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
    }

    animate();
    return material;
}
