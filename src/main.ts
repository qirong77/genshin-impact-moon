import "./style.css";
import "./common/index";
// import "./scene/1-mask/index";
// import "./scene/2-moon/index";
import "./scene/3-wheel/index";
// import './scene/4-Nod-Krai/index'
import { gui } from "./common/gui";
import { orbitCOntroler } from "./common/oribtControls";
const isProd = import.meta.env.PROD;
if (isProd) {
    gui.destroy();
    orbitCOntroler.dispose();
}
