import './style.css';
import './common/index';
import './scene/4-Nod-Krai/index';
import { gui } from './common/gui';
import { orbitCOntroler } from './common/oribtControls';
import { sceneMoon } from './scene/2-moon/index';
import { sceneMask } from './scene/1-mask';
import { sceneWheel } from './scene/3-wheel';
import { sceneNext } from './scene/scene-next/scene-next';
import gsap from 'gsap';
import {  camera,  } from './common/main';
import { MoonEvent } from './event';
import { cameraAnimation } from './scene/cameraAnimation';
const isProd = import.meta.env.PROD;
if (isProd) {
    gui.destroy();
    orbitCOntroler.dispose();
}
sceneMask.show();
sceneMask.onClick(() => {
    const tl = gsap.timeline();
    const beforeCameraPosition = camera.position.clone();
    tl.to(camera.position, {
        z: beforeCameraPosition.z + 1,
        duration: 2,
        ease: 'none',
    }).to(camera.position, {
        z: beforeCameraPosition.z,
        duration: 5,
        ease: 'none',
    });
    setTimeout(() => {
        sceneNext.show();
        sceneNext.onClick(() => {
            sceneNext.hide();
            sceneMoon.dispear();
            setTimeout(() => {
                sceneWheel.show();
                setTimeout(() => {
                    cameraAnimation.animate();
                }, 12000);
            }, 2000);
        });
    }, 8000);
    sceneMoon.show();
});

MoonEvent.addEventListener('custom-solar-animate', (e) => {
    cameraAnimation.stop();
});
MoonEvent.addEventListener('custom-solar-reset', (e) => {
    setTimeout(() => {
        cameraAnimation.animate();
    }, 5000);
});
