import { gui } from "../../common/gui";
import { scene, THREE } from "../../common/main";
import { StarBoxGeometry } from "./StarBoxGeometry";
import { createStarBoxMaterial } from "./StarBoxMaterial";

export function createStarBox(config?: {
    starCounts?: number;
    boxSize?: number;
    color?: THREE.Color;
    randomness?: number;
    blinkFrequency?: number;
    starSize?: number;
    minDistance?: number;
    maxDistance?: number;
}) {
    const folder = gui.addFolder("star-box");
    folder.close();
    const starBoxGeometry = new StarBoxGeometry(folder, config);
    const material = createStarBoxMaterial(folder);
    const geometry = starBoxGeometry.getGeometry();
    const points = new THREE.Points(geometry!, material);

    starBoxGeometry.onChangeConfig((geometry: THREE.BufferGeometry) => {
        points.geometry = geometry;
    });
    scene.add(points);
    return points;
}