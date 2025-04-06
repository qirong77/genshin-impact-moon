import { THREE } from "@/common/main";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import gsap from "gsap";
import debounce from "debounce";
export function createNodeKrai(gui: GUI, texturePath: string) {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(texturePath);
    const BorderNormalColor = new THREE.Color("#c9c5c5");
    const BackGroundNormalColor = new THREE.Color("#120e16");
    const BorderHighlightColor = new THREE.Color("#f5f5f5");
    const BackGroundHighlightColor = new THREE.Color("black");
    const material = new THREE.ShaderMaterial({
        transparent: false,
        uniforms: {
            u_time: { value: 0 },
            u_borderWidth: { value: 0.01 },
            u_borderColor: { value: BorderNormalColor },
            u_borderSmoothness: { value: 0.01 },
            u_borderRadius: { value: 0.1 },
            u_texture: { value: texture },
            u_rhombusSize: { value: 0.1 },
            u_rhombusOffset: { value: 0.9 },
            u_backgroundColor: { value: BackGroundNormalColor },
        },
        vertexShader: /* glsl */ `
        varying vec2 v_uv;
        uniform float u_time;
        void main(){
            v_uv = uv;
            vec4 modelPosition = modelMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * viewMatrix * modelPosition;
        }
        `,
        fragmentShader: /* glsl */ `
        precision lowp float;
        varying vec2 v_uv;
        uniform sampler2D u_texture;
        uniform float u_time;
        uniform float u_borderWidth;
        uniform vec3 u_borderColor;
        uniform float u_borderSmoothness;
        uniform float u_borderRadius;
        uniform float u_rhombusSize;
        uniform float u_rhombusOffset;
        uniform vec3 u_backgroundColor;
    
        float rhombusSDF(vec2 st) {
            float x = abs(st.x);
            float y = abs(st.y);
            bool isInside = y < (-1. * x + u_rhombusSize);
            return isInside ? 0.0 : 1.0;
        }
    
        // 计算圆形SDF
        float circleSDF(vec2 st, float radius) {
            return length(st) - radius;
        }
    
        void main(){
            vec2 st = v_uv;
            st = st * 2.0 - 1.0;  // 将坐标范围调整为[-1,1]
            
            // 计算圆形边框
            float radius = 1.0 - u_borderRadius;
            float circleDist = circleSDF(st, radius);
            
            // 边框内外判断
            bool isInBorder = abs(circleDist) < u_borderWidth;
            
            // 平滑边框
            float borderMask = 1.0 - smoothstep(0.0, u_borderSmoothness, abs(circleDist) - u_borderWidth);
            
            // 计算四个菱形指针的位置
            vec2 rhombusPositions[4];
            rhombusPositions[0] = vec2(0.0, u_rhombusOffset);  // 上
            rhombusPositions[1] = vec2(0.0, -u_rhombusOffset); // 下
            rhombusPositions[2] = vec2(u_rhombusOffset, 0.0);  // 右
            rhombusPositions[3] = vec2(-u_rhombusOffset, 0.0); // 左
            
            // 判断是否在菱形内
            bool isInRhombus = false;
            for(int i = 0; i < 4; i++) {
                vec2 rhombusSt = st - rhombusPositions[i];
                float rhombusDist = rhombusSDF(rhombusSt);
                if(rhombusDist < 0.01) {
                    isInRhombus = true;
                    break;
                }
            }
            
            // 应用颜色
            vec4 text_color = texture2D(u_texture, v_uv);
            
            // 如果在边框或菱形内，直接返回边框颜色
            if(isInBorder || isInRhombus) {
                gl_FragColor = vec4(u_borderColor, 1.0);
                return;
            }
            
            // 如果在圆外，返回透明
            if(circleDist > 0.0) {
                discard; // 丢弃圆形外的片元
                gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
                return;
            }
            
            // 在圆内，根据纹理透明度决定显示纹理或背景色
            if(text_color.a < 0.2) {
                gl_FragColor = vec4(u_backgroundColor, 1.0);
                return;
            }
            
            gl_FragColor = text_color;
        }
        `,

        blending: THREE.AdditiveBlending,
    });
    const plane = new THREE.PlaneGeometry(0.2, 0.2);
    const mesh = new THREE.Mesh(plane, material);
    const folder = gui.addFolder("texture-border");
    folder.add(material.uniforms.u_borderWidth, "value", 0.01, 0.1, 0.01).name("边框宽度");
    folder.add(material.uniforms.u_borderSmoothness, "value", 0.001, 0.05, 0.001).name("边框平滑度");
    folder.add(material.uniforms.u_borderRadius, "value", 0, 0.5, 0.01).name("圆角半径");
    folder.add(material.uniforms.u_rhombusSize, "value", 0.05, 0.2, 0.01).name("菱形大小");
    folder.add(material.uniforms.u_rhombusOffset, "value", 0.1, 2.5, 0.01).name("菱形位置");
    folder.addColor(material.uniforms.u_borderColor, "value").name("边框颜色");
    folder.addColor(material.uniforms.u_backgroundColor, "value").name("背景颜色");
    function highlight() {
        material.uniforms.u_borderColor.value = BorderHighlightColor;
        material.uniforms.u_backgroundColor.value = BackGroundHighlightColor;
        gsap.to(mesh.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.0, ease: "power2.inOut" });
    }

    function unhighlight() {
        material.uniforms.u_borderColor.value = BorderNormalColor;
        material.uniforms.u_backgroundColor.value = BackGroundNormalColor;
        gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.0, ease: "power2.inOut" });
    }

    return {
        mesh,
        highlight: debounce(highlight, 100),
        unhighlight: debounce(unhighlight, 100),
    };
}
