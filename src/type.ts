import { THREE } from './common/main';

// GeshinImpactMoonSingleSceneItem，由于透明度的改变可能是材料的属性，或是 shader，所以需要单独管理
export type GIMSceneItem = {
    name: string;
    item: THREE.Mesh | THREE.Group | THREE.Points;
    opacityShow: (ease: string, duration: number, opacity: number) => void;
    opacityHide: (ease: string, duration: number, opacity: number) => void;
};
