import { gui } from "../../common/gui";
import { scene, THREE } from "../../common/main";
import { StartRingGeometry } from "./StartRingGeometry";
import { createStringMateril } from "./StartRingMaterial";

export function createStringRing() {
    const folder = gui.addFolder("start-ring");
    const startRingGeometry = new StartRingGeometry(folder);
    const material = createStringMateril(folder);
    const geometry = startRingGeometry.getGeometry();
    const points = new THREE.Points(geometry!, material);
    scene.add(points);
    // @ts-ignore
    startRingGeometry.onChangeConfig((geometry) => {
        points.geometry = geometry;
    });
}
