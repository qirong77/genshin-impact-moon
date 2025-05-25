import { THREE } from '@/common/main';

import { GIMSceneItem } from '@/type';
import { GIMSceneItemMoonLight } from './moon-light';
import { GIMSceneItemMoon } from './moon';
import { GIMSceneItemMoonShadow } from './moon-shadow';
import { GIMSceneItemMoonSecond } from './moon-second';
const group = new THREE.Group();
group.add(GIMSceneItemMoon.item);
group.add(GIMSceneItemMoonLight.item);
group.add(GIMSceneItemMoonSecond.item);
group.add(GIMSceneItemMoonShadow.item);
export const GIMSceneItemMoonGroup: GIMSceneItem = {
    name: 'GIMSceneItemMoonGroup',
    item: group,
    opacityShow(ease: string, duration: number, opacity: number = 1.0) {
        GIMSceneItemMoon.opacityShow(ease, duration, opacity);
        GIMSceneItemMoonLight.opacityShow(ease, duration, opacity);
        GIMSceneItemMoonSecond.opacityShow(ease, duration, opacity);
        GIMSceneItemMoonShadow.opacityShow(ease, duration, opacity);
    },
    opacityHide(ease, duration, opacity) {
        GIMSceneItemMoon.opacityHide(ease, duration, opacity);
        GIMSceneItemMoonLight.opacityHide(ease, duration, opacity);
        GIMSceneItemMoonSecond.opacityHide(ease, duration, opacity);
        GIMSceneItemMoonShadow.opacityHide(ease, duration, opacity);
    },
};
