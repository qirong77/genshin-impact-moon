import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { camera, cameraGui, renderer } from "./main";

export const orbitCOntroler = new OrbitControls(camera, renderer.domElement);
// orbitCOntroler.enabled = false