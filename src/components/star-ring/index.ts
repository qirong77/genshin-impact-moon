import { gui } from "../../common/gui";
import { scene, THREE } from "../../common/main";
import { StarRingGeometry } from "./StarRingGeometry";
import { createStarMateril } from "./StarRingMaterial";

export function createStarRing(config?: {
    starCounts?: number;
    innerRadius?: number;
    outerRadius?: number;
}) {
    const folder = gui.addFolder("star-ring");
    folder.close()
    const starRingGeometry = new StarRingGeometry(folder,config);
    const material = createStarMateril(folder);
    const geometry = starRingGeometry.getGeometry();
    const points = new THREE.Points(geometry!, material);
    scene.add(points);
    // @ts-ignore
    starRingGeometry.onChangeConfig((geometry) => {
        points.geometry = geometry;
    });
}
