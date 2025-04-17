import {  THREE } from "@/common/main";
import { createSceneMoonGui } from "../../moon-gui";

const plane = new THREE.PlaneGeometry(1, 1);
const folder = createSceneMoonGui("moon-shadow");
const config = {
    positionZ: -0.01,
    positionX: .02,
    positionY: 0,
    scale: 0.5,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    color: "#575757",
};
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(config.color) },
    },
    transparent: true,
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,
    fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        void main() {
            float dist = length(vUv - vec2(0.5));
            float alpha = smoothstep(0.5, 0., dist);
            gl_FragColor = vec4(color, alpha);
        }
    `,
});
const mesh = new THREE.Mesh(plane, material);
mesh.scale.set(config.scale, config.scale, config.scale);
mesh.position.set(config.positionX, config.positionY, config.positionZ);
mesh.rotation.set(config.rotationX, config.rotationY, config.rotationZ);
material.uniforms.time.value = 0;

// GUI controls
folder.addColor({ color: config.color }, "color").onChange((value) => {
    material.uniforms.color.value.set(value);
});
folder.add(config, "scale", 0.1, 5).onChange((value) => {
    mesh.scale.set(value, value, value);
});
folder.add(config, "positionX", -5, 5).onChange((value) => {
    mesh.position.x = value;
});
folder.add(config, "positionY", -5, 5).onChange((value) => {
    mesh.position.y = value;
});
folder.add(config, "positionZ", -5, 5).onChange((value) => {
    mesh.position.z = value;
});
folder.add(config, "rotationX", 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.x = value;
});
folder.add(config, "rotationY", 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.y = value;
});
folder.add(config, "rotationZ", 0, Math.PI * 2).onChange((value) => {
    mesh.rotation.z = value;
});
folder.add({ opacity: 1 }, "opacity", 0, 1).onChange((value) => {
    material.opacity = value;
});

export default mesh