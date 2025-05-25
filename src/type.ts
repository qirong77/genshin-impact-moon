import { THREE } from './common/main';

// GeshinImpactMoonSingleSceneItem
export type GIMSceneItem = {
    name: string;
    item: THREE.Mesh | THREE.Group | THREE.Points;
    opacityShow: (ease: string, duration: number, opacity: number) => void;
    opacityHide: (ease: string, duration: number, opacity: number) => void;
};
