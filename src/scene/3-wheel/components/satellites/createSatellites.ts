import { scene, THREE } from "@/common/main";

import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { createMainImage } from "./createMainImage";
import { createSatellitesBackground } from "./createSatelliteBackground";
export function createSatellites(gui: GUI) {
    const mainImageMesh = createMainImage(gui);
    const background = createSatellitesBackground()
    scene.add(mainImageMesh);
    scene.add(background);
}
