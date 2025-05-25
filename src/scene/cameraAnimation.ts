import { basePosition, camera, clock, renderer, scene } from '@/common/main';
import gsap from 'gsap';
let canCameraAnimate = true;
function animationCamera() {
    if (!canCameraAnimate) return;
    requestAnimationFrame(animationCamera);
    const time = clock.getElapsedTime();
    // 添加相机轻微摇摆动画
    const amplitude = 0.1; // 振幅
    const frequency = 0.2; // 频率
    camera.position.x = basePosition.x + Math.sin(time * frequency) * amplitude;
    camera.position.y = basePosition.y + Math.cos(time * frequency) * amplitude;
    camera.position.z = basePosition.z + Math.sin(time * frequency * 0.5) * amplitude * 0.5;
    renderer.render(scene, camera);
}

function animate() {
    canCameraAnimate = true;
    gsap.to(camera.position, {
        x: basePosition.x,
        y: basePosition.y,
        z: basePosition.z,
        duration: 3,
        ease: 'none',
        onComplete: () => {
            animationCamera();
        },
    });
}
function stop() {
    canCameraAnimate = false;
}

export const cameraAnimation = {
    animate,
    stop,
};
