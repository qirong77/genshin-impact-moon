import {  THREE } from "../../../../common/main";
import { createSceneWheelGui } from "../../wheel-gui";
import { IStarRingGeometryConfig, StarRingGeometry } from "./StarRingGeometry";
import { createStarMateril } from "./StarRingMaterial";
let index = 0;
export function createStarRing(config: IStarRingGeometryConfig = {}) {
    index++;
    const folder = createSceneWheelGui("wheel-star-ring-" + index);
    const starRingGeometry = new StarRingGeometry(folder, config);
    const material = createStarMateril(folder, config);
    const geometry = starRingGeometry.getGeometry();
    const points = new THREE.Points(geometry!, material);
    // @ts-ignore
    starRingGeometry.onChangeConfig((geometry) => {
        points.geometry = geometry;
    });
    points.name = 'star-ring' + index;
    return points;
}
