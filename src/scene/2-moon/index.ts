import { GIMSceneItemMoonBg } from './components/moon-bg';
import { GIMSceneItemMoonStars } from './components/moon-stars';
import gsap from 'gsap';
import { scene, THREE } from '@/common/main';
import { GIMSceneItemMoonGroup } from './components/moon/group';

const group = new THREE.Group();
const moveY = 5;
group.position.setY(moveY);
group.add(GIMSceneItemMoonGroup.item);
group.add(GIMSceneItemMoonBg.item);
group.add(GIMSceneItemMoonStars.item);
function dispear() {
    const duration = 6;
    gsap.to(group.position, {
        y: group.position.y + moveY,
        duration,
        ease: 'power2.out',
    });
    GIMSceneItemMoonGroup.opacityHide('power2.out', duration, 0.0);
    GIMSceneItemMoonBg.opacityHide('power2.out', duration, 0.0);
    GIMSceneItemMoonStars.opacityHide('power2.out', duration, 0.0);
}
function show() {
    group.position.setY(moveY);
    scene.add(group); // 将组添加到场景中
    const duration = 5;
    gsap.to(group.position, {
        y: group.position.y - moveY,
        duration,
        ease: 'power2.out',
    });
    GIMSceneItemMoonGroup.opacityShow('power2.out', duration, 1.0);
    GIMSceneItemMoonBg.opacityShow('power2.out', duration, 1.0);
    GIMSceneItemMoonStars.opacityShow('power2.out', duration, 1.0);
}
export const sceneMoon = {
    dispear,
    show,
};
