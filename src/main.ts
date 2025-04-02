import "./style.css";
import "./common/index";
// import "./groups/solar";
// import "./groups/background";
import './components/berlin-noise/index'
import './components/moon/index'
import './groups/vedio-icon'
import { gui } from "./common/gui";
import { orbitCOntroler } from "./common/oribtControls";
const isProd = import.meta.env.PROD;
if (isProd) {
    gui.destroy();
    orbitCOntroler.dispose();
}
