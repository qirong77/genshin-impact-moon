import { gui } from "../../common/gui";
import { scene, THREE } from "../../common/main";
import { IStarRingGeometryConfig, StarRingGeometry } from "./StarRingGeometry";
import { createStarMateril } from "./StarRingMaterial";

export function createStarRing(config: IStarRingGeometryConfig = {}) {
    const folder = gui.addFolder("star-ring");
    folder.close();
    const starRingGeometry = new StarRingGeometry(folder, config);
    const material = createStarMateril(folder, config);
    const geometry = starRingGeometry.getGeometry();
    const points = new THREE.Points(geometry!, material);
    // @ts-ignore
    starRingGeometry.onChangeConfig((geometry) => {
        points.geometry = geometry;
    });
    return points;
}
