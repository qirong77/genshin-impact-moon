import { scene } from '@/common/main';
import { sceneWheelBackground } from './groups/background';
import { sceneWheelNodeKrai } from './groups/node-krai';
import { sceneWheelSolar } from './groups/solar';
import gsap from 'gsap';
export const sceneWheel = {
    sceneWheelBackground,
    sceneWheelNodeKrai,
    sceneWheelSolar,
    show() {
        const groups = [sceneWheelSolar.item, sceneWheelNodeKrai.item];
        scene.add(...groups);
        groups.forEach((group) => {
            group.scale.set(0, 0, 0);
            // 创建弹性放大动画
            gsap.timeline().to(group.scale, {
                x: 1, // 放大到1.2倍
                y: 1,
                z: 1,
                duration: 5,
                ease: 'elastic.out(0.2)', // 使用elastic.out增强弹性感
            });
        });
        sceneWheelBackground.show();
    },
};
