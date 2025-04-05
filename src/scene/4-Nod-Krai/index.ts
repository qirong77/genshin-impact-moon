import { scene, THREE } from "@/common/main";
import { createMainImage } from "./card/createMainImage";
// import { createSatellitesBackground } from "./createSatelliteBackground";
import Fatui from "@assets/Nuodekalai/Fatui.png";
import { createSceneWheelGui } from "../3-wheel/wheel-gui";
const gui = createSceneWheelGui("Nod-Krai");

const cardFront = createCard();
const cardBack = createCard();

function createCard() {
    const mainImageMesh = createMainImage(gui);
    // const background = createSatellitesBackground(gui);
    const group = new THREE.Group();
    group.add(mainImageMesh);
    mainImageMesh.material.uniforms.u_time;
    // group.add(background);
    group.scale.set(1.2, 1.2, 1.2);
    scene.add(group);
}
