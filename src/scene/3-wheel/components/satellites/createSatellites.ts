import { scene, THREE } from "@/common/main";

import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { createMainImage } from "./createMainImage";
export function createSatellites(gui: GUI) {
    const mainImageMesh = createMainImage(gui);
    scene.add(mainImageMesh);
}
